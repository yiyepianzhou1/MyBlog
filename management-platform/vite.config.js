import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';

function resolve(dir) {
	return path.join(__dirname, './', dir)
  }
  
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolves: [ElementPlusResolver()]
        })
    ],
	// root: './',
    publicPath: './',
	publicDir: 'public',
	base: '/',
	mode: 'development',
	overlay: false,
	optimizeDeps: {
		include: []
	},
	resolve: {
		alias: {
		'@': resolve('src'),
		'_c': resolve('src/components'),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				additionalData: '@import "./src/assets/css/variable.less";'
			}
		},
	},
	server: {
		host: '0.0.0.0',
		open: true,
		hmr: {
			overlay: false
		},
		port: '8082',
		proxy: {
			"/api": {
				changeOrigin: true,
				target: 'http://actcmsapipre.test.betawm.com/',
				rewrite: (path) => path.replace(/^\/api/, '/')
			},
		}
	},
})

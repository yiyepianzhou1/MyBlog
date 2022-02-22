import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './index.scss';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';

const params: ThemeOptions = {
  palette: {
    mode: 'light'
  },
};
const theme = createTheme({ ...params });

function DefaultLayout() {
  // 侧边栏控制
  const [open, setOpen] = useState(true);
  return (
    <div className='default_layout'>
      <ThemeProvider theme={theme}>
        <Header changeOpen={setOpen} open={open} />
        <div className='default_side_main'>
          <Sidebar changeOpen={setOpen} open={open} />
          <div className='default_content'>
            <Outlet />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default DefaultLayout;

import React from 'react';
import { IrouterModule } from "@/interface/router";

// "[request]" 表示的名字就是后面字符串中的 ${path} 的值
const Home = React.lazy(() => import(/* webpackChunkName: "[request]" */ `../../views/basic/${'home'}`));
const Page = React.lazy(() => import(/* webpackChunkName: "[request]" */ `../../views/basic/page/index`));

const basic: IrouterModule[] = [
  {
    path: '/basic/home',
    element:
      <React.Suspense fallback="测试">
        <Home />
      </React.Suspense>,
    children: []
  },
  {
    path: '/basic/page',
    element:
      <React.Suspense fallback="测试">
        <Page />
      </React.Suspense>,
    children: []
  }
];
export default basic

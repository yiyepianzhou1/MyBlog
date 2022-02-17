import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './index.scss';
function DefaultLayout() {
  // 侧边栏控制
  const [ open, setOpen ] = useState(true);
  return (
    <div className='default_layout'>
      <Header changeOpen={setOpen} open={open} />
      <div className='default_side_main'>
        <Sidebar changeOpen={setOpen} open={open} />
        <div className='default_content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;

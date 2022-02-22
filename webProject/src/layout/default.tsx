import { Outlet } from 'react-router-dom';
import React, { useState, useReducer } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './index.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function DefaultLayout() {
  const [mode, setMode] = useState<'dark' | 'light'>('light')
  const [open, setOpen] = useState(true);

  const theme = createTheme({
    palette: { mode },
  });
  return (
    <div className='default_layout'>
      <ThemeProvider theme={theme}>
        <Header changeOpen={setOpen} open={open} setMode={setMode} mode={mode} />
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

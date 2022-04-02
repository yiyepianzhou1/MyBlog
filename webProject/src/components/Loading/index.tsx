import { Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';
import ReactDOM from "react-dom";
interface props {
  text?: string
  background?: string
};

function Load(props: props) {
  const [open, setOpen] = useState(true);
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(false)}>
      <CircularProgress />
    </Backdrop>
  )
};

const Loading = {
  service({ text = '', background = '' }) {
    const dom = document.createElement('div');
    const jsxdom = (<Load text={ '' }></Load>)
    ReactDOM.render(jsxdom, dom);
  },
  close() { },
};

export default Loading;

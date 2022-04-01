import { Snackbar, Alert } from '@mui/material';
import { ReactElement, useState } from 'react';
import ReactDOM from "react-dom";

// 定义message组件
// 静态函数调用，success、error、info
interface propInfo {
  content: string
  type: string
}
function Message(props: propInfo) {
  const { content = '', type } = props;
  const [open, setOpen] = useState(true);
  setTimeout(() => { setOpen(false) }, 2000)
  return (
    <Snackbar open={open}>
      <Alert security={ type }>{ content }</Alert>
    </Snackbar>
  )
}

interface jsxdom1 extends ReactElement {
  // length, pop, push, concat
}

const message = {
  dom: HTMLDivElement,
  info(str = '') {
    this.dom = document.createElement('div') as any;
    const jsxdom: jsxdom1 = (<Message content={str} type={'info'}></Message>);
    ReactDOM.render(jsxdom, this.dom);
  },
  success() { },
  error() { }
};

export default message

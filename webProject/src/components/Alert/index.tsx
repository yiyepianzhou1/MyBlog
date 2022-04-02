import { Snackbar, Alert, AlertProps, AlertColor, SnackbarOrigin } from '@mui/material';
import { ReactElement, useState } from 'react';
import ReactDOM from "react-dom";

interface propInfo {
  content: string
  type?: AlertColor
}
function Message(props: propInfo): ReactElement<any> {
  const { content = '', type } = props;
  const [open, setOpen] = useState(true);
  const anchorOrigin: SnackbarOrigin = {
    vertical: 'top',
    horizontal: 'center'
  };
  return (
    <Snackbar open={open} autoHideDuration={ 2000 } onClose={() => setOpen(false)} anchorOrigin={anchorOrigin}>
      <Alert severity={ type }>{ content }</Alert>
    </Snackbar>
  )
}

const message = {
  dom: null,
  info(str = '') {
    this.dom = document.createElement('div') as any;
    const jsxdom = (<Message content={str} type={'info'}></Message>) as any;
    ReactDOM.render(jsxdom, this.dom);
    document.body.appendChild(this.dom as any);
  },
  success(str = '') {
    this.dom = document.createElement('div') as any;
    const jsxdom = (<Message content={str} type={'success'}></Message>) as any;
    ReactDOM.render(jsxdom, this.dom);
    document.body.appendChild(this.dom as any);
  },
  error(str: string) {
    this.dom = document.createElement('div') as any;
    const jsxdom = (<Message content={str} type={'error'}></Message>) as any;
    ReactDOM.render(jsxdom, this.dom);
    document.body.appendChild(this.dom as any);
  }
};

export default message

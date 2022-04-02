import { Snackbar, Alert, AlertColor, SnackbarOrigin } from '@mui/material';
import { ReactElement, useState } from 'react';
import ReactDOM from "react-dom";

interface propInfo {
  content: string
  type?: AlertColor
  id?: string
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
  info(str = '') {
    const dom = document.createElement('div');
    const jsxdom = (<Message content={str} type={'info'}></Message>);
    ReactDOM.render(jsxdom, dom);
    document.body.appendChild(dom);
  },
  success(str = '') {
    const dom = document.createElement('div');
    const jsxdom = (<Message content={str} type={'success'}></Message>);
    ReactDOM.render(jsxdom, dom);
    document.body.appendChild(dom);
  },
  error(str: string) {
    const dom = document.createElement('div');
    const jsxdom = (<Message content={str} type={'error'}></Message>);
    ReactDOM.render(jsxdom, dom);
    document.body.appendChild(dom);
  }
};

export default message

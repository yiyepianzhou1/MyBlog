import React from "react";
import Message from "@/components/Alert"

export default {
  dom: HTMLDivElement,
  info(str = '') {
    this.dom = document.createElement('div') as any;
    const jsxdom = (<Message content={str} type={'info'}></Message>)
  },
  success() { },
  error() { }
};

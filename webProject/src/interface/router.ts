export interface IrouterModule {
    path?: string;
    element?: any;
    /** v6版本已取消 */
    component?: any;
    exact?: Boolean;
    children?: IrouterModule[];
    render?: any;
    // 用于router 和 menu 的结合
    title?: string;
    key?: string;
    icon?: string;
    subs?: IrouterModule[];
    meta?: IMeta
};

export interface IMeta {

} 

import { IrouterModule } from "../interface/router";
import { useRoutes, BrowserRouter, HashRouter } from "react-router-dom";
import DefaultLayout from "../layout/default";
import basic from "./modules/basic";

const RouterModule: IrouterModule[] = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            ...basic,
        ],
    }
];
function RenderRoutes() {
    const Routes = () => useRoutes(RouterModule);
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    ) 
}
export default RenderRoutes

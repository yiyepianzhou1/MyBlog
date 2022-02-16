import { Outlet } from 'react-router-dom'
import './index.scss'
function DefaultLayout() {
    return (
        <div className='default_layout'>
            <Outlet />
        </div>
    )
}

export default DefaultLayout;

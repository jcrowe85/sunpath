import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = props => {
    return (
        <div className={classes.layout}>
            <Outlet />
        </div>
    )
};

export default Layout;
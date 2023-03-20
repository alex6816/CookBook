import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    
    return (
        <>
            <div className='header'>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="cats">Блюда по категориям</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;

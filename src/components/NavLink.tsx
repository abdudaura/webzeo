import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

interface CustomNavLinkProps extends Omit<NavLinkProps, 'className'> {
    children: ReactNode;
    className?: string;
    activeClassName?: string;
}

export const NavLink = ({ children, className = '', activeClassName = '', ...props }: CustomNavLinkProps) => {
    return (
        <RouterNavLink
            {...props}
            className={({ isActive }) =>
                `${className} ${isActive ? activeClassName : ''}`
            }
        >
            {children}
        </RouterNavLink>
    );
};

export default NavLink;

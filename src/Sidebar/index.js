import React from 'react'
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
}from './SidebarElements';
 
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
                </Icon>

                <SidebarMenu>
                    <SidebarLink to="/">پیتزا</SidebarLink>
                    <SidebarLink to="/">دسر</SidebarLink>
                    <SidebarLink to="/">منوی کامل</SidebarLink>
                </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">سفارش</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;

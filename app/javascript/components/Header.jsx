import React from "react";
import { Layout, Menu } from "antd";


const { Header } = Layout;

export default () => (
    <Header>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
            <Menu.Item key="1">Daily Tasks</Menu.Item>
                 
        </Menu>
        
    </Header>
);
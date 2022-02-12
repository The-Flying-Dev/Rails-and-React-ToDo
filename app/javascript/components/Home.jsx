import { Layout } from "antd";
import React from "react";
import Tasks from "./Tasks";
import Header from "./Header";

export default () => (
    <Layout className="layout">
        <Content style={{ padding: "0 50px"}}>
            <div className="site-layout-content" style={{ margin: "100px auto" }}>
                <h1>Daily Tasks</h1>
                <Tasks />
            </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Tasks for the day</Footer>
    </Layout>
);
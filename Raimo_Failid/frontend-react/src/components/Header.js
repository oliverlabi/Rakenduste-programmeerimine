import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../index.css";

function Header(){
    return (
        <>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ marginBottom: "14px" }}>
            <Menu.Item><Link to="/">Main Page</Link></Menu.Item>
            <Menu.Item><Link to="/posts">Posts</Link></Menu.Item>
            <Menu.Item><Link to="/account">Account</Link></Menu.Item>
        </Menu>
        </>
    )
}

export default Header

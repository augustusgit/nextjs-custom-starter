import {Menu} from "antd";
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from "@ant-design/icons"

const {Item} = Menu; // to avoid Menu.Item


const TopNav = () => {
    return (
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined/>}>
                <Link href="/">
                    App
                    {/* <a>App</a> */}
                </Link>
            </Item>

            <Item icon={<LoginOutlined/>}>
                <Link href="/login">
                    Login
                    {/* <a>Login</a> */}
                </Link>
            </Item>

            <Item icon={<UserAddOutlined/>}>
                <Link href="/register">
                    Register
                    {/* <a>Register</a> */}
                </Link>
            </Item>
        </Menu>
    );
};

export default TopNav;
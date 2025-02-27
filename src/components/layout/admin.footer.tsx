"use client"
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Ngọc Tài ©{new Date().getFullYear()} Created by @nqoctai
            </Footer>
        </>
    )
}

export default AdminFooter
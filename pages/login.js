import React from 'react'
import TopNavbar from "../components/layout/Navbar";
import LoginBanner from "../components/Login/LoginBanner";
import LoginForm from "../components/Login/LoginForm";
import Footer from "../components/layout/Footer";

export default function login() {
    return (
        <>
            <TopNavbar/>
            <LoginBanner/>
            <LoginForm/>
            <Footer/>
        </>
    )
}

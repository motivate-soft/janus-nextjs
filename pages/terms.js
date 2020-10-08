import React from 'react'
import TopNavbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TermsBanner from "../components/Terms/TermsBanner";
import TermsMain from "../components/Terms/TermsMain";


export default function login() {
    return (
        <>
            <TopNavbar/>
            <TermsBanner/>
            <TermsMain/>
            <Footer/>
        </>
    )
}

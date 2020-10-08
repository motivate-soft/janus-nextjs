import React from 'react'
import TopNavbar from '../components/layout/Navbar'
import HomeBanner from '../components/Home/HomeBanner'
import Solution from '../components/Home/Solution'
import HowItWorks from '../components/Home/HowItWorks';
import Features from '../components/Home/Features'
import Pricing from '../components/Home/Pricing'
import Faq from '../components/Home/Faq'
import Footer from './../components/layout/Footer';

export default function Home() {
    return (
        <>
            <TopNavbar/>
            <HomeBanner/>
            <Solution/>
            <HowItWorks/>
            <Features/>
            <Pricing/>
            <Faq/>
            <Footer/>
        </>
    )
}

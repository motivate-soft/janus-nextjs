import React from 'react'
import GooglePlayIcon from '../assets/svgs/google-play-store.svg'
import AppStoreIcon from '../assets/svgs/app-store.svg'

export default function AppButtons() {
    return (
        <div className="appstore-icons-box">
            <AppStoreIcon/>
            <GooglePlayIcon/>
        </div>
    )

}
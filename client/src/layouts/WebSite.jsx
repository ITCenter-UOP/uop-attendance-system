import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from '../component/Footers/MainFooter'

const WebSite = () => {

    return (
        <div className="relative">
            {/* Main content area */}
            <div className="">
                <Outlet />
            </div>

            <MainFooter />
        </div>
    )
}

export default WebSite

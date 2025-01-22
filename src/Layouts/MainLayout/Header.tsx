'use client';

import GradientButton from "@/src/Components/GradientButton/GradientButton";
import ConnectUs from "@/src/Modals/ConnectUs/ConnectUs";
import JoinUs from "@/src/Modals/JoinUs/JoinUs";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link';
import SVG from 'react-inlinesvg';

export default function RootHeader() {
    const [openConnectUs, setOpenConnectUs] = useState(false);
    const [openJoinUs, setOpenJoinUs] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    const onConnectUs = () => {
      setOpenConnectUs(true);
    }

    const onJoinUs = () => {
      setOpenJoinUs(true);
    }

    const handleMouseDown = (e: any) => {
      if(openSidebar && !e.target.closest('.sidebar')) {
        setOpenSidebar(false);
      }
    }

    useEffect(() => {
      if(openSidebar) {
        document.addEventListener('mousedown', handleMouseDown);
      }
      return () => document.removeEventListener('mousedown', handleMouseDown);
    }, [openSidebar]);

    const renderTopMenu = () => {
      return (
      <div className="flex-1 top-menu pc hidden md:flex flex-row justify-end items-center text-white ">
        <ul className="flex">
          <li className="p-2"><Link href="/">Home</Link></li>
          <li className="p-2">Introduction</li>
          <li className="p-2">Benefits</li>
          <li className="p-2">NFTs</li>
          <li className="p-2">Community</li>
          <li className="p-2">RoadMap</li>
        </ul>
        <GradientButton className="ms-4" onClick={onConnectUs}>CONNECT US</GradientButton>
        <GradientButton className="ms-4" onClick={onJoinUs}>SIGN UP</GradientButton>
      </div>
      )
    }

    const renderToggleSidebarButton = () => {
      return (
        <div className="flex-1 flex md:hidden justify-end items-center text-white me-3">
          <button className="btn" onClick={() => setOpenSidebar(true) }>
            <SVG src="/images/icons/svg/threebar.svg" width={25} height={25} fill="white" />
          </button>
        </div>
      )
    }

    const renderSideBar = () => {
      return (
        <aside className={`sidebar fixed md:hidden ${openSidebar ? 'open' : ''}`}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li>Introduction</li>
                <li>Benefits</li>
                <li>NFTs</li>
                <li>Community</li>
                <li>RoadMap</li>
            </ul>
        </aside>
      )
    }

    return (<>
      <header className="p-2 flex">
        <div className="logo-brand">
          <Image src="/images/logos/logo.png" alt="Logo" width={100} height={100} />
        </div>

        { renderTopMenu() }

        { renderToggleSidebarButton() }
        { renderSideBar() }

      </header>

      <ConnectUs open={openConnectUs} setOpen={setOpenConnectUs} />
      <JoinUs open={openJoinUs} setOpen={setOpenJoinUs} />
    </>
    )
}
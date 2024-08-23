import React from "react";
import NavbarStyles from './navbar.module.css'
import Components from "@/components/index"
import logo from "@/images/logo.png"
import Link from "next/link";

const Navbar = () => {
    return (
        <Components.Container>
            <div className={NavbarStyles["navbar"]}>
                <div className={NavbarStyles["navbar-logo"]}>
                    <img
                        src={logo}
                        alt="logo"
                        className={NavbarStyles["navbar-logo-img"]}
                    />
                    <div className={NavbarStyles["navbar-logo-container"]}>
                        <h1>Mist Gardens</h1>
                        <h2>Museum & Botanical Garden</h2>
                    </div>
                </div>

                <ul className={NavbarStyles["navbar-links"]}>
                    <Link href={"/"} className={NavbarStyles["navbar-link"]}>
                        Home
                    </Link>
                    <Link href={"/"} className={NavbarStyles["navbar-link"]}>
                        Visit
                    </Link>
                    <Link href={"/"} className={NavbarStyles["navbar-link"]}>
                        Exhibitions
                    </Link>
                    <Link href={"/"} className={NavbarStyles["navbar-link"]}>
                        Programs & Events
                    </Link>
                    <Link href={"/"} className={NavbarStyles["navbar-link"]}>
                        Store
                    </Link>

                    <Components.Button buttonType="secondary">
                    Membership
                    </Components.Button>
                </ul>
            </div>
        </Components.Container>
    )
}

export default Navbar
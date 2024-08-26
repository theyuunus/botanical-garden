import React from "react";
import NavbarStyles from './navbar.module.css'
import Components from "@/components/index"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <Components.Container>
            <div className={NavbarStyles["navbar"]}>
                <div className={NavbarStyles["navbar-logo"]}>
                    <Image
                        src="/logo.svg"
                        width={59}
                        height={59}
                        alt="logo"
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
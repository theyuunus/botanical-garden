import React from "react";
import FooterStyles from './footer.module.css'
import Components from "@/components";
import logo from '@/images/logo.png'
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={FooterStyles["footer"]}>
                <Components.Container>
                    <div className={FooterStyles["footer-container"]}>
                        <div className={FooterStyles["footer-left"]}>
                            <div className={FooterStyles["footer-logo"]}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    className={FooterStyles["footer-logo-img"]}
                                />
                                <div className={FooterStyles["footer-logo-container"]}>
                                    <h1>Mist Gardens</h1>
                                    <h2>Museum & Botanical Garden</h2>
                                </div>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className={FooterStyles["footer-links"]}>
                            <h3 className={FooterStyles["footer-title"]}>Sitemap</h3>

                            <Link href={"/"} className={FooterStyles["footer-link"]}>
                                Home
                            </Link>
                            <Link href={"/"} className={FooterStyles["footer-link"]}>
                                Visit
                            </Link>
                            <Link href={"/"} className={FooterStyles["footer-link"]}>
                                Exhibitions
                            </Link>
                            <Link href={"/"} className={FooterStyles["footer-link"]}>
                                Programs & Events
                            </Link>
                            <Link href={"/"} className={FooterStyles["footer-link"]}>
                                Store
                            </Link>
                            <Link href={"/"} className={FooterStyles["footer-link"]}>
                                Membership
                            </Link>
                        </div>

                        <div>
                            <h3 className={FooterStyles["footer-title"]}>Connect</h3>

                            <div className={FooterStyles["footer-icons"]}>
                                <Components.Icons name={"twitter"} />
                                <Components.Icons name={"facebook"} />
                                <Components.Icons name={"linkedin"} />
                                <Components.Icons name={"email"} />
                            </div>
                        </div>
                    </div>
                </Components.Container>
            </div>

            <div className={FooterStyles["footer-bottom"]}>
                <p className={FooterStyles["footer-bottom-p"]}>
                    &copy; {new Date().getFullYear()}  Mist Gardens. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
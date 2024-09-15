// import 'flowbite';
import React, { useState } from "react";
const SignIn = () => {
    // State to handle dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <main>
            <div id="main-wrapper" className="flex">
                <aside
                    id="application-sidebar-brand"
                    className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full  transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed top-0 with-vertical h-screen z-[999] flex-shrink-0 border-r-[1px] w-[270px] border-gray-400 bg-white left-sidebar transition-all duration-300"
                >
                    <div className="p-5">
                        <a href="../" className="text-nowrap">
                            <img
                                src="https://zelda.nintendo.com/links-awakening/assets/img/home/hero-char.png"
                                alt="Logo-Dark"
                                style={{ height: "50px", width: "50px" }}
                            />
                        </a>
                    </div>
                    <div className="scroll-sidebar" data-simplebar="">
                        <div className="px-6 mt-8">
                            <nav className=" w-full flex flex-col sidebar-nav">
                                <ul
                                    id="sidebarnav"
                                    className="text-gray-600 text-sm"
                                >
                                    <li className="text-xs font-bold pb-4">
                                        <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
                                        <span>HOME</span>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md  w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../index.html"
                                        >
                                            <i className="ti ti-layout-dashboard  text-xl"></i>{" "}
                                            <span>Dashboard</span>
                                        </a>
                                    </li>

                                    <li className="text-xs font-bold mb-4 mt-8">
                                        <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
                                        <span>UI COMPONENTS</span>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../components/buttons.html"
                                        >
                                            <i className="ti ti-article  text-xl"></i>{" "}
                                            <span>Buttons</span>
                                        </a>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../components/alerts.html"
                                        >
                                            <i className="ti ti-alert-circle  text-xl"></i>{" "}
                                            <span>Alerts</span>
                                        </a>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../components/cards.html"
                                        >
                                            <i className="ti ti-cards  text-xl"></i>{" "}
                                            <span>Card</span>
                                        </a>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../components/forms.html"
                                        >
                                            <i className="ti ti-file-description  text-xl"></i>{" "}
                                            <span>Forms</span>
                                        </a>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../components/typography.html"
                                        >
                                            <i className="ti ti-typography text-xl"></i>{" "}
                                            <span>Typography</span>
                                        </a>
                                    </li>

                                    <li className="text-xs font-bold mb-4 mt-8">
                                        <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
                                        <span>AUTH</span>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../pages/authentication-login.html"
                                        >
                                            <i className="ti ti-login  text-xl"></i>{" "}
                                            <span>Login</span>
                                        </a>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../pages/authentication-register.html"
                                        >
                                            <i className="ti ti-user-plus  text-xl"></i>{" "}
                                            <span>Register</span>
                                        </a>
                                    </li>

                                    <li className="text-xs font-bold mb-4 mt-8">
                                        <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
                                        <span>EXTRA</span>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../pages/icons.html"
                                        >
                                            <i className="ti ti-mood-happy  text-xl"></i>{" "}
                                            <span>Icons</span>
                                        </a>
                                    </li>

                                    <li className="sidebar-item">
                                        <a
                                            className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                                            href="../pages/sample-page.html"
                                        >
                                            <i className="ti ti-aperture  text-xl"></i>{" "}
                                            <span>Sample Page</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="m-6  relative">
                        <div className="bg-blue-500 p-5 rounded-md flex items-center justify-between">
                            <div>
                                <h5 className="text-base font-semibold text-gray-700 mb-3">
                                    Upgrade to Pro
                                </h5>
                                <button className="text-xs font-semibold hover:bg-blue-700 text-white bg-blue-600 rounded-md  px-4 py-2">
                                    Buy Pro
                                </button>
                            </div>
                            <div className="-mt-12 -mr-2">
                                <img
                                    src="https://zelda.nintendo.com/links-awakening/assets/img/home/hero-char.png"
                                    className="max-w-fit"
                                    alt="profile"
                                />
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="w-full page-wrapper overflow-hidden">
                    <header className="container full-container w-full text-sm py-4">
                        <div className=" w-full">
                            <nav
                                className=" w-full bg-gray-800  flex items-center justify-between"
                                aria-label="Global"
                            >
                                <ul className="icon-nav flex items-center gap-4">
                                    <li className="relative xl:hidden">
                                        <a
                                            className="text-xl  icon-hover cursor-pointer text-heading"
                                            id="headerCollapse"
                                            data-hs-overlay="#application-sidebar-brand"
                                            aria-controls="application-sidebar-brand"
                                            aria-label="Toggle navigation"
                                            href="#"
                                        >
                                            <i className="ti ti-menu-2 relative z-1"></i>
                                        </a>
                                    </li>

                                    <li className="relative">
                                        <div className="hs-dropdown relative inline-flex [--placement:bottom-left] sm:[--trigger:hover]">
                                            <a
                                                className="relative hs-dropdown-toggle inline-flex  icon-hover text-gray-600"
                                                href="#"
                                            >
                                                <i className="ti ti-bell-ringing text-xl relative z-[1]"></i>
                                                <div className="absolute inline-flex items-center justify-center  text-white text-[11px] font-medium  bg-blue-600 w-2 h-2 rounded-full -top-[1px] -right-[6px]"></div>
                                            </a>
                                            <div
                                                className="card hs-dropdown-menu transition-[opacity,margin] border border-gray-400 rounded-md duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max  w-[300px] hidden z-[12]"
                                                aria-labelledby="hs-dropdown-custom-icon-trigger"
                                            >
                                                <div>
                                                    <h3 className="text-gray-600 font-semibold text-base px-6 py-3">
                                                        Notification
                                                    </h3>
                                                    <ul className="list-none  flex flex-col">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="py-3 px-6 block hover:bg-blue-500"
                                                            >
                                                                <p className="text-sm text-gray-600 font-semibold">
                                                                    Roman Joined
                                                                    the Team!
                                                                </p>
                                                                <p className="text-xs text-gray-500 font-medium">
                                                                    Congratulate
                                                                    him
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="py-3 px-6 block hover:bg-blue-500"
                                                            >
                                                                <p className="text-sm text-gray-600 font-semibold">
                                                                    New message
                                                                    received
                                                                </p>
                                                                <p className="text-xs text-gray-500 font-medium">
                                                                    Salma sent
                                                                    you new
                                                                    message
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="py-3 px-6 block hover:bg-blue-500"
                                                            >
                                                                <p className="text-sm text-gray-600 font-semibold">
                                                                    New Payment
                                                                    received
                                                                </p>
                                                                <p className="text-xs text-gray-500 font-medium">
                                                                    Check your
                                                                    earnings
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="py-3 px-6 block hover:bg-blue-500"
                                                            >
                                                                <p className="text-sm text-gray-600 font-semibold">
                                                                    Jolly
                                                                    completed
                                                                    tasks
                                                                </p>
                                                                <p className="text-xs text-gray-500 font-medium">
                                                                    Assign her
                                                                    new tasks
                                                                </p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="py-3 px-6 block hover:bg-blue-500"
                                                            >
                                                                <p className="text-sm text-gray-600 font-semibold">
                                                                    Roman Joined
                                                                    the Team!
                                                                </p>
                                                                <p className="text-xs text-gray-500 font-medium">
                                                                    Congratulate
                                                                    him
                                                                </p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="#"
                                        className="btn font-medium hover:bg-blue-700 py-2"
                                        aria-current="page"
                                    >
                                        Download Free
                                    </a>
                                    <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
                                        <a className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full">
                                            <img
                                                className="object-cover w-9 h-9 rounded-full"
                                                src="https://zelda.nintendo.com/links-awakening/assets/img/home/hero-char.png"
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </a>
                                        <div
                                            className="card hs-dropdown-menu transition-[opacity,margin] border border-gray-400 rounded-[7px] duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max  w-[200px] hidden z-[12]"
                                            aria-labelledby="hs-dropdown-custom-icon-trigger"
                                        >
                                            <div className="card-body p-0 py-2">
                                                <a
                                                    href="javscript:void(0)"
                                                    className="flex gap-2 items-center px-4 py-[6px] hover:bg-blue-500"
                                                >
                                                    <i className="ti ti-user text-gray-500 text-xl "></i>
                                                    <p className="text-sm text-gray-500">
                                                        My Profile
                                                    </p>
                                                </a>
                                                <a
                                                    href="javscript:void(0)"
                                                    className="flex gap-2 items-center px-4 py-[6px] hover:bg-blue-500"
                                                >
                                                    <i className="ti ti-mail text-gray-500 text-xl"></i>
                                                    <p className="text-sm text-gray-500">
                                                        My Account
                                                    </p>
                                                </a>
                                                <a
                                                    href="javscript:void(0)"
                                                    className="flex gap-2 items-center px-4 py-[6px] hover:bg-blue-500"
                                                >
                                                    <i className="ti ti-list-check text-gray-500 text-xl "></i>
                                                    <p className="text-sm text-gray-500">
                                                        My Task
                                                    </p>
                                                </a>
                                                <div className="px-4 mt-[7px] grid">
                                                    <a
                                                        href="../../pages/authentication-login.html"
                                                        className="btn-outline-primary w-full hover:bg-blue-600 hover:text-white"
                                                    >
                                                        Logout
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="h-full overflow-y-auto  max-w-full  pt-4">
                        <div className="container full-container py-5 flex flex-col gap-6">
                            <div className="card">
                                <div className="card-body flex flex-col gap-6">
                                    <h6 className="text-lg text-gray-600 font-semibold">
                                        Sample Page
                                    </h6>
                                    <p className="text-sm">
                                        This is a sample page
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </main>
    );
};

export default SignIn;

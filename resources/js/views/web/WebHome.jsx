import React, { useState } from "react";
const WebHome = () => {
    // State to handle dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8 mr-3"
                        alt="Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        MyApp
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Services
                            </a>
                        </li>
                    </ul>
                </div>

                {/* User Dropdown */}
                <div className="relative">
                    {/* User Icon */}
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="User Avatar"
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                            <a
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                                Profile
                            </a>
                            <a
                                href="/settings"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                                Settings
                            </a>
                            <a
                                href="/logout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default WebHome;

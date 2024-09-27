const AdminSidebar = () => {
    return (
        <nav className="w-full flex flex-col sidebar-nav">
            <ul id="sidebarnav" className="text-gray-600 text-sm">
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
    );
};
export default AdminSidebar;

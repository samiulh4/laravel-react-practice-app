import { Outlet } from "react-router-dom";
import "../../css/admin-theme.css";
import AdminBrandLogo from "../components/partials/AdminBrandLogo";
import AdminSidebar from "../components/partials/AdminSidebar";
import AdminFooter from "../components/partials/AdminFooter";
import AdminHeader from "../components/partials/AdminHeader";

const AdminLayout = () => {
    return (
        <main>
            <div id="main-wrapper" className="flex">
                <aside
                    id="application-sidebar-brand"
                    className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed top-0 with-vertical h-screen z-[999] flex-shrink-0 border-r-[1px] w-[270px] border-gray-400  bg-white left-sidebar transition-all duration-300"
                >
                    <AdminBrandLogo />
                    {/*--logo--*/}
                    <div className="scroll-sidebar" data-simplebar="">
                        <div className="px-6 mt-8">
                            <AdminSidebar />
                            {/*--./sidebar-nav--*/}
                        </div>
                        {/*--./px-6 mt-8--*/}
                    </div>
                    {/*--./scroll-sidebar--*/}
                </aside>
                {/*--</aside>--*/}
                <div className="w-full page-wrapper overflow-hidden">
                    <AdminHeader />
                    {/*--</header>--*/}
                    <main className="h-full overflow-y-auto max-w-full pt-4">
                        <div className="container full-container py-5 flex flex-col gap-6">
                            <Outlet />
                            <AdminFooter />
                        </div>
                        {/*--./full-container--*/}
                    </main>
                    {/*--Main Content--*/}
                </div>
                {/*--./page-wrapper--*/}
            </div>
            {/*--#/main-wrapper--*/}
        </main>
    );
};

export default AdminLayout;

import { Outlet } from "react-router-dom";
const GuestLayout = () => {
    return (
        <main className="DEFAULT_THEME bg-white">
            <div className="flex flex-col w-full  overflow-hidden relative min-h-screen radial-gradient items-center justify-center g-0 px-4">
                <div className="justify-center items-center w-full card lg:flex max-w-md">
                    <div className="w-full card-body">
                        <a href="../" className="py-4 block">
                            <img
                                src="https://img.freepik.com/premium-vector/user-authentication-icon-simple-element-illustration-user-authentication-concept-symbol-design-can-be-used-web-mobile_159242-7904.jpg"
                                alt=""
                                className="h-20 mx-auto"
                            />
                        </a>
                        <p className="mb-4 text-gray-500 text-sm text-center">
                            Your Social Campaigns
                        </p>
                        <Outlet />
                    </div>
                </div>
            </div>
            {/*--Main Content--*/}
        </main>
    );
};
export default GuestLayout;

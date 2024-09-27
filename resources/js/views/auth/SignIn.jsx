const SignIn = () => {
   
    return (
        <form>
            <div className="mb-4">
                <label
                    for="forUsername"
                    className="block text-sm font-semibold mb-2 text-gray-600"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="forUsername"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0 "
                    aria-describedby="hs-input-helper-text"
                />
            </div>

            <div className="mb-6">
                <label
                    for="forPassword"
                    className="block text-sm font-semibold mb-2 text-gray-600"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="forPassword"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0 "
                    aria-describedby="hs-input-helper-text"
                />
            </div>

            <div className="flex justify-between">
                <div className="flex">
                    <input
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-[4px] text-blue-600 focus:ring-blue-500 "
                        id="hs-default-checkbox"
                        checked
                    />
                    <label
                        for="hs-default-checkbox"
                        className="text-sm text-gray-600 ms-3"
                    >
                        Remeber this Device
                    </label>
                </div>
                <a
                    href="../"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    Forgot Password ?
                </a>
            </div>

            <div className="grid my-6">
                <a
                    href="../"
                    className="btn py-[10px] text-base text-white font-medium hover:bg-blue-700"
                >
                    Sign In
                </a>
            </div>

            <div className="flex justify-center gap-2 items-center">
                <p className="text-base font-medium text-gray-500">
                    New to Modernize?
                </p>
                <a
                    href="./authentication-register.html"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    Create an account
                </a>
            </div>
        </form>
    );
};

export default SignIn;

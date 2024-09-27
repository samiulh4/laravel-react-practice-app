const SignUp = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-600">
                    Name
                </label>
                <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0 "
                    aria-describedby="hs-input-helper-text"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-600">
                    Email Address
                </label>
                <input
                    type="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0"
                    aria-describedby="hs-input-helper-text"
                />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-600">
                    Upload Image
                </label>
                <input
                    type="file"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                    dark:file:bg-neutral-700 dark:file:text-neutral-400"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-sm font-semibold mb-2 text-gray-600"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0 "
                    aria-describedby="hs-input-helper-text"
                />
            </div>

            <div className="grid my-6">
                <button type="submit"
                    
                    className="btn py-[10px] text-base text-white font-medium hover:bg-blue-700"
                >
                    Sign Up
                </button>
            </div>

            <div className="flex justify-center gap-2 items-center">
                <p className="text-base font-medium text-gray-500">
                    Already have an Account?
                </p>
                <a
                    href="./authentication-login.html"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    Sign In
                </a>
            </div>
        </form>
    );
};

export default SignUp;

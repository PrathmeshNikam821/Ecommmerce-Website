import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side with a sleek gradient and minimal design */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-gray-800">
          <h1 className="text-5xl font-semibold tracking-tight">
            Welcome to Your Store
          </h1>
          <p className="text-xl font-light tracking-wide">
            Discover a world of seamless shopping.
          </p>
        </div>
      </div>

      {/* Right side for the forms or other content */}
      <div className="flex flex-1 items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

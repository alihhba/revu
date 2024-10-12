import React from "react";

interface props {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: props) => {
  return (
    <div className="relative w-full h-screen flex flex-col-reverse md:grid md:grid-cols-2 items-center justify-center">
      <div className="w-full max-md:rounded-t-lg h-full overflow-y-auto scrollbar-thin max-md:hidden">
        <div>{children}</div>
      </div>

      <div className="absolute md:hidden bottom-0 left-0 h-fit bg-white w-full rounded-t-[20px] px-p-24 pt-p-27 pb-p-10 max-h-[80vh] overflow-y-auto">
        {children}
      </div>

      {<div className="w-full h-full bg-blue-400 "></div>}
    </div>
  );
};

export default AuthWrapper;

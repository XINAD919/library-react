import React from "react";
import Header from "./Header";

const PublicLayout = ({ children }) => {
  return (
    <div className='h-screen'>
      <Header />
      <main className='md:px-8 md:my-8'>{children}</main>
    </div>
  );
};

export default PublicLayout;

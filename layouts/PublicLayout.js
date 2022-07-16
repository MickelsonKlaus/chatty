import React from "react";

function PublicLayout({ children }) {
  return (
    <main className="w-full h-screen px-5 pt-5 bg-__xiketic_2 md:px-10">
      {children}
    </main>
  );
}

export default PublicLayout;

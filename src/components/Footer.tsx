import React from "react";

function Footer() {
  return (
    <footer className="mb-10 mt-20 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Omotayo Olarewaju. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React, Nodejs, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Vercel hosting. Favicon made from{" "}
        <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed
        by CC BY 4.0
      </p>
    </footer>
  );
}

export default Footer;

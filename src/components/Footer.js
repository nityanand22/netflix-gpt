import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-10 bg-black text-white">
      <div className="w-full flex flex-col gap-6">
        <p className="font-medium">
          Questions? Call{" "}
          <span className="underline underline-offset-0">000-800-919-1743</span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 underline underline-offset-1 font-medium items-center">
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Account</p>
          <p>Media Centre</p>

          <p>Investor Relations</p>
          <p>Jobs</p>
          <p>Ways to Watch</p>
          <p>Terms of Use</p>

          <p>Privacy</p>
          <p className="hidden sm:block">Cookie Preferences</p>
          <p className="hidden sm:block">Corporate Information</p>
          <p>Contact Us</p>

          <p>Speed Test</p>
          <p>Legal Notices</p>
          <p>Only on Netflix</p>
        </div>
        <p className="mt-4 font-medium text-lg">Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;

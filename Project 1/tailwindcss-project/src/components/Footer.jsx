import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-300 py-10">
      <div className="max-w-[70rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-[tomato]">B</span>rand
          </h1>
          <p className="text-black-600 mt-3">
            Building amazing digital experiences.
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-bold mb-3">Company</h2>
          <div className="flex flex-col gap-2 text-black-600">
            <a href="#">Features</a>
            <a href="#">Use Cases</a>
            <a href="#">Integrations</a>
            <a href="#">About Us</a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h2 className="font-bold mb-3">Product</h2>
          <div className="flex flex-col gap-2 text-black-600">
            <a href="#">Pricing</a>
            <a href="#">API</a>
            <a href="#">Documentation</a>
            <a href="#">Updates</a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-bold mb-3">Resources</h2>
          <div className="flex flex-col gap-2 text-black-600">
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Community</a>
            <a href="#">Support</a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-bold mb-3">Follow Us</h2>
          <div className="flex flex-col gap-2 text-black-600">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-lg font-extrabold text-white shadow-lg shadow-teal-500/20">
            C
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Cartiva <span className="text-teal-400">MARKETPLACE</span>
            </h1>
            <p className="text-[10px] font-medium tracking-wider text-slate-500">
              MODERN PLATFORM
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-teal-500/10 text-teal-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="hidden rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white sm:block"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-400 hover:shadow-teal-500/30"
          >
            Register
          </NavLink>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
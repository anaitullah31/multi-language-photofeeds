import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;

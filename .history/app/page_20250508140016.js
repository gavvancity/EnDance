import HamburgerMenu from "./components/hamburgerMenu/HamburgerMenu";
import "./globals.css";
import "../hamburgerMenu/hamburgerMenu.css";

export default function Home() {
  return (
    <div className="hamburger-menu-container">
      <HamburgerMenu />
    </div>
  );
}

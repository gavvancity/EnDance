
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HamburgerMenu />
      <main className="p-8">{/* Your main content will go here */}</main>
    </div>
  );
}

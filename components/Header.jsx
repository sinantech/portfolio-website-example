//library or framework
import Link from "next/link";

//ui
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sinan<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop nav & hire me button bitch*/}
        <div className="hidden xl:flex">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

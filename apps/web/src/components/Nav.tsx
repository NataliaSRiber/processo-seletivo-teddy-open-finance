import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from '../assets/logos/logo.svg';


export default function Nav() {
  return (
    <section className="fixed top-0 z-10 w-full shadow-md">
      <div className="items-center justify-between px-7 py-5 md:flex md:px-10">
        <div className="mr-1 pt-2 text-3xl text-newpink-500">
          <div className="flex cursor-pointer items-center text-2xl font-bold">
            <Link to="/">
              <img src={logo} alt="Teddy Open Finance" className="h-[49px] w-[100px]
              " />
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </section>
  )
}
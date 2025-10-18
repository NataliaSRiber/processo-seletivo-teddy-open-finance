import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '../assets/icons/MenuIcon'


const routes = [
  { name: 'Home', route: '/' },
  { name: 'Clientes', route: '/clients' },
  { name: 'Clientes selecionados', route: '/clients/:id' },
  { name: 'Sair', route: '/' },
]

export default function Menu() {
  const location = useLocation()
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  function setUnderlineOnCurrentPage(link: string) {
    return link === location.pathname 
      ? 'before:w-full before:opacity-100' 
      : 'before:w-0 before:opacity-0'
  }

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-7 cursor-pointer text-3xl md:hidden z-50"
      >
        {open ? (
          <p className="text-black font-bold 2xl">X</p> ) : (
          <MenuIcon/>
        )}
      </div>
      <ul
        className={`
          fixed left-0 z-40 w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in-out 
          md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0
          ${open ? 'top-20 opacity-100' : 'top-[-100%] opacity-0 md:opacity-100'}
        `}
      >
        {routes.map(({ name, route }, index) => (
          <li
            key={index}
            className="my-7 text-base font-normal md:my-0 md:ml-8 text-black"
            onClick={() => setOpen(false)}
          >
            <Link
              to={route}
              className={`
                ${setUnderlineOnCurrentPage(route)}
                relative inline-block text-black hover:text-brand-primary
                before:absolute before:left-1/2 before:top-7 
                before:h-[0.5px] before:w-0 before:-translate-x-1/2 
                before:rounded-full before:bg-brand-primary
                before:opacity-0 before:transition-all 
                before:duration-700 before:content-['']
                hover:before:w-full hover:before:opacity-70
              `}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
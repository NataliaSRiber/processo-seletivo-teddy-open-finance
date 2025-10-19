import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MenuIcon from '../assets/icons/MenuIcon'

const routes = [
  { name: 'Home', route: '/' },
  { name: 'Clientes', route: '/clients' },
  { name: 'Clientes selecionados', route: '/selectedClients' },
]

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate();
  const username = localStorage.getItem('username')

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  return (
    <>
      <button
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="absolute right-8 top-7 cursor-pointer text-3xl md:hidden z-40"
      >
        {open ? (
          <span className="text-black font-bold text-2xl">×</span>
        ) : (
          <MenuIcon />
        )}
      </button>

      <ul
        className={`
          fixed left-0 z-30 w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in-out
          md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0
          ${open ? 'top-20 opacity-100 min-h-screen' : 'top-[-100%] opacity-0 md:opacity-100'}
        `}
      >
        {routes.map(({ name, route }, index) => (
          <li
            key={index}
            className="my-7 text-base font-normal md:my-0 md:ml-8 text-black"
            onClick={() => setOpen(false)}
          >
            <NavLink
              to={route}
              className={({ isActive }) => `
                relative inline-block text-black hover:text-brand-primary text-base
                before:absolute before:left-1/2 before:top-7 
                before:h-[0.5px] before:w-0 before:-translate-x-1/2 
                before:rounded-full before:bg-brand-primary
                before:opacity-0 before:transition-all before:duration-700 before:content-['']
                hover:before:w-full hover:before:opacity-70
                ${isActive ? 'before:w-full before:opacity-100' : ''}
              `}
              end={route === '/'}
            >
              {name}
            </NavLink>
          </li>
        ))}
        <li className="my-7 md:my-0 md:ml-4">
          <button
            onClick={handleLogout}
            className="text-black hover:text-brand-primary cursor-pointer text-base"
          >
            Sair
          </button>
        </li>
      </ul>
      <div className='md:flex hidden'>
        <p className='text-black text-base font-normal'>Olá,{' '}<span className='font-bold text-black text base capitalize'>{username}!</span></p>  
      </div>
   </>
  )
}

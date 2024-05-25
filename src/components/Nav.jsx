import { headerLogo } from 
'../assets/images';
import { hamburger } from 
'../assets/icons';

import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 absolute w-full">
        <nav className="border border-0  flex justify-between items-center 
                        max-container">
            <a className="" href="/">
                <img 
                 src={headerLogo}
                 alt ="logo"
                 width={130}
                 height={29}
                 />
            </a>
            <ul className="border border-0 flex flex-1 justify-center 
                items-center gap-16 max-lg:hidden">
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <a className="font-monts 
                            errat leading-normal 
                            text-lg text-slate-gray">{link.label}</a>
                        </li>
                    )) }
            </ul>
            <div className="hidden max-lg:block">
                <img 
                    src={hamburger}
                    alt ="Hamburger"
                    width ={25}
                    height={25}
                 />
                 
            </div>
        </nav>
    </header>
  )
}

export default Nav
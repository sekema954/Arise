// Navbar
import logo from '../assets/images/logo.png';
import { Body_font, Title_font } from '../constants/fonts';
import avatar_placeholder from '../assets/images/avatar-placeholder.png';
const Navbar = () =>{
   return(
     <nav style={{...Body_font}} className="h-[100px] text-white flex items-center justify-between bg-[#2B2B2B] px-10 z-[1000]">
      {/**logo */}
      <div className='flex items-center justify-center'>
        <img className='w-10 h-10' src={logo} alt="Arise Diamond Logo" aria-label="Arise Diamond Logo" />
        <h1 style={{...Title_font}} className=''>Arise</h1>
      </div>
      {/**nav links */}
      <div className='lg:flex gap-10 hidden'>
        <ul className='flex items-center justify-center gap-5'>
          {[
            {id:1, href:"/marketplace", content:"Marketplace"},
            {id:2, href:"/hunter", content:"Hunter"},
          ].map((link)=>(
            <li className='transition-all duration-[1s] hover:shadow-[0_0_15px_#A259FF]' key={link.id}><a href='/marketplace'>{link.content}</a></li>
          ))}
        </ul>
        {/**avatar placeholder */}
        <a href="/user_profile">
          <div className='w-14 h-14 bg-white rounded-full cursor-pointer'>
            <img className='w-full h-full rounded-full object-cover' src={avatar_placeholder} alt="avatar_placeholder" aria-label='avatar_placeholder' />
          </div>
        </a>
      </div>
     
      {/**hamburger icon */}
      <div className='flex flex-col gap-2 cursor pointer lg:hidden'>
        {Array.from({length: 3}).map((_,idx)=>(
          <div key={idx} className='w-7 h-[3px] bg-white'></div>
        ))}
      </div>
     </nav>
  )
}

export default Navbar

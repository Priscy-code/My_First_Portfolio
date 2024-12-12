import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/logo-icon-white.svg';
import TextLogo from '../../assets/logo-text.svg'

const Footer = () => {

  const currentYear = new Date().getFullYear();
 
  return (
    <footer className='bg-blue py-4 justify-between flex flex-col items-center lg:py-12 sm:px-10 sm:flex-row lg:px-36'>
        <div className='flex gap-2 items-center'>
          <Link to='/'>
            <img src={LogoWhite} alt="Global LinkUp" className="w-12 sm:w-10" />
          </Link>
          
          <Link to='/'>
            <img src={TextLogo} alt="Global LinkUp" className="w-40 sm:block" />
          </Link>
            
        </div>

        <small className='text-white'>
            &copy; All Rights Reserved. GL<span className="text-custom-red">U</span>®️️ {currentYear}
        </small>
    </footer>
  )
}

export default Footer;
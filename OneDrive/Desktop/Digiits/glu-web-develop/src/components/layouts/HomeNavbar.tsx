import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/logo-icon-white.svg';
import TextLogo from '../../assets/logo-text.svg'

const Navbar = () => {
  return (
    <nav className='px-4 md:10-20 lg:px-20 mt-5 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <Link to='/'>
                <img src={LogoWhite} alt="Global LinkUp" className="w-12 sm:w-10" />
            </Link>
            <Link to='/'>
                <img src={TextLogo} alt="Global LinkUp" className=" w-40 hidden sm:block" />
            </Link>
        </div>

        <div>
            <Link to='/waitlist'>
            <button className='bg-wine-dark hover:bg-wine-light text-white sm:px-8 sm:py-3 px-4 py-2 rounded-xl'>
                Join Waitlist
            </button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar;
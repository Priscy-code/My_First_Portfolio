
import LogoWhite from '@/assets/icons/xplora-logo-purple.svg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
    
    return (

        <header className="max-w-full backdrop-blur-[10px] bg-black/15 h-auto container fixed top-0 left-0 right-0 font-inter py-5 sm:py-5 flex items-center z-20 px-20 gap-[348px]">
            <div>
                <img src={LogoWhite} alt="Xplora" className="w-36 text-purple " />
            </div>
            
            <div className='flex flex-row gap-x-44 '>

             
            <ul className="flex space-x-9 text-white justify-center items-center">
                <li>
                    <Link to="/" className="flex flex-row gap-2"><span>
                        <img src='/src/assets/images/Header/Home.svg' alt='home' />
                    </span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex flex-row gap-2">
                        <span>
                            <img src='/src/assets/images/Header/discover.svg' alt='discover' />
                        </span>
                        Discover
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex flex-row gap-2">
                        <span>
                            <img src='/src/assets/images/Header/mingle.svg' alt='mingle' />
                        </span>
                        Mingle
                    </Link>
                </li>
            </ul>
                
            
            <div className='flex flex-row space-x-4 items-center text-white'>
                <p className='font-sfpro text-base tracking-wide border-r border-gray-400 h-6 px-4 flex flex-row gap-3 items-center'><span>
                    <img src='/src/assets/images/Header/plus.svg' alt='add' />
                    </span>Create Event</p>
                <img src='/src/assets/images/Header/bell.svg' alt='add' />
                
                <Button className='flex gap-2 font-sfpro w-auto bg-white/15 backdrop-blur-[20px] text-white tracking-wide py-2 px-3 rounded-xl border border-gray-400/30 shadow-lg h-11'> 
                    <span className=''><img className=' ' src='/src/assets/images/Header/headerUser.svg' alt='user' /></span>@yurdrew
                    <span><img src='/src/assets/images/Header/selector.svg' alt='selector' /></span>
                    </Button>
            </div>
            </div>
        </header>
    )
}

export default LoginHeader
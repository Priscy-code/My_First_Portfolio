import WaitlistForm from "../WaitingListForm";
import '../../App.css';
import GlobalLinkUp from '../../assets/waitlist.svg';

const Waitlist = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:flex gap-4 bg-gray-100 h-screen p-4">
        <img src={GlobalLinkUp} alt="Global LinkUp" className="object-fill h-full w-full rounded-xl flex-1" />
        <div className="flex-1 rounded-xl shadow-md flex flex-col justify-center overflow-hidden">
          <WaitlistForm />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative h-screen overflow-hidden">
        <div className='absolute h-screen w-screen z-10'>
          <img src={GlobalLinkUp} alt="Global LinkUp" className="object-fill h-screen w-full" />
        </div>
        <div className='no-scrollbar m-4 z-10 overflow-scroll h-[calc(100vh-2rem)] absolute rounded-xl bg-white sm:w-[96%] pb-20'>
          <div className='mb-20'><WaitlistForm /></div>
        </div>
      </div>
    </div>
  )
}

export default Waitlist;
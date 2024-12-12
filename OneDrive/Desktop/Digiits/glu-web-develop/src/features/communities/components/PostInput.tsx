import { useState, useRef } from 'react';
import SmileEmoji from '../../../assets/icons/iconoir_emoji.svg';
import MediaImage from '../../../assets/icons/iconoir_media-image-list.svg';
import MediaVideo from '../../../assets/icons/iconoir_media-video-list.svg';
import MediaAudio from '../../../assets/icons/iconoir_microphone.svg';
import Modal from '../../../components/layouts/modal/Modal';
import ShareWithCommunity from './ShareWithCommunity';

const PostInput = () => {
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const formInputRef = useRef<HTMLDivElement>(null);

    // Handle click outside of form input to close it
    // const handleClickOutside = (event: MouseEvent) => {
    //     if (
    //         formInputRef.current &&
    //         !formInputRef.current.contains(event.target as Node) &&
    //         inputRef.current !== event.target
    //     ) {
    //         setIsFocused(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    return (
        <div className='mx-auto border px-1 flex justify-between w-full rounded'>
            <div className=" items-center w-3/4" ref={formInputRef}>
                <input 
                    ref={inputRef}
                    type="text"
                    className="flex-1 p-2 w-full focus:outline-none focus:border-blue-500"
                    placeholder="Share with community..."
                    onFocus={() => setIsFocused(true)}
                />
            </div>

            <div className="flex w-1/4 items-center justify-between gap-4">
                <button>
                    <img src={SmileEmoji} alt="emoji" className="w-6 h-6" />
                </button>
                <button>
                    <img src={MediaImage} alt="media" className="w-6 h-6" />
                </button>
                <button>
                    <img src={MediaVideo} alt="media" className="w-6 h-6" />
                </button>
                <button>
                    <img src={MediaAudio} alt="media" className="w-6 h-6" />
                </button>
            </div>
            
            {isFocused && (
                // <div className="absolute mt-10" ref={formInputRef}>
                //     <FormInput label="Post">
                //         <input 
                //             type="text" 
                //             onChange={(e) => setPost(e.target.value)}
                //             value={post}
                //         />
                //     </FormInput>
                // </div>
                <Modal 
                    isOpen={isFocused}
                    onClose={() => setIsFocused(false)}
                    title="Share With Community"
                    horizontalLine={false}
                >
                    <ShareWithCommunity />
                </Modal>
            )}
            
        </div>
    );
}

export default PostInput;

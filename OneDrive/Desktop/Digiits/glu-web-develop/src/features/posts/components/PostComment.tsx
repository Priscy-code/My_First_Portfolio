import EmojiIcon from '../../../assets/feed/icons/emoji-icon.svg';
import AttachmentIcon from '../../../assets/feed/icons/attach-icon.svg';

const Comments = () => {
    return (
        <>
        <div className="border-t border-gray-200 pt-2">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Comment..."
                    className="w-full p-2 pr-16 border border-light-blue rounded-md bg-light-bluee"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                    <button className="mr-2">
                        <img src={EmojiIcon} alt="Emoji" className="w-5 h-5" />
                    </button>
                    <button>
                        <img src={AttachmentIcon} alt="Attachment" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Comments;
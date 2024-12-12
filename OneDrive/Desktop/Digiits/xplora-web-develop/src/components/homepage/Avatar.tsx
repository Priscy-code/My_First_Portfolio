import { AvatarProps } from "./interfaces";



const Avatar = ({ imageSrc, label }: AvatarProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-transparent rounded-full border-2 border-[#be01ed] flex items-center justify-center">
                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-clip-content border-2 border-transparent bg-[#d8ccfb]">
                    <img
                        src={imageSrc}
                        alt="User Image"
                        className="w-full h-full object-fit rounded-full"
                    />

                </div>
            </div>
            <p className="font-sfpro mt-2 text-black">{label}</p>
        </div>
    );
};

export default Avatar;
import { useEffect, useRef } from 'react';
import { IModal } from './interfaces/IModal';
import CircleInfo from '../../../assets/icons/circle-info.svg'
import ApplyIcon from '../../../assets/icons/apply-icon.svg'

const Modal = ({ isOpen, onClose, title, children, horizontalLine, leftContent, Searchbar,onAction, icon }: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 no-scrollbar overflow-auto">
      <div className="flex w-full max-w-2xl flex-col m-4 no-scrollbar">
        <button
          className="text-white bg-custom-black w-1/6 p-3 mb-3 ml-auto rounded-full"
          onClick={onClose}
        >
          close
        </button>
        <div
          ref={modalRef}
          className="bg-white rounded-lg w-full mx-auto max-w-2xl py-2 max-h-[90vh] overflow-y-auto scrollbar-none"
        >
          <div className="flex justify-between items-center px-6 mt-5 top-0 bg-white z-10">
            {Searchbar}
          </div>
          <div className="flex justify-between items-center px-6 mt-5 top-0 bg-white z-10">
            <div className="flex items-center justify-between space-x-6 w-full">
              <h2 className="font-semibold text-2xl ">{title}</h2>
              <div className="flex gap-4  ">
                {icon && (
                  <button>
                    <img src={CircleInfo} alt="" />
                  </button>
                )}
                <button
                  onClick={() => {
                    if (onAction) {
                      console.log("onAction triggered");
                    } else {
                      console.log("onActiion");
                    }
                  }}
                  className="rounded-full text-white px-4 py-2 bg-custom-blue flex items-center gap-2"
                >
                  {" "}
                  Apply <img src={ApplyIcon} alt="" className="" />
                </button>
              </div>
            </div>
            {leftContent}
          </div>
          {horizontalLine && <hr className={`my-4 ${horizontalLine}`} />}
          <div className="flex space-x-2"></div>
          <div className="px-4">{children}</div>
          <hr className="w-1/6 border-4 border-gray-300 mx-auto mt-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
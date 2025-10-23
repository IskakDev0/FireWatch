import React from "react";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen }){
    return (
        <>
            <div onClick={() => setIsOpen(false)} className="bg-[rgba(0, 0, 0, 0.2)] w-[100vw] h-[100dvh] z-0 top-[50%] left-[50%] transform-[translate(-50%, -50%) absolute"></div>
            <div className="fixed top-[50%] left-[50%] transform-[translate(-50%, -50%)]">
                <div className="w-[250px] h-[170px] bg-white-500 text-white z-10 rounded-[10px]">
                    <div className="h-[50px] bg-white-500 overflow-hidden">
                        <h5 className="m-0 p-[10px] text-[#2c3e50] text-[18px] align-center">Dialog</h5>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="absolute right-0 top-0 self-end mt-[-7px] mr-[-7px] pointer p-[4px 8px] rounded-[10px] border-none text-[18px] text-[#2c3e50] bg-white-500">
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal;
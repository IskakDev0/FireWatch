import { useState } from "react";
import Modal from "../components/Modal"

export default function AddDataModal(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="">
                <button onClick={() => setIsOpen(true)} className='text-white bg-orange-300 rounded-[7px] p-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>
                    Add New Data
                </button>
                {isOpen && <Modal setIsOpen={setIsOpen}/>}
            </div>
        </>
    )
}
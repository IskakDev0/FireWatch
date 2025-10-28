import { RiCloseLine } from "react-icons/ri";
import "../index.css"

function Modal({ setIsOpen }){

    return (
        <>
            <div onClick={() => setIsOpen(false)} className="bg-[rgba(0,0,0,0.5)] w-screen h-screen z-10 fixed top-0 left-0"></div>
            <div className="fixed top-[50%] left-[50%] bg-white -translate-x-1/2 -translate-y-1/2 z-11 rounded-[10px] overflow-auto">
                <div className="flex flex-col items-center w-[800px] h-[500px] max-w-[90dvw] max-h-[90dvh] text-white rounded-[10px]">
                    <div className="h-[50px] rounded bg-white">
                        <h5 className="m-0 p-[10px] text-[#2c3e50] text-[30px]">Add New Data</h5>
                    </div>
                    <div className="md:grid grid-cols-2 gap-2 place-self-center">
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input the three first letters of the Month here:</h1>
                            <input className="modal-stylesInput" placeholder="Ex: jan" type="text" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input the three first letters of the Day here:</h1>
                            <input className="modal-stylesInput" placeholder="Ex: mon" type="text" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input the Temperature here:</h1>
                            <input className="modal-stylesInput" placeholder="Ex: 10.0" type="text" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input the RH (relative humididty) here:</h1>
                            <input className="modal-stylesInput" placeholder="Ex: 50" type="text" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input the Wind here:</h1>
                            <input className="modal-stylesInput" placeholder="Ex: 5.0" type="text" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input the Rain here:</h1>
                            <input className="modal-stylesInput" placeholder="Ex: 0" type="text" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="modal-stylesText">Input Area here:</h1>
                            <input className="modal-stylesInput mb-[10px]" placeholder="Ex: 0" type="text" />
                        </div>
                    </div>
                    <button className="text-white text-[25px] bg-orange-300 rounded-[7px] px-4 py-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">Save</button>
                    <button onClick={() => setIsOpen(false)} className="absolute right-0 top-0 self-end mt-1 mr-1 pointer p-[4px 8px] rounded-[10px] border-none text-[30px] cursor-pointer text-[#2c3e50] bg-white-500">
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal;
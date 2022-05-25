const Modal = () => {
    return (
        <div className="w-full h-full bg-site-neutral rounded-2xl flex flex-col">
            <div className="w-full h-1/6 flex justify-center items-center">
                <h1 className="font-sora text-6xl text-black">Settings</h1>
            </div>
            <div className="w-full h-1/6 flex flex-col items-center opacity-0 HIDDEN FOR NOW :)">
                <div className="w-full h-1/2 flex justify-center items-center">
                    <h1 className="font-sora text-5xl text-black">Theme</h1>
                </div>
                <div className="w-full h-1/2 flex space-x-8 justify-center items-center">
                    <h1 className="text-3xl font-sora text-black">Dark Mode?</h1>
                    <input type="checkbox" className="toggle toggle-lg bg-site-yellow checked:[--b1:259_95%_50%]" />
                </div>
            </div>
            <div className="w-full h-4/6">
                <div className="w-full h-1/6 flex justify-center items-center">
                    <h1 className="font-sora text-black text-5xl">Links</h1>
                </div>
                <div className="w-full h-5/6">

                </div>
            </div>
        </div>
    )
}

export default Modal;
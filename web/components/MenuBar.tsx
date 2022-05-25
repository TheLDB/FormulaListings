import { useState, useEffect } from "react";

const MenuBar = () => {
    const [ liveRed, setLiveRed ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLiveRed(!liveRed);
        }, 1000)
    });

    return (
        <div className="w-full h-full flex flex-row">
            <div className="w-1/3 h-full">

            </div>
            <div className="w-1/3 h-full flex flex-col justify-center items-center -space-y-4">
                <h1 className="text-black text-7xl font-indie">Formula Listings</h1>
                <h1 className={`${liveRed ? 'text-red-500' : 'text-black'} text-6xl font-indie transition-all ease-in-out duration-700`}>Live</h1>
            </div>
            <div className="w-1/3 h-full">
                
            </div>
        </div>
    )
}

export default MenuBar;
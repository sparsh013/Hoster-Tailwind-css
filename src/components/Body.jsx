import React from "react";

const Body = () => {
    return(
        <div className="space-y-4 lg:flex">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
            <img src="./assets/face.webp" alt="face1" className="h-100 md:h-100 justify-center lg:h-[400px]"/>
        </div>
        <div className="lg:flex-1 lg:order-1">
            <h1 className="text-5xl font-bold font-serif leading-tight">Host you website in less than 30 seconds</h1>
            <p className="font-lato text-gray-400">With Hoster, get your website up and running in no less than 30 seconds with the most competitive pricing packages.</p>
            <form actions="" className="flex flex-col gap-4 md:flex-row">
                <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter email address" />
                <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
            </form>
            <div className="flex gap-2">
                <img src="./assets/checkmark.webp" alt="check" style={{ width: '30px', height: '30px' }}/>
                <p className="font-lato text-gray-400">No spam, ever . Unsubscribe anytime </p>
            </div>
        </div>
        </div>
    )
}

export default Body
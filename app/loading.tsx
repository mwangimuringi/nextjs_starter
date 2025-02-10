import React from 'react'
import Loader from './dashboard/components/Loader';

const Loading = () => {
    return <Loader />
    <div className="flex items-center justify-center hc w-full bg-background z-20">
        <div className="loader w-10 h-10"></div>
        <div className="text-xl font-bold text-white">Loading...</div>
        <div className="text-sm text-white">Please wait</div>
    </div>
};

export default Loading
import React from 'react';

const Loading = () => {
    return (
        <div className="flex gap-4 flex-wrap justify-center">
            <div className="flex flex-col gap-7 w-1/4">
                <div className="skeleton h-40 w-full"></div>
                <div className="skeleton h-6 w-28"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
            </div>
            <div className="flex flex-col gap-7 w-1/4">
                <div className="skeleton h-40 w-full"></div>
                <div className="skeleton h-6 w-28"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
            </div>
            <div className="flex flex-col gap-7 w-1/4">
                <div className="skeleton h-40 w-full"></div>
                <div className="skeleton h-6 w-28"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
            </div>
            <img className="w-20 h-20 animate-spin absolute" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"></img>
        </div>
    );
};

export default Loading;
import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full animate-pulse delay-500"></div>
            </div>
            
            <div className="flex flex-col items-center gap-8 z-10">
                {/* Main loading spinner container */}
                <div className="relative">
                    {/* Outer ring */}
                    <div className="w-24 h-24 border-4 border-white/20 rounded-full"></div>
                    
                    {/* Animated spinner */}
                    <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-white border-r-white/60 rounded-full animate-spin"></div>
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-2 w-20 h-20 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                    
                    {/* Center dot */}
                    <div className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full animate-ping"></div>
                </div>
                
                {/* Loading text with typewriter effect */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">
                        Loading
                    </h2>
                    <p className="text-white/70 text-lg animate-fade-in delay-500">
                        Please wait while we prepare everything for you
                    </p>
                </div>
                
                {/* Progress dots */}
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce delay-200"></div>
                </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1500"></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-ping delay-2000"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-2500"></div>
            </div>
        </div>
    );
};

export default Loading;
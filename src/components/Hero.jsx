import React from 'react';
import { Flag } from 'lucide-react';

const Hero = () => {
    return (
        <div className="text-center">
            <Flag className="mx-auto w-16 h-16 text-red-600 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Discover China</h1>
            <p className="text-xl">Experience the rich culture, history, and beauty of the Middle Kingdom</p>
        </div>
    );
};

export default Hero;

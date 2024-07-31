import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-red-600 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">China Explorer</h1>
                </div>
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-4 mt-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 China Explorer. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

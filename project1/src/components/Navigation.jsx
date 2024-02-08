import React from 'react';

export const Navigation = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/Aboutpage' },
        { name: 'Services', link: '/services' },
        { name: 'Contact Us', link: '/contact' },
    ];

    return (
        <header>
            <div className='shadow-md w-full bg-white'>
                <div className='md:px-10 py-7 px-4 flex justify-between items-center'>
                    <div>logo</div>
                    <ul className='flex'>
                        {Links.map((link, index) => (
                            <li key={index} className='mr-4'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-600'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

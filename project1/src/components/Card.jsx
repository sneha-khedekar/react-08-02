import React from 'react'

export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    buttonLink

}) => {
    return (
        <>
            <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <img className="h-40 object-cover rounded-xl" src={imgSrc} alt={imgAlt} />
                    <div className="p-2">
                        <h2 className="font-bold text-lg mb-2 ">{title}</h2>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                    <div className="m-2">
                        <a role='button' href={buttonLink} className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700">{buttonText}</a>
                    </div>
            </div>
        </>
    )
}


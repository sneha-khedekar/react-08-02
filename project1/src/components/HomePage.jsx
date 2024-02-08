

import React from 'react';
import Banner from './Banner';
import { Card } from './Card';

const HomePage = () => {
    return (
        <div>

            <Banner
                text="Welcome to our website"
                buttonText="Know More"
                buttonLink="/aboutus"
            />
            <Card
                imgSrc="https://pixy.org/src/5/52991.jpg"
                imgAlt="cardimg"
                title="Heading"
                description="Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ..."
                buttonText="Know More"
                buttonLink="google.com"
                 />

        </div>
    );
};

export default HomePage;

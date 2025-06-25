import Journey from './webinar';
import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Start Your Journey | StyleUp',
    description: 'Embark on a transformative journey with StyleUp. Our expert image consultants will guide you through a personalized journey to enhance your image and boost your confidence.',
};

const StartYourJourney = () => {
    return (
        <Journey />
    );
}

export default StartYourJourney;
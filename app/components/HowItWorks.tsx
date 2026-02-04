import React from 'react';
import HowItWorksClient from './HowItWorksClient';
import { getHomeData, getHowItWorksData } from '../lib/api';
import { resolveHowItWorksImageUrl } from '../lib/url';

const HowItWorks = async () => {
    const data = await getHowItWorksData();
    var newData = data?.map((step) => {
        return {
            ...step,
            image: {
                id: step.image.id,
                name: step.image.name,
                width: step.image.width,
                height: step.image.height,
                url: resolveHowItWorksImageUrl(step.image.url) ?? '',
                formats: step.image.formats,
            }
        }
    })

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <HowItWorksClient steps={newData || []} />
            </div>
        </section>
    );
};

export default HowItWorks;
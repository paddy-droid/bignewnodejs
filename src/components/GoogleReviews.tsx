'use client';

import { useEffect } from 'react';

const GoogleReviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="container mx-auto px-4 py-16">
             {/* Elfsight Google Reviews | Untitled Google Reviews */}
            <div className="elfsight-app-1d58c1cf-add8-490d-be1a-8ea83357bc99" data-elfsight-app-lazy></div>
        </section>
    );
};

export default GoogleReviews;
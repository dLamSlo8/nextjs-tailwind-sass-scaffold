import { useEffect } from 'react';

import '../styles/main.scss';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
    /* 
        Effect:
        Dynamically import focus-visible after 
        initial render b/c it requires document,
        which is inaccessible when SSR until after rehydration.
    */
    useEffect(() => {
        (async () => {
            await import('focus-visible');
        })();
    }, []);

    return <Component {...pageProps} />
}

export default MyApp

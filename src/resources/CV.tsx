import { useEffect } from 'react';

import Signup from './submodules/questionsForCV';
export default function CVmaker() {
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/make-a-cv') { // Use a leading slash in the pathname
            import('./cv.css'); // Load CSS dynamically
        }
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <Signup/>
            <p>Welcome to CV Maker!</p>
        </>
    );
}

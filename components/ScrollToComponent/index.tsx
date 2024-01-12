// components/ScrollToComponentButton.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToComponentButton: React.FC<{targetId: string, buttonText:string}> = ({ targetId, buttonText }) => {
    return (
        <ScrollLink to={targetId} smooth duration={500} offset={-100}>
            <button className="scroll-btn">{buttonText}</button>
        </ScrollLink>
    );
};

export default ScrollToComponentButton;

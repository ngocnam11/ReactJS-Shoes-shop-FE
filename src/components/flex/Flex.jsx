import React from 'react';

function Flex({children, gap = 3, centered = false}) {
    return (
        <div
            className={`flex items-center`}
            style={{ gap: `${gap}px`, justifyContent: centered ? "center" : "unset"}}
        >
            {children}
        </div>
    );
}

export default Flex;
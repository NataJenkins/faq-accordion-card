import PropTypes from "prop-types";
import { useState } from "react";

export default function Accordion({ controllerElement, children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="accordion-item">
            <div
                onClick={() =>
                    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                }
            >
                {controllerElement(isExpanded)}
            </div>
            {isExpanded && <div className="content">{children}</div>}
        </div>
    );
}

Accordion.propTypes = {
    children: PropTypes.any,
    controllerElement: PropTypes.func,
};

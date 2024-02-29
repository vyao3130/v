"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Hover = ({className}: {className?: string;}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY}: any) {
        let {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    
    return(
        <div>
            <motion.div
                onMouseMove={handleMouseMove}
                className="absolute inset-0"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px,
                        rgb(14 165 233) 10%, transparent 80%)`,
                    opacity: 0.3,
                }}
                >
            </motion.div>
        </div>
    );
};

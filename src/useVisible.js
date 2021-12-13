import { useState, useEffect } from "react";

export const useVisible = (threshold = 0.55) => {
    const [flag, setFlag] = useState(false);
    const [target, setTarget] = useState(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
                (entries, observer) => {
                    for(const entry of entries) {
                        if(entry.isIntersecting === true) {
                            setFlag(true);
                        }else {
                            setFlag(false);
                        }
                    }
                }, 
                { root: null, threshold }
            )
        if (target) observer.observe(target);
        return () => {
            if (target) observer.unobserve(target);
            observer.disconnect();
        }
    },[setFlag, threshold, target]);
    return [flag, setTarget];
}
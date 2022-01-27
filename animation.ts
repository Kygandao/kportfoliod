export const animateFadeUp = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0
    },
}

export const animateDelayFadeUp = {
    initial: {
        
    },
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    },
}
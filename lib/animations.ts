export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease }
};

export const floatOnHover = {
  initial: { y: 0 },
  hover: {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const rotateOnHover = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const driftOnHover = {
  initial: { x: 0, y: 0 },
  hover: {
    x: [0, 6, -3, 0],
    y: [0, -5, 3, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const carouselSlideOnHover = {
  initial: { x: 0 },
  hover: {
    x: [0, -100, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear" as const
    }
  }
};
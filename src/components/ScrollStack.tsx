import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollStackProps {
  children: ReactNode[];
}

export const ScrollStackItem = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen flex items-center justify-center">{children}</div>;
};

const ScrollStack = ({ children }: ScrollStackProps) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  return (
    <div ref={scrollRef}>
      {children.map((child, i) => {
        const top = useTransform(
          scrollYProgress,
          [i / children.length, (i + 1) / children.length],
          ["0%", "100%"]
        );

        return (
          <motion.div
            key={i}
            style={{
              position: "sticky",
              top,
              height: "100vh",
              width: "100%",
              backgroundColor: `hsl(0, 0%, ${100 - i * 10}%)`,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScrollStack;

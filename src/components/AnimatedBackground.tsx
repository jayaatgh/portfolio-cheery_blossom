import { useMemo } from "react";
import flower from "@/assets/pink-cosmos.png";

const FLOWER_COUNT = 8;

const AnimatedBackground = () => {
  const flowers = useMemo(() => {
    return Array.from({ length: FLOWER_COUNT }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 60 + Math.random() * 80, // 60–140px
      duration: 20 + Math.random() * 20, // spin speed
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-cream to-sky-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-to-br from-pink-200/60 to-transparent rounded-full blur-3xl animate-gradient-float" />
      <div className="absolute top-1/4 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-sky-200/50 to-transparent rounded-full blur-3xl animate-gradient-float-delayed" />
      <div className="absolute bottom-0 left-1/4 w-[55%] h-[55%] bg-gradient-to-tr from-peach/40 to-transparent rounded-full blur-3xl animate-gradient-float-slow" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      {/* 🌸 Spinning Flowers */}
      {flowers.map((flowerItem) => (
        <img
          key={flowerItem.id}
          src={flower}
          alt=""
          className="absolute opacity-60 animate-flower-spin pointer-events-none"
          style={{
            top: `${flowerItem.top}%`,
            left: `${flowerItem.left}%`,
            width: `${flowerItem.size}px`,
            height: `${flowerItem.size}px`,
            animationDuration: `${flowerItem.duration}s`,
            animationDelay: `${flowerItem.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;

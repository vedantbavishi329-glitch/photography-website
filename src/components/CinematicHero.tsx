import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, Play } from 'lucide-react';
import lighthouseImage from '@/assets/lighthouse-hero.jpg';

const CinematicHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateRotation = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
    return (angle * 180) / Math.PI;
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 parallax-layer"
      >
        <img
          src={lighthouseImage}
          alt="Cinematic lighthouse in dramatic lighting"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/90" />
      </motion.div>

      {/* Mesh Background Overlay */}
      <div className="absolute inset-0 mesh-background opacity-30" />

      {/* Dynamic Light Beam */}
      <motion.div 
        className="absolute top-1/2 left-1/2 origin-left luxury-beam opacity-70 pointer-events-none"
        style={{
          width: '800px',
          height: '12px',
          transform: `translate(-50%, -50%) rotate(${calculateRotation()}deg)`,
          filter: 'blur(2px)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cursor Glow Effect */}
      <motion.div 
        className="absolute w-12 h-12 pointer-events-none z-50 luxury-glow"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-extralight mb-8 cinematic-title leading-none"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            Lightkeeper
          </motion.h1>
          
          <motion.div 
            className="w-32 h-[2px] bg-primary mx-auto mb-12 luxury-glow"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          <motion.p 
            className="text-xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Where light becomes poetry. Capturing the essence of moments through 
            cinematic photography that tells your unique story.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button 
              size="lg" 
              className="luxury-card hover:luxury-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-12 py-6 text-lg rounded-full group"
            >
              <Camera className="mr-3 h-5 w-5 group-hover:rotate-6 transition-transform" />
              View Gallery
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="luxury-card border-luxury font-medium px-12 py-6 text-lg rounded-full group"
            >
              <Play className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Watch Reel
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground/60 text-sm font-light tracking-wider"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
            animate={{
              y: [window.innerHeight, -100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicHero;
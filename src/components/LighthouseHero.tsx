import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import lighthouseImage from '@/assets/lighthouse-hero.jpg';

const LighthouseHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate rotation angle based on mouse position
  const calculateRotation = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
    return (angle * 180) / Math.PI;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={lighthouseImage}
          alt="Lighthouse beacon cutting through darkness"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Interactive Lighthouse Beam - Follows Cursor */}
      <div className="absolute inset-0 lighthouse-glow opacity-40" />
      
      {/* Dynamic Light Beam Following Mouse */}
      <div 
        ref={beamRef}
        className="absolute top-1/2 left-1/2 origin-left lighthouse-beam opacity-60 pointer-events-none"
        style={{
          width: '600px',
          height: '8px',
          transform: `translate(-50%, -50%) rotate(${calculateRotation()}deg)`,
          background: `linear-gradient(90deg, 
            hsl(45 90% 65% / 0.8) 0%, 
            hsl(45 85% 60% / 0.6) 30%, 
            hsl(45 80% 55% / 0.3) 60%, 
            transparent 100%)`,
          filter: 'blur(2px)',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Secondary beam for more dramatic effect */}
      <div 
        className="absolute top-1/2 left-1/2 origin-left opacity-30 pointer-events-none"
        style={{
          width: '800px',
          height: '4px',
          transform: `translate(-50%, -50%) rotate(${calculateRotation()}deg)`,
          background: `linear-gradient(90deg, 
            hsl(45 95% 70% / 1) 0%, 
            hsl(45 90% 65% / 0.4) 40%, 
            transparent 100%)`,
          filter: 'blur(1px)',
          transition: 'transform 0.15s ease-out'
        }}
      />

      {/* Cursor Glow Effect */}
      <div 
        className="absolute w-8 h-8 pointer-events-none z-50"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: 'radial-gradient(circle, hsl(45 90% 65% / 0.8) 0%, hsl(45 85% 60% / 0.4) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(4px)',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glare-effect">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow">
            Lightkeeper
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 lighthouse-glow" />
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Capturing moments through the lens of light and shadow. 
            Professional photography that illuminates your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg lighthouse-glow"
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-glow font-semibold px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Interactive Instructions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground/80 animate-pulse">
              Move your cursor to guide the lighthouse beam
            </p>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LighthouseHero;
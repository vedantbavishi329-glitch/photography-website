import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Cylinder, Sphere, Cone } from '@react-three/drei';
import * as THREE from 'three';

interface LighthouseProps {
  mousePosition: { x: number; y: number };
}

function Lighthouse({ mousePosition }: LighthouseProps) {
  const lightRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (lightRef.current && beamRef.current) {
      // Calculate rotation based on mouse position
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
      
      // Rotate the light to follow cursor
      lightRef.current.rotation.y = x * 0.5;
      beamRef.current.rotation.y = x * 0.5;
      beamRef.current.rotation.z = y * 0.3;
    }
  });

  return (
    <group>
      {/* Lighthouse Base */}
      <Cylinder args={[1.2, 1.5, 4]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Cylinder>
      
      {/* Lighthouse Tower */}
      <Cylinder args={[0.8, 1.2, 6]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#f5f5f5" />
      </Cylinder>
      
      {/* Lighthouse Top */}
      <Cylinder args={[1, 0.8, 1]} position={[0, 4.5, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Cylinder>
      
      {/* Light Source */}
      <Sphere ref={lightRef} args={[0.3]} position={[0, 4.5, 0]}>
        <meshStandardMaterial 
          color="#ffd700" 
          emissive="#ffd700"
          emissiveIntensity={2}
        />
      </Sphere>
      
      {/* Light Beam Cone */}
      <Cone 
        ref={beamRef}
        args={[0.1, 8, 32, 1, true]} 
        position={[0, 4.5, 4]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial 
          color="#ffd700" 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Cone>
      
      {/* Ambient Light */}
      <pointLight position={[0, 4.5, 0]} color="#ffd700" intensity={2} distance={20} />
      <spotLight
        position={[0, 4.5, 0]}
        target-position={[mousePosition.x * 0.01, 0, mousePosition.y * 0.01]}
        angle={0.3}
        penumbra={0.5}
        intensity={3}
        color="#ffd700"
        distance={30}
      />
    </group>
  );
}

const Interactive3DLighthouse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <Lighthouse mousePosition={mousePosition.current} />
        <fog attach="fog" args={['#0a0a0a', 10, 50]} />
      </Canvas>
    </div>
  );
};

export default Interactive3DLighthouse;
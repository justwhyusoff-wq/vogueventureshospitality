"use client";

import { useRef, useMemo, useState, Component, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simple Error Boundary for React Three Fiber
class ErrorBoundary extends Component<{
  children: ReactNode;
  FallbackComponent: React.ComponentType;
  onError?: (error: Error) => void;
}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error) {
    if (this.props.onError) {
      this.props.onError(error);
    }
  }
  
  render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent />;
    }
    
    return this.props.children;
  }
}

function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#D4AF37"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function GoldRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.2 + 0.5;
  });

  return (
    <mesh ref={ringRef} position={[1.5, 0, -2]}>
      <torusGeometry args={[1.5, 0.005, 32, 100]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={0.15} />
    </mesh>
  );
}

function GoldRing2() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = -state.clock.elapsedTime * 0.03;
    ringRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.02) * 0.3;
  });

  return (
    <mesh ref={ringRef} position={[-1, 0.5, -3]}>
      <torusGeometry args={[2, 0.003, 32, 100]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={0.08} />
    </mesh>
  );
}

export default function HeroAmbient() {
  // Track if 3D canvas fails to render
  const [canvasError, setCanvasError] = useState(false);

  // Handle errors in R3F
  const handleError = () => {
    console.error("React Three Fiber failed to render");
    setCanvasError(true);
  };

  if (canvasError) {
    return (
      // Fallback to static gradient background
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-charcoal-light/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <ErrorBoundary FallbackComponent={() => null} onError={handleError}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <FloatingParticles />
          <GoldRing />
          <GoldRing2 />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

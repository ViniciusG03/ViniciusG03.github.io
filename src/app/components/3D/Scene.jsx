import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";
import ReactLogo from "./ReactLogo";

export default function Scene() {
  return (
    <Canvas className="canvas-container">
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={60} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ReactLogo />
      </Suspense>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </Canvas>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSpheres() {
  const sphere1 = useRef();
  const sphere2 = useRef();
  const sphere3 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (sphere1.current) {
      sphere1.current.position.x = Math.sin(t * 0.3) * 2;
      sphere1.current.position.y = Math.cos(t * 0.2) * 0.5;
      sphere1.current.rotation.y = t * 0.2;
    }

    if (sphere2.current) {
      sphere2.current.position.x = Math.sin(t * 0.5 + 2) * 2;
      sphere2.current.position.y = Math.cos(t * 0.3 + 1) * 0.8;
      sphere2.current.rotation.y = t * -0.3;
    }

    if (sphere3.current) {
      sphere3.current.position.x = Math.sin(t * 0.2 + 1) * 1.5;
      sphere3.current.position.y = Math.cos(t * 0.4 + 2) * 0.6;
      sphere3.current.position.z = Math.sin(t * 0.1) * 1;
      sphere3.current.rotation.y = t * 0.1;
    }
  });

  return (
    <>
      <mesh ref={sphere1} position={[2, 0, 0]}>
        <Sphere args={[0.8, 32, 32]}>
          <MeshDistortMaterial
            color={new THREE.Color(0x64ffda)}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>

      <mesh ref={sphere2} position={[-2, 0, -1]}>
        <Sphere args={[1.2, 32, 32]}>
          <MeshDistortMaterial
            color={new THREE.Color(0x7896ff)}
            attach="material"
            distort={0.6}
            speed={1.5}
            roughness={0.3}
            metalness={0.7}
          />
        </Sphere>
      </mesh>

      <mesh ref={sphere3} position={[0, -1, -2]}>
        <Sphere args={[0.6, 32, 32]}>
          <MeshDistortMaterial
            color={new THREE.Color(0xffb562)}
            attach="material"
            distort={0.5}
            speed={2.5}
            roughness={0.4}
            metalness={0.6}
          />
        </Sphere>
      </mesh>
    </>
  );
}

export default function BannerAnimation() {
  return (
    <Canvas className="canvas-container">
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <AnimatedSpheres />

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

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Model() {
  const sphereRef = useRef();
  const sphereRef2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t * 0.5) * 0.5;
      sphereRef.current.rotation.y = t * 0.2;
    }
    if (sphereRef2.current) {
      sphereRef2.current.position.x = Math.sin(t * 0.3) * 2;
      sphereRef2.current.position.y = Math.cos(t * 0.4) * 0.5;
      sphereRef2.current.rotation.y = -t * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={sphereRef} position={[3, 0, 0]}>
        <Sphere args={[1.2, 32, 32]}>
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

      <mesh ref={sphereRef2} position={[-3, 0, 0]}>
        <Sphere args={[0.8, 32, 32]}>
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
    </group>
  );
}

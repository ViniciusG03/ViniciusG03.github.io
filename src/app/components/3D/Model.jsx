"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CylinderGeometry, Vector2 } from "three";
import { Cylinder, Torus, Text } from "@react-three/drei";

export default function JavaCupModel() {
  const cupRef = useRef();
  const steamRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (cupRef.current) {
      cupRef.current.rotation.y = t * 0.2;
      cupRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }

    if (steamRef.current) {
      steamRef.current.position.y = 1.8 + Math.sin(t * 2) * 0.1;
      steamRef.current.scale.y = 1 + Math.sin(t * 3) * 0.1;
    }
  });

  return (
    <group ref={cupRef}>
      {/* Corpo da xícara */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 1.5, 32]} />
        <meshStandardMaterial color="#7896ff" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Interior da xícara (café) */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.9, 0.7, 0.3, 32]} />
        <meshStandardMaterial color="#3c2415" metalness={0.2} roughness={0.1} />
      </mesh>

      {/* Alça da xícara */}
      <mesh position={[1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#7896ff" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Logo Java - usando Text em vez de Text3D para evitar problemas com carregamento de fontes */}
      <Text
        position={[-0.5, 0, 1]}
        rotation={[0, 0, 0]}
        fontSize={0.3}
        color="#64ffda"
        anchorX="center"
        anchorY="middle">
        Java
      </Text>

      {/* Vapor */}
      <mesh ref={steamRef} position={[0, 1.8, 0]}>
        <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI * 1.5]} />
        <meshStandardMaterial color="white" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

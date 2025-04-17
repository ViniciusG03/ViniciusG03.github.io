"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ReactLogo(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/react_logo.glb");

  // Animação simples de rotação
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (group.current) {
      // Rotação geral do logo
      group.current.rotation.y = t * 0.2;

      // Pequena oscilação para cima e para baixo
      group.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  // Aplicar material com cor do React ao modelo
  React.useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Substitui o material por um material com a cor do React
          child.material = new THREE.MeshStandardMaterial({
            color: "#61dafb",
            metalness: 0.2,
            roughness: 0.3,
          });
        }
      });
    }
  }, [scene]);

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

// Pré-carrega o modelo para melhor desempenho
useGLTF.preload("/models/react_logo.glb");

"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function GhostCatModel(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/ghost_cat.glb");

  // Animação flutuante
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (group.current) {
      // Movimento flutuante suave
      group.current.position.y = Math.sin(t * 0.5) * 0.3;

      // Rotação lenta
      group.current.rotation.y = t * 0.2;

      // Efeito de respiração suave
      const breathScale = 1 + Math.sin(t * 1.2) * 0.03;
      group.current.scale.set(breathScale, breathScale, breathScale);
    }
  });

  // Adiciona efeito de brilho ao modelo
  React.useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Adiciona propriedades de emissão para o efeito brilhante
          if (child.material) {
            child.material.emissive = new THREE.Color("#a0ffa8");
            child.material.emissiveIntensity = 0.4;
          }
        }
      });
    }
  }, [scene]);

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
      {/* Adiciona uma luz para o efeito de brilho ao redor */}
      <pointLight
        position={[0, 0, 0]}
        intensity={1.5}
        color="#a0ffa8"
        distance={5}
      />
    </group>
  );
}

// Pré-carrega o modelo para melhor desempenho
useGLTF.preload("/models/ghost_cat.glb");

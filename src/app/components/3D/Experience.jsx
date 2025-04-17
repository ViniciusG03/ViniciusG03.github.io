import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  useTexture,
  Text3D,
  Float,
  OrbitControls,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

// Componente de texto 3D flutuante
function AnimatedText({ text, position, color = "white" }) {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 150, friction: 20 },
  });

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <animated.group
      ref={textRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <Text3D
        font="/fonts/inter_bold.json"
        size={0.4}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}>
        {text}
        <meshPhysicalMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.3}
        />
      </Text3D>
    </animated.group>
  );
}

// Partículas flutuantes
function Particles({ count = 200 }) {
  const mesh = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 20, // x
        (Math.random() - 0.5) * 20, // y
        (Math.random() - 0.5) * 20 // z
      );
    }
    return new Float32Array(positions);
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.01;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#64ffda"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Objeto 3D interativo
function InteractiveObject({ position, color }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const { scale, rotation } = useSpring({
    scale: active ? 1.5 : 1,
    rotation: active ? [0, Math.PI, 0] : [0, 0, 0],
    config: { mass: 2, tension: 500, friction: 30 },
  });

  useFrame((state) => {
    if (mesh.current && !active) {
      mesh.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <animated.mesh
      ref={mesh}
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
        <MeshDistortMaterial
          color={color}
          speed={5}
          distort={hovered ? 0.6 : 0.3}
          radius={1}
          metalness={0.6}
          roughness={0.2}
        />
      </RoundedBox>
    </animated.mesh>
  );
}

// Componente de efeito de iluminação
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
}

// Configuração da câmera
function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.03;
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Componente principal da experiência 3D
export default function Experience() {
  return (
    <Canvas className="canvas-container">
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={75}
        near={0.1}
        far={1000}
      />

      <Lighting />
      <CameraRig />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <AnimatedText
          text="Vinícius Dev"
          position={[0, 0.5, 0]}
          color="#64ffda"
        />

        <AnimatedText text="Web & 3D" position={[0, -0.5, 0]} color="#7896ff" />
      </Float>

      <InteractiveObject position={[-2, 0, -1]} color="#64ffda" />
      <InteractiveObject position={[2, 0, -1]} color="#7896ff" />

      <Particles count={500} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.3}
      />

      <Environment preset="city" />
    </Canvas>
  );
}

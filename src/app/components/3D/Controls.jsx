import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Controls() {
  const { camera } = useThree();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      camera.position.x = x * 2;
      camera.position.y = y * 2;
      camera.lookAt(0, 0, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera]);

  return null;
}

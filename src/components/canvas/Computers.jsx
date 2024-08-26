import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const getModelContainerStyle = (isMobile) => {
  const commonStyle = {
    position: "absolute",
    pointerEvents: "auto",
  };
  return isMobile
    ? {
        ...commonStyle,
        width: "100%",
        height: "35%",
        top: "45%",
      }
    : {
        ...commonStyle,
        width: "100%",
        height: "45%",
        top: "45%",
      };
};
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();
  const totalRotate = useRef(0);
  const positionRef = useRef(true);

  useFrame(() => {
    if (meshRef.current) {
      // 控制旋转的限度
      if (totalRotate.current > 0.5) positionRef.current = !positionRef.current;
      if (totalRotate.current < -0.4)
        positionRef.current = !positionRef.current;
      // 控制旋转方向和速度
      if (positionRef.current) {
        meshRef.current.rotation.y += 0.0014; // 每帧绕 y 轴旋转
        totalRotate.current += 0.0014;
      } else {
        meshRef.current.rotation.y -= 0.0014; // 每帧绕 y 轴旋转
        totalRotate.current -= 0.0014;
      }
    }
  });

  return (
    <Float speed={3.76} rotationIntensity={0} floatIntensity={1}>
      <mesh ref={meshRef}>
        <hemisphereLight intensity={4} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.9 : 1.5}
          position={isMobile ? [-1, -1, -1.5] : [-1, -3.25, -3]}
          rotation={isMobile ? [0, -0.25, -0.2] : [0, -0.25, -0.13]}
        />
      </mesh>
    </Float>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={getModelContainerStyle(isMobile)}>
      <Canvas
        // frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

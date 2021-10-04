import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Bulb from "./components/Bulb";
import Orbit from "./components/Orbit";
import Background from "./components/Background";
import Floor from "./components/Floor";
import React, { Suspense } from "react";
import ColorPicker from "./components/ColorPicker";

import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <CameraControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Lights />

        <Orbit />
        <axesHelper args={[5]} />
        <Bulb position={[-6, 3, 0]} />
        <Bulb position={[0, 3, 0]} />
        <Bulb position={[6, 3, 0]} />
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

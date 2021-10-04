import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import Dragable from "./Dragable";

const Cars = ({}) => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          position={[4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, -0.4, 0.8]}
        >
          <Model
            path="/tesla_model_3/scene.gltf"
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable>
        <BoundingBox
          position={[-4, 4, 0]}
          dims={[3, 2, 7]}
          offset={[0, -0.8, 0.2]}
        >
          <Model
            path="/tesla_model_s/scene.gltf"
            scale={new Array(3).fill(0.013)}
          />
        </BoundingBox>
      </Dragable>
      <group rotation={[0, Math.PI, 0]}>
        <Model path="/mech_drone/scene.gltf" scale={new Array(3).fill(0.01)} />
      </group>
      {/* <group rotation={[0, Math.PI, 0]}> */}
      <Dragable trasformGroup>
        {/* <BoundingBox
          position={[0, 0, 0]}
          dims={[2, 1.5, 1]}
          offset={[0, -0.8, 0]}
          visible
        > */}
        <group position={[-8, 0, 0]} rotation={[0, (3 * Math.PI) / 2, 0]}>
          <Model path="/bicycle/scene.gltf" scale={new Array(3).fill(0.01)} />
        </group>
        {/* </BoundingBox> */}
      </Dragable>
      {/* </group> */}
    </Suspense>
  );
};

export default Cars;

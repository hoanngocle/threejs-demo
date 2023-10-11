import * as THREE from "three";
import { angleToRadians } from "./utils/angle";

//LIGHTS
function Light() {
  return (
    <>
      <ambientLight args={["#ffffff", 0.25]} />

      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
      />
    </>
  );
}
//

export default Light;

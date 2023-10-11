import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { createContext, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import BottomBar from "./Bottombar";
import Camera from "./Camera";
import Light from "./Light";
import Environment3D from "./Environment3D";
import OrbitController from "./OrbitControls";
import Shirt from "./Shirt";
import { Html, useProgress } from "@react-three/drei";
import { EditorTabs } from "./config/constants";
import "./index.css";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export const TextureContext = createContext();

const App = () => {
  const [print, setPrint] = useState("./textures/a001.png");
  const [file, setFile] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");

  const printTexture = useLoader(TextureLoader, print);
  printTexture.wrapS = printTexture.wrapT = THREE.RepeatWrapping;
  printTexture.repeat.set(10, 10);
  printTexture.flipY = false;

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "showHide":
        return "1";
      case "setupDegree":
        return "setupDegree";
      case "chooseTexture":
        return "chooseTexture";
      // return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  return (
    <main className="app transition-all ease-in">
      <TextureContext.Provider value={{ print, setPrint }}>
        <div className="transition-all ease-in h-full w-full'">
          <div id="top-bar">
            <div className="row text-center">{print}</div>
          </div>
          <div key="custom" className="absolute top-0 left-0 z-10">
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                <BottomBar />

                {generateTabContent()}
              </div>
            </div>
          </div>

          <div className="absolute z-10 top-10 right-5">
            <button className="p-3 flex-1 rounded-md w-100 font-bold text-sm bg-red-100">
              <img
                src="../public/vite.svg"
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </div>
          <div className="absolute z-20 top-10 right-20">
            <button
              className="p-3 flex-1 rounded-md w-100 font-bold text-sm bg-red-100"
              // onClick={handleClick}
            >
              Go Back
            </button>
          </div>

          <div id="content" className="h-full w-full">
            <Canvas id="three-canvas-container">
              <Camera />

              <OrbitController />
              <Environment3D />
              <Light />
              <Suspense fallback={<Loader />}>
                <Shirt customPrint={{ tex: printTexture }} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </TextureContext.Provider>
    </main>
  );
};

export default App;

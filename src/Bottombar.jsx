import { useContext, useTransition } from "react";
import { TextureContext } from "./App";
import "./index.css";

const BottomBar = () => {
  const { print, setPrint } = useContext(TextureContext);
  const [isPending, startTransition] = useTransition();

  const onClicked = (mapUrl) => {
    startTransition(() => setPrint(mapUrl));
    console.log();
  };

  const textures = {
    a001: "./textures/a001.png",
    a002: "./textures/a002.png",
    a003: "./textures/a003.png",
    a004: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    a005: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80",
    a006: "https://images.unsplash.com/photo-1521112376370-0a3b01544ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    a007: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    a008: "https://images.unsplash.com/photo-1511963211013-83bba110595d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    a009: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    a010: "https://images.unsplash.com/photo-1574631818614-c9f9d15ded52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    a011: "https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    a012: "https://images.unsplash.com/photo-1503980599186-9cc36eda351a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
  };
  const texturesEntries = Object.entries(textures);

  return (
    <div>
      {texturesEntries.map(([name, url]) => {
        return (
          <div className="tab-btn rounded-4 glassmorphism" key={name}>
            <img
              alt={name}
              key={name}
              src={url}
              className="w-3/5 h-3/5 object-contain rounded-md"
              onClick={() => {
                onClicked(url);
              }}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default BottomBar;

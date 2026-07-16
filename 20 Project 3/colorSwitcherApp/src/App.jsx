import React from "react";
import { FaPaintBrush } from "react-icons/fa";
import Button from "./components/Button";

function App() {
  const colors = ["red", "green", "blue", "gray", "pink"];
  return (
    <div className="flex justify-center items-start min-h-screen pt-10">
      <div>
        <h1 className="flex items-center gap-2 mb-4">
          <FaPaintBrush />
          <span>Hello React World</span>
        </h1>

        <div className="flex gap-3 text-black">
          {colors.map((item, index) => (
            <Button key={index} color={item}>
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

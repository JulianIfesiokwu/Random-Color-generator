import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    typeOfColor === "rgb"
      ? handleCreateRandomRGBColor()
      : handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        className=''
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div
          className=''
          style={{
            width: "50%",
            margin: "0 auto",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => setTypeOfColor("hex")}>
            Create HEX color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRGBColor
            }
          >
            Generate Random Color
          </button>
        </div>

        <div
          className=''
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
            color: "#FFF",
            fontSize: "30px",
            marginTop: "30px",
          }}
        >
          <h1>{color}</h1>
          <h3
            style={{
              display: "block",
            }}
          >
            {typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;

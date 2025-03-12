import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import SideMenu from "./Components/SideMenu/SideMenu";
import Sliders from "./Components/Sliders/Sliders";
import Terminal from "./Components/Terminal/Terminal";

import { useState } from "react";

function App() {
  const [SideMenuValue, setValue] = useState(0);

  const handleValueReturn = (returnedValue) => {
    setValue(returnedValue);
  };

  // Method to provide detailed JSON data for Terminal.jsx
  const terminalBoxes = [
    { id: 1, language: "bash", name: "Terminal 1", description: "Running deployment...", extraDescription: "Success", gitLink: "https://github.com/example/repo1" },
    { id: 2, language: "python", name: "Terminal 2", description: "Executing script...", extraDescription: "Finished in 5 seconds", gitLink: "https://github.com/example/repo2" },
    { id: 3, language: "nodejs", name: "Terminal 3", description: "Starting server...", extraDescription: "Server running on port 3000", gitLink: "https://github.com/example/repo3" },
    { id: 4, language: "docker", name: "Terminal 4", description: "Building image...", extraDescription: "Image build complete", gitLink: "https://github.com/example/repo4" },
    { id: 5, language: "git", name: "Terminal 5", description: "Cloning repository...", extraDescription: "Repository cloned successfully", gitLink: "https://github.com/example/repo5" },
    { id: 6, language: "java", name: "Terminal 6", description: "Compiling files...", extraDescription: "Compilation successful", gitLink: "https://github.com/example/repo6" },
  ];

  return (
    <>
      <Header />
      <SideMenu onValueChange={handleValueReturn} />
      <Terminal/>
      <Footer />
    </>
  );
}

export default App;

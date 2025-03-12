import React from "react";
import Terminal from "../Terminal/Terminal"; // Import Terminal component
import "./Layout.css";

function Layout({cards}) {
  // Example array of terminal instances
  const terminalBoxes = [
    { id: 1, language: "bash", name: "Terminal 1", description: "Running deployment...", extraDescription: "Success", gitLink: "https://github.com/example/repo1" },
    { id: 2, language: "python", name: "Terminal 2", description: "Executing script...", extraDescription: "Finished in 5 seconds", gitLink: "https://github.com/example/repo2" },
    { id: 3, language: "nodejs", name: "Terminal 3", description: "Starting server...", extraDescription: "Server running on port 3000", gitLink: "https://github.com/example/repo3" },
    { id: 4, language: "docker", name: "Terminal 4", description: "Building image...", extraDescription: "Image build complete", gitLink: "https://github.com/example/repo4" },
    { id: 5, language: "git", name: "Terminal 5", description: "Cloning repository...", extraDescription: "Repository cloned successfully", gitLink: "https://github.com/example/repo5" },
    { id: 6, language: "java", name: "Terminal 6", description: "Compiling files...", extraDescription: "Compilation successful", gitLink: "https://github.com/example/repo6" },
  ];

  return (
    <div className="layout-debug-container">
      {cards.map((terminal) => (
        <div className="debug-box" key={terminal.id}>
          <Terminal
            language={terminal.language}
            name={terminal.name}
            description={terminal.description}
            extraDescription={terminal.extraDescription}
            gitLink={terminal.gitLink}
          />
        </div>
      ))}
    </div>
  );
}

export default Layout;

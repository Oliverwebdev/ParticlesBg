// In deiner App.jsx oder einer ähnlichen Hauptkomponente
import React from "react";
import Background from "./components/Design";
import BackgroundBg from "./components/Different";


const App = () => {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <BackgroundBg /> {/* Die Partikel-Komponente als Hintergrund */}
            {/* <Background /> Die Partikel-Komponente als Hintergrund */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h1>Dein Titel hier</h1>
                <h2>Etwas Text für den Inhalt</h2>
                {/* Weitere Inhalte hier */}
            </div>
        </div>
    );
};

export default App;

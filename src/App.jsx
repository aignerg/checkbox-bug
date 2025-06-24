import { useState, useEffect } from 'react'
import './App.css'
import './index.css';
import { IfxSlider } from '@infineon/infineon-design-system-react'

function App() {return (
    <div>
      <div style={{ width: "500px", height: "100vh", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", padding: "20px", backgroundColor: "#bbb", gap: "20px" }}>
        <IfxSlider value="50" min="0" max="100" step="1" min-value-handle="20" max-value-handle="80" type="single" style={{ width: "100%" }}></IfxSlider>
        <IfxSlider value="50" min="0" max="100" step="1" min-value-handle="20" max-value-handle="80" type="double" style={{ width: "100%" }}></IfxSlider>
      </div>
    </div>
  );
}

export default App

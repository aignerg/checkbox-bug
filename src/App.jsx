import { useState, useEffect } from 'react'
import './App.css'
import './index.css';
import { IfxContentSwitcher, IfxContentSwitcherItem } from '@infineon/infineon-design-system-react'

function App() {
  const tabMap = ["gallery", "analysis"];
  const [activeContent, setActiveContent] = useState("gallery");

  useEffect(() => {
    console.log("Content updated:", activeContent);
  }, [activeContent]);

  return (
    <div>
      <IfxContentSwitcher
        onIfxChange={event => {
          console.log("newValue: ", event.detail.newValue);
          console.log("Update: ", tabMap[event.detail.newValue]);
          setActiveContent(tabMap[event.detail.newValue])
        }}
      >
        <IfxContentSwitcherItem value="gallery" selected={activeContent === "gallery"}>
          Gallery
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="analysis" selected={activeContent === "analysis"}>
          Analysis
        </IfxContentSwitcherItem>
      </IfxContentSwitcher>
    </div>
  );
}

export default App

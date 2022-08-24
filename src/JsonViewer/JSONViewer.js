import React, {useState} from "react";
import { JsonElement } from "./JsonElement";

export const collapsibleContext = React.createContext();

export default function JSONViewer({ inpJson }) {
  const [globallyCollapsed, setGloballyCollapsed] = useState(false); 
  return (
    <>
      <div className="jsonContainer">
        <button onClick={()=>{setGloballyCollapsed(false)}}> Expand All </button>
        <button onClick={()=>{setGloballyCollapsed(true)}}> Collpase All </button>
        <div className="jsonContainer">
          <collapsibleContext.Provider value={globallyCollapsed}>
            <JsonElement json={inpJson} />
          </collapsibleContext.Provider>
        </div>
      </div>
    </>
  );
}


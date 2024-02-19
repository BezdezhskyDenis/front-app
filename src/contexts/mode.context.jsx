import { createContext, useContext, useState } from "react";

const fn_error_context_must_be_used = () => {
  throw new Error("must use modeContext provider for consumer to work");
};

export const modeContext = createContext({
  mode: null,
  icon: null,
  handleModeChange: fn_error_context_must_be_used,
});
modeContext.displayName = "mode";


export function ModeProvider({ children }) {
  const [mode, setMode] = useState("light"); //State about dark-mode
  
  const [icon, setIcon] = useState(<i className="bi bi-moon-fill"></i>)
  
  const handleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
      setIcon(<i className="bi bi-brightness-high-fill"></i>);
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      setMode("light");
      setIcon(<i className="bi bi-moon-fill"></i>);
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
  }

  return (
    <modeContext.Provider
      value={{
        mode,
        icon,
        handleModeChange
      }}
    >
      {children}
    </modeContext.Provider>
  );
    };


export const useMode = () => useContext(modeContext);
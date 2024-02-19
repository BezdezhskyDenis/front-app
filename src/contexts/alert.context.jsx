import React, { createContext, useContext, useState} from "react";

const fn_error_context_must_be_used = () => {
  throw new Error("must use alertContext provider for consumer to work");
};

export const alertContext = createContext({
    alert: null,
    alertType: null,
    handleAlertChange: fn_error_context_must_be_used,
    resetAlert: fn_error_context_must_be_used,
});
alertContext.displayName = "alert";

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState(null)
    const [alertType, setAlertType] = useState(null)

    const handleAlertChange = (alert, type) => {
        setAlert(alert);
        setAlertType(type);
      };

      const resetAlert = () => {
        setAlert("");
        setAlertType(null)
      }

  return (
    <alertContext.Provider
      value={{
        alert,
        alertType,
        handleAlertChange,
        resetAlert
      }}
    >
      {children}
    </alertContext.Provider>
  );
    };


export const useAlert = () => useContext(alertContext);

  
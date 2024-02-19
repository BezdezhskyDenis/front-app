import React, { useState, useEffect } from 'react';
import { useAlert } from '../../contexts/alert.context';

const PageAlert = () => {
    const [isVisible, setIsVisible] = useState(true);
    const { alert, alertType, resetAlert } = useAlert();
    const alertTypes = {
        info:{
            icon: <i className="bi bi-info-circle-fill"></i>,
            class:"alert-primary"
        },
        success:{
            icon: <i className="bi bi-check-circle-fill"></i>,
            class:"alert-success"
        },
        warning:{
            icon: <i className="bi bi-exclamation-triangle-fill"></i>,
            class:"alert-warning"
        },
        danger:{
            icon: <i className="bi bi-exclamation-triangle-fill"></i>,
            class:"alert-danger"
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsVisible(false);
          resetAlert()
        }, 5000);
    
        return () => {
            setIsVisible(true);
            clearTimeout(timeoutId)
        };
      }, [alert]);
    return (
    <>
    {isVisible && <div className={`alert ${alertTypes[alertType].class} d-flex align-items-center sticky-top`} role="alert">
        <span className="mx-1">
            {alertTypes[alertType].icon}
        </span>
        {alert}
    </div>}
    </>
    );
  };
  
  export default PageAlert;
  
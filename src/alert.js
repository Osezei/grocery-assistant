import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div className="font-bold capitalize mb-6 text-blue-400">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;

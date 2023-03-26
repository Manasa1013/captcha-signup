import { createContext, useContext, useState } from "react";
export function useToast() {
  return useContext(ToastContext);
}

export const ToastContext = createContext();
export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
  });
  function hideToast() {
    setToast((toast) => ({ ...toast, isVisible: false, message: "" }));
  }
  function showToast(message) {
    setToast((toast) => ({ ...toast, isVisible: true, message: message }));
  }
  return (
    <ToastContext.Provider
      value={{
        toast,
        setToast,
        hideToast,
        showToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

import "./Toast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
import { useToast } from "../../Contexts/ToastContext";
export function Toast() {
  const { toast, hideToast } = useToast();
  return (
    <div className={toast.isVisible ? "toast show" : "toast hide"}>
      <span style={{ padding: "0.5rem" }}>{toast.message}</span>
      <button
        type="button"
        className="icon--button"
        style={{
          background: "var(--text-white)",
          borderColor: "transparent",
        }}
        onClick={() => {
          console.log("toast bar closed");
          hideToast();
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

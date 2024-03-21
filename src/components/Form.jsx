import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoMillion from "../assets/12345.png";

export default function Start({ setUsername }) {
  const nameRef = useRef();

  const handleClick = () => {
    const name = nameRef.current.value.trim();

    if (!name) {
      toast.error("Будь ласка, введіть ім'я.");
      return;
    }

    setUsername(name);
  };

  return (
    <div className="full">
      <div className="start">
        <img src={logoMillion} alt="" className="logoStart" />
        <input
          className="startInput"
          placeholder="Введіть ваше ім'я"
          ref={nameRef}
        />
        <button className="startButton" onClick={handleClick}>
          Почати!
        </button>

        <ToastContainer />

        <div className="footer">
          <p>Boiko School</p>
        </div>
      </div>
    </div>
  );
}

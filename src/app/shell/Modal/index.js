import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const style = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "10002",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const data = {
    width: "600px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "32px",
    transition: "all .3s ease-in-out",
    opacity: 0,
    transform: "translateY(-10px)",
  };
  const { setIsModalOpen } = props;
  const [ref, setRef] = useState(null)

  useEffect(() => {
    const dataAnimated = setTimeout(() => {
        if(ref) {
            ref.style.opacity = "1";
            ref.style.transform = "translateY(0)";
        }
    }, 50);

    return () => {
        clearTimeout(dataAnimated);
    }

  }, [ref]);

  const closeViewModal = () => {
    setIsModalOpen(false);
  };
  const stopModalClose = e => {
    e.stopPropagation();
  }

  return ReactDOM.createPortal(
    <div style={style} onClick={closeViewModal}>
      <div style={data} ref={setRef} onClick={stopModalClose}>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal_root")
  );
};

export default Modal;

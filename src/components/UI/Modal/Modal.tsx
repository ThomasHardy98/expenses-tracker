import { createPortal } from "react-dom";

import styles from "../Modal/Modal.module.scss";

type ModalType = {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  closeText: string;
};

const Modal = ({ children, isOpen, toggle, closeText }: ModalType) => {
  const mount = document.getElementById("modalRoot");

  if (isOpen && mount) {
    document.body.style.overflow = "hidden";
    return createPortal(
      <div className={styles.background}>
        <div className={styles.modal}>
          {children}
          <button className={styles.button} onClick={toggle}>
            {closeText}
          </button>
        </div>
      </div>,
      mount
    );
  } else {
    document.body.style.overflow = "unset";
    return null;
  }
};

export default Modal;

import styled from "styled-components";
import { useClickForModal } from "../hooks/useClickForModal";
import { cloneElement, createContext, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const StyledModalDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey1);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const OverlayForModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const ButtonForModal = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey10);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey5);
  }
`;

const ModalDialogContext = createContext();

/* eslint-disable react/prop-types */
function ModalDialog({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalDialogContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalDialogContext.Provider>
  );
}

/* eslint-disable react/prop-types */
function Window({ children, name }) {
  const { openName, close } = useContext(ModalDialogContext);
  const ref = useClickForModal(close);

  if (name !== openName) return null;

  return createPortal(
    <OverlayForModal>
      <StyledModalDialog ref={ref}>
        <ButtonForModal onClick={close}>
          <HiXMark />
        </ButtonForModal>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModalDialog>
    </OverlayForModal>,
    document.body
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalDialogContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

ModalDialog.Open = Open;
ModalDialog.Window = Window;

export default ModalDialog;

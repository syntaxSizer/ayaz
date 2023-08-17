import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./styles";
import { toggleModalView } from "../../../data/store/reducers/cart/actions";

const Modal = ({ title, footer, children,  }) => {
    const { modalIsOpen } = useSelector(({toggles})=> toggles);
    const dispatch = useDispatch();
    const hideModal = () => dispatch(toggleModalView());
  return (
    <Fragment>
      {modalIsOpen && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalBody>
                {children}
                </ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;

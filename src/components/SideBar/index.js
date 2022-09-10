import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { createType } from "pages/Home/reducer";
import { typesArraySelector } from "pages/Home/selectors";

import styles from "components/SideBar/styles.module.scss";

const SideBar = () => {
  const types = useSelector(typesArraySelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [typeValue, setTypeValue] = useState("");
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const onCreateType = () => {
    dispatch(createType(typeValue));
    setTypeValue("");
    onCloseModal();
  };
  return (
    <>
      <Box className={styles.wrapper}>
        <Box className={styles.categoriesHolder}>
          <Button
            className={styles.category}
            colorScheme="blue"
            onClick={() => navigate(`/home`)}
          >
            All Todos
          </Button>
          {types?.map(([typename]) => {
            if (!typename) {
              return null;
            }
            return (
              <Button
                key={typename}
                className={styles.category}
                colorScheme="blue"
                onClick={() => navigate(`/home/${typename}`)}
              >
                {typename}
              </Button>
            );
          })}
        </Box>
        <Button className={styles.addCategory} onClick={onOpenModal}>
          + New category
        </Button>
      </Box>

      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write new type</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={typeValue}
              onChange={(event) => setTypeValue(event.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onCloseModal}>
              Close
            </Button>
            <Button variant="ghost" onClick={onCreateType}>
              Create type
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SideBar;

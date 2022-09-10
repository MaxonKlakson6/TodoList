import {
  Box,
  Button,
  Divider,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Select,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import styles from "components/ModalWindow/styles.module.scss";

const ModalWindow = ({
  isOpen,
  onClose,
  subtasks,
  handleAddSubtask,
  onFormChange,
  typeInput,
  subtaskInput,
  onSubmit,
  types,
  onChangeSelect,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please write type of your task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              className={styles.typeInput}
              name="type"
              value={typeInput}
              onChange={onFormChange}
            />
            {types && (
              <Select placeholder="Types options" onChange={onChangeSelect}>
                {types.map(([typeName]) => {
                  return (
                    <option value={typeName} key={typeName}>
                      {typeName}
                    </option>
                  );
                })}
              </Select>
            )}
          </ModalBody>
          <ModalHeader>And write your subtasks</ModalHeader>
          <ModalBody>
            <Box>
              <Input
                name="subtask"
                value={subtaskInput}
                onChange={onFormChange}
              />
              <Button
                className={styles.addSubtaskButton}
                onClick={handleAddSubtask}
              >
                Add subtask
              </Button>
            </Box>
            <Divider className={styles.divider} />
            <OrderedList className={styles.subtasks}>
              {subtasks.map((subtask) => (
                <ListItem key={subtask.id}>{subtask.text}</ListItem>
              ))}
            </OrderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onSubmit}>Add task</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onFormChange: PropTypes.func,
  typeInput: PropTypes.string,
  subtasksInput: PropTypes.string,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  handleAddSubtask: PropTypes.func,
  onSubmit: PropTypes.func,
  types: PropTypes.array,
  onChangeSelect: PropTypes.func,
};

export default ModalWindow;

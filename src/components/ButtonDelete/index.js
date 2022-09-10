import { CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

import styles from "components/ButtonDelete/styles.module.scss";

const ButtonDelete = ({ onClick }) => {
  return (
    <Button className={styles.controlButton} onClick={onClick}>
      <CloseIcon />
    </Button>
  );
};

ButtonDelete.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonDelete;

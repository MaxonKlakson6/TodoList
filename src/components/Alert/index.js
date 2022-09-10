import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Slide,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import styles from "components/Alert/styles.module.scss";

const InfoAlert = ({ isVisible, title, status, message }) => {
  return (
    <>
      <Slide direction="top" in={isVisible}>
        <Alert className={styles.wrapper} status={status}>
          <AlertIcon />
          <Box>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Box>
        </Alert>
      </Slide>
    </>
  );
};

InfoAlert.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  status: PropTypes.string,
  message: PropTypes.string,
};

export default InfoAlert;

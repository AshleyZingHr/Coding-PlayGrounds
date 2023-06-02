/* eslint-disable no-unused-expressions */
import HtmlEditor from "@component/common/htmlEditor";
import MandatoryField from "@component/common/mandatoryField";
import T from "@component/common/translate";
import {
  Box,
  Button,
  Icon,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { setSnackBar } from "@store/app/appActions";
import {
  formBasicDetails,
  setCurrentFormId,
  updateForm,
  addAttachmentToForm,
  deleteFormAttachment,
} from "@store/workflow/workflowActions";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFileIcon } from "@utils/helpers";
import BsTooltip from "@component/bootstrapTooltip";
import { AttachmentItem } from "./commentView";
import SectionHeading from "@component/common/sectionHeading";
import ResponsiveDialog from "@component/common/responsiveDialog";

const useStyles = makeStyles((theme) => ({
  trailButton: {
    backgroundColor: "white",
    borderRadius: "12px",
    margin: "4px",
  },
  trailBox: {
    color: "black",
    fontSize: "large",
    display: "flex",
    direction: "column",
    borderRadius: "12px",
    backgroundColor: "silver",
    width: "40%",
    padding: "12px",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
}));

const Counter = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [hours, setHours] = useState("0");
  const [mins, setMins] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const startTimer = () => {
    const timex = setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
      if (seconds > 59) {
        setSeconds(0);
        setMins((mins) => mins + 1);
        if (mins > 59) {
          setMins(0);
          setHours((hours) => hours + 1);
          if (hours < 10) {
            `0${{ hours }}`;
          } else hours;
        }
        if (mins < 10) {
          `0${mins}:`;
        } else `${mins}:`;
      }
      if (seconds < 10) {
        `0${seconds}`;
      } else seconds;
      startTimer();
    }, 1000);
  };

  const startTimerHandler = () => {
    startTimer();
  };

  const stopTimerHandler = () => {
    clearTimeout(startTimer.timex);
  };

  const resetTimerHandler = () => {
    setHours("0");
    setMins("0");
    setSeconds("0");
    clearTimeout(startTimer.timex);
  };
  return (
    <Box className={classes.trailBox}>
      <span id="hours">{hours}:</span>
      <span id="mins">{mins}:</span>
      <span id="secs">{seconds}</span>
      <Box
        style={{
          display: "flex",
          direction: "row",
        }}
      >
        <Button
          onClick={resetTimerHandler}
          className={classes.trailButton}
          value="Reset"
          id="sw-rst"
        >
          RESET
        </Button>
        <Button
          onClick={startTimerHandler}
          className={classes.trailButton}
          value="Start"
          id="sw-go"
        >
          Start
        </Button>
        <Button
          onClick={stopTimerHandler}
          className={classes.trailButton}
          value="Stop"
          id="sw-stop"
        >
          Stop
        </Button>
      </Box>
    </Box>
  );
};

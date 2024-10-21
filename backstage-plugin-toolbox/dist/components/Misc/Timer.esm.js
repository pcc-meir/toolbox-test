import React, { useState, useEffect } from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
import { TimePaper } from './TimePaper.esm.js';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useToolboxTranslation } from '../../hooks.esm.js';

const Timer = () => {
  const { classes } = useStyles();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { t } = useToolboxTranslation();
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1e3);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds / 60 % 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return { hours, minutes, seconds };
  }
  const timePassed = formatTime(elapsedTime);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 4, style: { marginBottom: "5px" } }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(ButtonGroup, null, !isRunning && /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "contained",
      color: "primary",
      onClick: handleStart
    },
    t("tool.countdown.startButton")
  ), isRunning && /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "contained",
      color: "secondary",
      onClick: handleStop
    },
    t("tool.countdown.stopButton")
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "contained",
      onClick: handleReset,
      sx: {
        backgroundColor: "#E0E0E0",
        color: "#000000 !important",
        "&:hover": {
          backgroundColor: "#E0E0E0"
        }
      }
    },
    t("tool.countdown.resetButton")
  ))))), /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 2, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TimePaper,
    {
      value: timePassed.hours,
      title: t("tool.countdown.hoursLabel")
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TimePaper,
    {
      value: timePassed.minutes,
      title: t("tool.countdown.minutesLabel")
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TimePaper,
    {
      value: timePassed.seconds,
      title: t("tool.countdown.secondsLabel")
    }
  ))));
};

export { Timer as default };
//# sourceMappingURL=Timer.esm.js.map

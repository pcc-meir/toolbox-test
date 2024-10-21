import React, { useState, useEffect } from 'react';
import { useStyles } from '../../utils/hooks.esm.js';
import { TimePaper } from './TimePaper.esm.js';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { useToolboxTranslation } from '../../hooks.esm.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const audioContext = new AudioContext();
const beep = (frequency) => {
  const beep_decay = 1.5;
  const o = audioContext.createOscillator();
  const g = audioContext.createGain();
  o.connect(g);
  o.type = "sine";
  o.frequency.value = frequency;
  g.connect(audioContext.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(
    1e-5,
    audioContext.currentTime + beep_decay
  );
};
async function playAlert() {
  beep(440);
  await sleep(200);
  beep(440);
  await sleep(200);
  beep(440);
}
const Countdown = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const { classes } = useStyles();
  const [isRunning, setIsRunning] = useState(false);
  const [chime, setChime] = useState(true);
  const { t } = useToolboxTranslation();
  const formatTime = (timeInSeconds) => {
    const hoursLeft = Math.floor(timeInSeconds / 3600);
    const minutesLeft = Math.floor(timeInSeconds / 60 % 60);
    const secondsL = Math.floor(timeInSeconds % 60);
    return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsL };
  };
  const handleStart = () => {
    const time = hours * 3600 + minutes * 60 + seconds - 1;
    if (time > 0) {
      setSecondsLeft(time);
      setIsRunning(true);
    }
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    if (isRunning) {
      const time = hours * 3600 + minutes * 60 + seconds - 1;
      setSecondsLeft(time);
    } else {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };
  const handleChimeToggle = (event) => {
    setChime(event.target.checked);
  };
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        const time = secondsLeft - 1;
        if (time > 0) {
          setSecondsLeft(time);
        } else if (time <= 0) {
          setIsRunning(false);
          if (chime) {
            playAlert();
          }
        }
      }, 1e3);
    }
    return () => clearInterval(intervalId);
  }, [hours, minutes, seconds, secondsLeft, isRunning, chime]);
  const timeLeft = formatTime(secondsLeft);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FormControl, { className: classes.fullWidth }, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 4, style: { marginBottom: "5px" } }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    ButtonGroup,
    {
      sx: {
        p: "16px !important",
        pl: "0 !important",
        pt: "0 !important"
      }
    },
    !isRunning && /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "contained",
        color: "primary",
        onClick: handleStart
      },
      t("tool.countdown.startButton")
    ),
    isRunning && /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "contained",
        color: "secondary",
        onClick: handleStop
      },
      t("tool.countdown.stopButton")
    ),
    /* @__PURE__ */ React.createElement(
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
    )
  ), /* @__PURE__ */ React.createElement(
    FormControlLabel,
    {
      control: /* @__PURE__ */ React.createElement(Switch, { defaultChecked: true, onChange: handleChimeToggle }),
      label: "Chime",
      labelPlacement: "start"
    }
  )))), !isRunning && /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 4 }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.countdown.hoursLabel"),
      type: "number",
      value: hours,
      variant: "standard",
      onChange: (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val)) {
          setHours(val);
        }
      }
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.countdown.minutesLabel"),
      type: "number",
      value: minutes,
      variant: "standard",
      onChange: (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val)) {
          setMinutes(val);
        }
      }
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: t("tool.countdown.secondsLabel"),
      type: "number",
      value: seconds,
      variant: "standard",
      onChange: (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val)) {
          setSeconds(val);
        }
      }
    }
  ))), isRunning && /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 2, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TimePaper,
    {
      value: timeLeft.hours,
      title: t("tool.countdown.hoursLabel")
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TimePaper,
    {
      value: timeLeft.minutes,
      title: t("tool.countdown.minutesLabel")
    }
  )), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(
    TimePaper,
    {
      value: timeLeft.seconds,
      title: t("tool.countdown.secondsLabel")
    }
  ))));
};

export { Countdown as default };
//# sourceMappingURL=Countdown.esm.js.map

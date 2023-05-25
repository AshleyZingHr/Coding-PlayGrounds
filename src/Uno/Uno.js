import React, { useState, useEffect, useCallback, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Button,
  InputAdornment,
  Switch,
  Icon,
  IconButton,
  TextField,
  InputLabel,
  ButtonGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

/*
INSTRUCTIONS:
Often times, we want to split our UI into smaller, more focused components to make our code easier to read and test. 
In this challenge, the Badge component is composed of several smaller components. 
Pass the Badge component's props down and apply them to to the child components to render the UI.

TASKS:
Give the image a proper alt tag using the author's name
Make sure the badge displays the profile image correctly
Display the author's name in the badge's heading
Display the author's handle below the heading
Pass the click handler to the button so that it opens an alert when clicked
 */

function Avatar({ img, name }) {
  return <img src={img} alt={name} />;
}

function Name({ name }) {
  return <h4>{name}</h4>;
}

function Handle({ handle }) {
  return <p>{handle}</p>;
}

const clickHandler = () => {
  alert("Added!");
};

function Badge({ user, style }) {
  return (
    <div style={style}>
      <Avatar img={user.img} />
      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button onClick={clickHandler}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={{
        name: "Tyler McGinnis",
        img: "https://avatars0.githubusercontent.com/u/2933430",
        handle: "tylermcginnis",
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--biege-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
      addFriend={() => alert("Added!")}
    />
  );
}

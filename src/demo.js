import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  props: {
    // The component name ⚛️
    MuiButtonBase: {
      // The property to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
});

// zis is the react hook 'makeStyles'?
// its given a function as its arg. given a theme,
// return an obj with button and input. interesting.
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "palevioletred",
    border: "1px solid"
  },
  input: {
    display: "none"
  }
}));

export default function ZeDemo() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ border: "1px solid red" }}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => alert("hello mars")}
        >
          Default
        </Button>
      </div>
    </ThemeProvider>
  );
}

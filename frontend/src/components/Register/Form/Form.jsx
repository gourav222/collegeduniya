import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles, createStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import "./Form.css";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    inputAdornment: {
      display: "flex",
      alignItems: "center",
    },
    image: {
      marginRight: theme.spacing(1),
      width: 20,
      height: 20,
    },
  })
);
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ff7900",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff7900",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "#ff7900",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ff7900",
      },
    },
  },
})(TextField);
const InputFiled = ({ icon, label, type, data }) => {
  const classes = useStyles();
  return (
    <CssTextField
      type={type}
      className={classes.margin}
      label={label}
      variant="outlined"
      id="custom-css-outlined-input"
      ref={data}
      onChange={(e) => (data.current.value = e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={classes.inputAdornment}>
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
};
const Form = ({ fullName, email, phoneNum, city, course }) => {
  return (
    <div className="input-field">
      <div>
        <InputFiled
          type={"text"}
          icon={<PersonIcon style={{ color: "#ff7900" }} />}
          label="Full Name *"
          data={fullName}
        />
      </div>
      <div>
        <InputFiled
          type={"text"}
          icon={<EmailIcon style={{ color: "#ff7900" }} />}
          label="Email Address *"
          data={email}
        />
      </div>
      <div>
        <InputFiled
          type={"text"}
          icon={<LocalPhoneIcon style={{ color: "#ff7900" }} />}
          label="Mobile Number *"
          data={phoneNum}
        />
      </div>
      <div>
        <InputFiled
          type={"select"}
          icon={<PlaceIcon style={{ color: "#ff7900" }} />}
          label="City You Live in *"
          data={city}
        />
      </div>
      <div>
        <InputFiled
          type={"select"}
          icon={<SchoolIcon style={{ color: "#ff7900" }} />}
          label="Course Interested In *"
          data={course}
        />
      </div>
    </div>
  );
};
export default Form;

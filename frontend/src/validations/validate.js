const validate = ({ fullName, email, city, phoneNum, course }) => {
  if (fullName?.current?.value < 3)
    alert("Full Name must be at least 3 characters");
  else if (
    email?.current?.value == null ||
    fullName?.current?.value == null ||
    city?.current?.value == null ||
    phoneNum?.current?.value == null ||
    course?.current?.value == null
  ) {
    alert("Please fill all the fields");
    return false;
  }
  if (phoneNum?.current?.value < 10) {
    alert("Mobile Number must be at least 10 characters");
    return false;
  } else if (city?.current?.value < 3) {
    alert("City must be at least 3 characters");
    return false;
  } else if (email?.current?.value < 3) {
    alert("Email must be at least 3 characters");
    return false;
  } else if (
    email?.current?.value &&
    email?.current?.value.indexOf("@") === -1
  ) {
    alert("Please Enter the valid email");
    return false;
  } else return true;
};

export default validate;

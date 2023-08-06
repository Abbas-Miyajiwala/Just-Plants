function validate_reg_details(){
  let fname = document.getElementById('firstName').value;
  let lname = document.getElementById('lastName').value;
  let bday = document.getElementById('birthdayDate').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('emailAddress').value;
  let phone = document.getElementById('phoneNumber').value;
  var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(fname=="" && lname=="" && bday=="" && email=="" && password=="" && phone==""){
    alert("Enter your Details!!");
  }
  else if(fname=="")
    alert("Enter your First Name");
  else if(lname=="")
    alert("Enter your Last Name");
  else if(bday=="")
    alert("Enter your DOB");
  else if(email=="")
    alert("Enter your Email ID");
  else if(password=="")
    alert("Enter a password");
  else if(phone=="")
    alert("Enter your Mobile number");
  else if(!email.match(validEmail))
    alert("Enter a Valid Email ID");
  else if(phone.length!=10)
    alert("Length of the Mobile number should be 10 digits");
  else if(password.length<8)
    alert("Password should be of minimum 8 characters");
  else if(password.length>16)
    alert("Password should be of maximum 16 characters");

  else
    alert("Registration Successful!");
}
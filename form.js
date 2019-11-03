
function validateForm() {
    var x = document.forms["myForm"]["tName"].value;
    if (x == "") {
      alert("Name must be filled out!");
      return false;
    } 
    var y = document.forms["myForm"]["tEmail"].value;
    if (y == "") {
      alert("Email must be filled out!");
      return false;    
  } else {
      alert("You are ready for the battle!");
      return true;
  }
}

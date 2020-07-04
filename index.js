function validate(){
    var name = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mobile").value;
    var pass = document.getElementById("pass").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(name == "" || email == "" || mob == "" ||pass==""){
    	 swal("All fields are required!","");
        return false;
    }
    if(mob.length<10)
    {
    	swal("Enter valid phone number","");
      return false;
    }
    if (reg.test(email) == false) 
    {
      swal('Invalid Email Address',"");
      return false;
    }
    if(pass.length<6 || pass.length>8){
      swal("Password must contain 6-8 characters","");
        return false;
    }
    closeForm();
    return true;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
  swal({
  title: "Account Created Successfully!",
  text: "Good job!",
  type: "success",
  button: "Ok",
});
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
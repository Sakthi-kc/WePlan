function gotoPage(select){
    window.location = select.value;
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
function val(){
   var dext = document.getElementById('datepicker').value;
   var time = document.getElementById('myTime').value;
   var s1 = document.getElementById('events').value;
   if(s1=="--Events--") {
      swal("All fields are required!");
      return false;
    }
    return true;
  }
function checkDate() {
   var selectedText = document.getElementById('datepicker').value;
   var modals=[];
   var time = document.getElementById('myTime').value;
   var selectedDate = new Date(selectedText);
   var now = new Date();
   if (selectedDate < now) {
    swal("Date must be in the future","");
    document.getElementById('datepicker').value="";
    return false;
  }
  
  return true;
}
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
function img(x)
{
  if(x==0)
  {
    document.getElementById("cost").disabled = false;
    document.getElementById("stateSel").disabled = false;
  }
  if(x==1)
  {
    document.getElementById("cost").disabled = true;
    document.getElementById("cost").value = "";
    document.getElementById("stateSel").disabled = true;
  }
}
function fir(x)
{
  if(x==0)
    document.getElementById("peo").disabled = false;
  if(x==1)
  {
    document.getElementById("peo").disabled = true;
    document.getElementById("peo").value="";
  }
}
function validate(){
    var cost = document.getElementById("cost").value;
    var peo = document.getElementById("peo").value;
    var add= document.getElementById("add").value;
    var food = document.getElementById("yes").checked;
    var fod = document.getElementById("no").checked;
    var one = document.getElementById("1").checked;
    var two = document.getElementById("2").checked;
    if((food==true && cost == "")||(one==true && peo=="")){
      swal("All fields are required!","");
      return false;
    }
    var e = document.getElementById("stateSel");
    var result = e.options[e.selectedIndex].value;

    if(food==true && result==0)
    {
      swal("Choose Any Vehicle","");
      return false;
    }
    else
    {
      swal({
  title: "Submission Accepted!",
  text: "Success",
  icon: "success",
  button: "Ok",
});
      return true;
    }
    return true;
}
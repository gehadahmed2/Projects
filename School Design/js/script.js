function validateForm() {
  var name = document.getElementById('f-name').value;
    var namee = document.getElementById('l-name').value;
    var age = document.getElementById('aga').value;
    var radio = document.getElementById('choose').value;
    var area = document.getElementById('area').value;

  if (name == "" || namee == "" || age == "" || radio == "")
  {
      alert("You Should fill all inputs");
      return false;
      
  }
  else if(name.length >= 30)
      {
         alert("Name Must be less than or equal 30 charact ") ;
          return false;
      } else if(namee.length >= 20){
          alert("Name Must be less than or equal 20 charact ") ;
          return false;
      } else if(age < 18){
           alert("Age must be greater than 18 ") ;
          return false;
      }
         else if(area.length > 250){
           alert("words must be less than 250 ") ;
          return false;
      } 
}

function check() {
    if (document.getElementById('mycheck').checked){
        return true;
    } else {
        alert('please indicate that you have read and agree to the Terms');
        return false;
    }
}



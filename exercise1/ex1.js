
function run(){
  var password = document.getElementById('pass').value;
  var verified = document.getElementById('ver').value;

  if(password.length < 8){
    alert('Password must be at least 8 characters!');
  }
  else if(password != verified){
    alert('Passwords do not match!');
  }
  else{
    alert('Good Password!');
  }
}

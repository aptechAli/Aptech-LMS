function seeds(){
    const Accounts=[
        {id:1,role:"admin",userName:"admin",userPass:"admin",userEmail:"admin@gmail.com"}
    ]
    var AccountsDetails = JSON.stringify(Accounts);
    localStorage.setItem("AccountDetails",AccountsDetails);
}




// const form = document.getElementById('myForm');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     var useremail = document.getElementById("email").value;
//     var userpass = document.getElementById("password").value;
   

//     var localValuesGet = localStorage.getItem("AccountDetails");

//     var AccountDetailss = JSON.parse(localValuesGet);

//     console.log(AccountDetailss[0])

//     if(AccountDetailss[0].userEmail == useremail && AccountDetailss[0].userPass==userpass){
//         alert("thk he")
//     }else{
//         alert("sdadas")
//     }





//   });


  const registerForm = document.getElementById("register");


  console.log(registerForm)
  registerForm.addEventListener('submit', function(event) {
    e.preventDefault();

    var username = document.getElementById("email").value;
    var useremail = document.getElementById("password").value;
    var userRole = document.getElementById("role").value;
   
    console.log(username);
    console.log(useremail);
    console.log(userRole);



  })
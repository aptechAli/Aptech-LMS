// User Registration functionality 

function User_Register(){
    
    var userEmail = document.getElementById("userEmail").value;
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;

    var userImage = document.getElementById("userImage").value;
    var imageAdress = userImage.slice(12);



    var error = document.getElementById("error");

    let emailValidator= "@";
    
    
    var EmailPresent = userEmail.includes(emailValidator);




    if(userEmail.length >5 && EmailPresent == true){
        if(userName.length >2){
            
            if(userPassword.length>4){

                if(userImage.length>2){


                    alert("hello")



                }else{

                    error.innerHTML="User Image  must be Uploaded  "
                }

            }else{
                
                error.innerHTML="User password be greater  "
            }

        }else{
            
            error.innerHTML="User Name must be greater  "
        }
    }else{
        
        error.innerHTML="User Email must be greater and have an @ "
    }












}
// End User Registration functionality 
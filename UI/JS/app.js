 function ValidateEmail(){
              var inp=document.getElementById("email");
               var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               if(inp.value.match(mailformat)) {
                // document.form1.text1.;
                return true;
              }else{
                alert("You have entered an invalid email address!");
               document.getElementById("email").style.backgroundColor = "red";
               //document.getElementById("email").InnerHTML="Enter a valid Email";
               //document.getElementById("email").focus();

                //return false;
                }
              }
               // alert(inp);
               function CheckPassword(){
               var inpu=document.getElementById("pwd");
                var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
                if(inpu.value.match(paswd)){  
                  document.getElementById("pwd").style.backgroundColor = "";
                  //inpu.addEventListener("focusout", myBlurFunction);
                  return true;

                } else{ 
                  //alert('Password does not meet requirements');
                   document.getElementById("pwd").style.backgroundColor = "red";
                  
                    }
                }  
                function pwdcheck(){
                  var input1=document.getElementById("pwd").value;
                  var input2=document.getElementById("pwdr").value;
                  if(input1==input2){
                    document.getElementById("pwdr").style.backgroundColor = "";
                    //x.addEventListener("focusout", myBlurFunction)
                    return true;

                  }else{
                   // document.getElementById("pwdr").InnerHTML="Passwords does not mutch";
                    document.getElementById("pwdr").style.backgroundColor = "red";
                  }
                  //alert(input2+" treh "+input1);

                }
                function reset() {
                 document.getElementById("pwd").style.backgroundColor = ""; 
                 document.getElementById("pwdr").style.backgroundColor = ""; 
                }
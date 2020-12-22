        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var emailInput = document.getElementById("emailInput");
        document.getElementById("emailInputHidden").style.display = "none";

        function valueUpdate(){
            var valueForm = document.getElementById("emailInput").value;
            document.getElementById("emailInputHidden").value = valueForm;
            if(document.emailForm.email_address.value.match(mailformat)){
                //alert(valueForm);
                document.getElementById('verificationMsg').innerHTML = "<span class='help is-success'>Valid Email. Ready to submit</span>";
            }else{
                document.getElementById('verificationMsg').innerHTML = "<span class='help is-danger'>Enter a valid email</span>";
                document.emailForm.email_address.focus();
                event.preventDefault();
            }
        }

        function validate(){
            if(document.emailForm.email_address.value.match(mailformat) && document.emailForm.email_address.value != ""){
                document.getElementById("notificationBox").innerHTML = "<div class='notification is-primary is-light'><p class=''>Email entered:&nbsp;" + document.emailForm.email_address.value +  "</p></div>";
                document.getElementById("inputs").style.display = "none";
                document.getElementById('verificationMsg').style.display = "none";
            }else{
                document.getElementById('verificationMsg').innerHTML = "<span class='help is-danger'>Enter a valid email</span>";
                document.emailForm.email_address.focus();
                event.preventDefault();
            }
            nameValidator();
        }

        function nameValidator(){
            if(document.getElementById("nameInput").value.length == "0" ){
                document.getElementById('nameVerificationMsg').innerHTML = "<span class='help is-danger'>Enter your name</span>";
                document.emailForm.email_address.focus();
                event.preventDefault();
            }else{
                console.log("entered");
                document.getElementById('nameVerificationMsg').style.display = "none";
            }
        }

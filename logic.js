
function StudentDetails(name,email,website,imageLink){

    this.name = name;
    this.email = email;
    this.website = website;
    this.imageLink = imageLink;
}


function submitForm(){

    var name  = document.querySelector("#inputName").value;
    var email = document.querySelector("#inputEmail").value;
    var website = document.querySelector("#inputWebsite").value;
    var imageLink = document.querySelector("#inputImage").value;

    var details = new StudentDetails(name,email,website,imageLink);
    // Complete validations
    if(validateForm(details)){
        if(checkEmail(details.email)){
        append(details);
        clearForm();
        }
    }
    else{
        return alert("Enter all Details.");
    }
   
}

function validateForm(details){

    for(value in details){
        if(details[value]=="")
        return false;
    }
    return true;
}

function checkEmail(email){

    if(email==null || email=="") return false;

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat)){
        return true;
    }
    else{
        alert("Wrong Email Format");
        return false;
    }   
 
}


function append(details){

    var oldData = document.querySelector("#displayArea").innerHTML;                    
    var newData = '<table class="studentTable"><tr class="heading"><th><b>Description</b></th><th ><b>Image</b></th></tr><tr><td>'+details.name+'</td><td id = "imageCol"rowspan="5"><div id="imageDiv" style = "image: url("'+ details.imageLink+ '")     max-height="100%" max-width="100%"       "></div> </td></tr><tr><td>'+details.email+'</td> </tr><tr><td>'+details.website+'</td></tr><tr><td>'+'Skills: Java HTML'+'</td></tr></table>'

    document.querySelector("#displayArea").innerHTML = oldData + newData;

}

function clearForm(){

    document.querySelector("#inputName").value = null;
    document.querySelector("#inputEmail").value = null;
    document.querySelector("#inputWebsite").value = null;
    document.querySelector("#inputImage").value = null;
}


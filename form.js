function handleForm(){
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',(event)=>{
         event.preventDefault();
        let form = event.target;
        let username=form.elements.username.value;
        let email=form.elements.email.value;
        let validationValue = validateForm(username, email);
        
        if(validationValue == 0){
            handleFormDisplay();
        }
    })
    myForm.removeEventListener('submit',handleForm);
}

handleForm();

function validateForm(username, email){
    console.log(username,email);
        if(username == email){
            alert("Username and password cannot be same");
            return 1;
        }else{
            username == "" ? alert("Username cannot be empty") : "";
            email == "" ? alert("Email cannot be empty") : "";
         return 0;
    }
}


function handleFormDisplay(){
    let myForm=document.getElementById("myForm");
    let div = document.createElement("div");
    div.setAttribute('class',"success");
    div.textContent = "Form Submitted Successfully!";                                                     
    myForm.replaceWith(div);
}
function validate(userForm) {
    div=document.getElementById("emailmsg"); 
    div.style.color="red";                   
    if(div.hasChildNodes())                  
    {
        div.removeChild(div.firstChild);    
    }
    regex=/(^\w+\@\w+\.\w+)/;               
    match=regex.exec(userForm.emailaddress.value);
    if(!match)
    {
        div.appendChild(document.createTextNode("Invalid Email"));  
        userForm.emailaddress.focus();       
        return false;                        
    }
    div=document.getElementById("passwdmsg");
    div.style.color="red";
    if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if(userForm.password.value.length <=5)  
    {
        div.appendChild(document.createTextNode("The password should be of at least size 6"));
        userForm.password.focus();
        return false;
    }

    if(userForm.zipcode.value.length <5)  
    {
        div.appendChild(document.createTextNode("The Zipcode should be of at least size 5"));
        userForm.zipcode.focus();
        return false;
    }
    
    var Phnlength=userForm.phoneno.value.length;
    if (Phnlength < 10 || Phnlength > 10 ){
        window.alert("Invalid Phoneno Entered");
        userForm.phoneno.focus();
        return false;
    }

    div=document.getElementById("repasswdmsg");
    div.style.color="red";
    if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if(userForm.password.value != userForm.repassword.value) 
    {
        div.appendChild(document.createTextNode("The two passwords don't match"));
        userForm.password.focus();
        return false;
    }
    var div=document.getElementById("usrmsg");
    div.style.color="red";
    if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if(userForm.fullname.value.length ==0) 
    {
        div.appendChild(document.createTextNode("Name cannot be blank"));
        userForm.fullname.focus();
        return false;
    }
    return true;
}

function addcustomer(userForm) {
	var customer = {};
	customer.email = userForm.emailaddress.value;
	customer.password = userForm.password.value;
	customer.fullname = userForm.fullname.value;
	customer.address = userForm.address.value;
	customer.city = userForm.city.value;
	customer.state = userForm.state.value;
	customer.country = userForm.country.value;
	customer.zipcode = userForm.zipcode.value;
	customer.phoneno = userForm.phoneno.value;

    //setting the localstorage variables
    localStorage.setItem("Email",customer.email);
    localStorage.setItem("FullName",customer.fullname);
    localStorage.setItem("Address",customer.address);
    localStorage.setItem("Address",customer.address);
    localStorage.setItem("city",customer.city);
    localStorage.setItem("state",customer.state);
    localStorage.setItem("Country",customer.country);
    localStorage.setItem("Zipcode",customer.zipcode);
    localStorage.setItem("phoneno",customer.phoneno);



	
	// Convert the customer object into JSON data  
	localStorage.customer = JSON.stringify(customer); 
	//alert(localStorage.customer);
    localStorage.Customerobj=customer;
    
    
	return true;
	
}

function getHTMLcustomer(){
    var Cobj=localStorage.Customerobj
    alert(Cobj);
    return Cobj;

}


function getCustomer() {	
	var customerString = "";
	
	if(localStorage.customer !== undefined) { 
		customerString = localStorage.customer;
		
		customer = JSON.parse(localStorage.customer); 
		return customer; 
	} 
	
	return customerString;
}

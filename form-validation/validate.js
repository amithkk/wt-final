function doValidate(){
    var form = document.forms['validate'];
    var error = [];
    console.log("Hi");
    console.log(document.forms[0]);
    if(!/[A-Za-z]+ [A-Za-z]+/.test(form['name'].value))
        error.push('name');
    if (!/[A-Za-z_-]+@[A-Za-z-]+.(com|co|co.in|in)/.test(form['email'].value))
        error.push('email');
    if (!/\d{10}/.test(form['mobile'].value))
        error.push('mobile');
    if (isNaN(Date.parse(form['dob'].value)))
        error.push('dob');

    [...document.getElementsByTagName('input')].forEach((x)=> x.classList.remove("error-border"))
    error.forEach((x) => document.getElementById(x).classList.add("error-border"))

    var errorStr = error.join(", ")

    if(errorStr !== ''){
        document.querySelector(".info").classList.remove('hidden')
        document.querySelector("#cause").innerHTML = errorStr
    }
    else{
        document.querySelector(".info").classList.add('hidden')
        alert("All Okay!");
    }

}
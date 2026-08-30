function login(){

    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;

    if(user==="admin" && pass==="admin123"){
        document.getElementById("msg").style.color="green";
        document.getElementById("msg").innerHTML="Login Successful ✅";
        setTimeout(() => {
    window.location.href = "dashboard.html";
}, 1000);
    }
    else{
        document.getElementById("msg").style.color="red";
        document.getElementById("msg").innerHTML="Invalid Username or Password ❌";
    }

}
var objPerson=[

    {
        username:"lekan",
        password:"1234"
    },

    {
        username:"ada",
        password:"5678"
    },
    
    
    {
        username:"ifeoma",
        password:"4321"
    },

]

function login(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value


for (i=0; i<objPerson.length; i++){
if(username==objPerson[i].username && password==objPerson[i].password){
    alert("SUCCESS")
    return
}

else{alert("wrong username/password")}
}


}






















   // Form Validation

   document.getElementById("form").addEventListener("submit", userSubimt);

   let arr1 = JSON.parse(localStorage.getItem("User-D")) || [];

   function userFunction(n,c,code,m,s,cntry,u,e,p){
      
     this.name = n
     this.catagory = c
     this.c_code = code
     this.number = m
     this.state = s
     this.country = cntry
     this.username = u
     this.email = e
     this.password = p
   }

   function userSubimt(event){
    event.preventDefault();

    let name = document.getElementById("full-name").value;
    let catagory = document.getElementById("catagory").value;
    let c_code = document.getElementById("country_code").value;
    let mobile = document.getElementById("m-num").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    //console.log(name,catagory,c_code,mobile,state,country,username,email,password);

    let userDetails = new userFunction(name,catagory,c_code,mobile,state,country,username,email,password);

    //console.log(userDetails);

    arr1.push(userDetails);

    console.log(arr1);

    localStorage.setItem("User-D", JSON.stringify(arr1));
    
   }
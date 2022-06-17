
     // Form Validation 

document.getElementById("emp-form").addEventListener("submit", empSubmit);

let arr = JSON.parse(localStorage.getItem("Employees")) || [];

function empFunction(n,m,em,st,c,dob,qua,cata,exp,u,p){
    this.name = n
    this.mobile = m
    this.email = em
    this.state = st
    this.country = c
    this.dob = dob
    this.qualification = qua
    this.cata = cata
    this.exp = exp
    this.username = u
    this.password = p
}

function empSubmit(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let dob = document.getElementById("dob").value;
    let qualification = document.getElementById("qualification").value;
    let cata = document.getElementById("select-catagory").value;
    let exp = document.getElementById("select-experience").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;

   // console.log(name,mobile,email,state,country,dob,qualification,cata,exp,username,password)

   let empDetails = new empFunction(name,mobile,email,state,country,dob,qualification,cata,exp,username,password);

   arr.push(empDetails);

   localStorage.setItem("Employees", JSON.stringify(arr));

   //console.log(arr);

    document.getElementById("name").value = null;
    document.getElementById("mobile").value = null;
    document.getElementById("email").value = null;
    document.getElementById("state").value = null;
    document.getElementById("country").value = null;
    document.getElementById("dob").value = null;
    document.getElementById("qualification").value = null;
    document.getElementById("select-catagory").value = null;
    document.getElementById("select-experience").value = null;
    document.getElementById("username").value = null;
    document.getElementById("pass").value = null;

}

arr.map(function (elem, index){

    JSON.parse(localStorage.getItem("Employees")) || [];
    console.log(elem);

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.name;
 
    var td2 = document.createElement("td");
    td2.innerText = elem.username;
 
    var td3 = document.createElement("td");
    td3.innerText = elem.email;
 
    var td4 = document.createElement("td");
    td4.innerText = elem.mobile;
 
    var td5 = document.createElement("td");
    td5.innerText = elem.cata;
 
    var td6 = document.createElement("td");
    td6.innerText = elem.state
 
    var td7 = document.createElement("td");
    td7.innerText = elem.country;

    var td8 = document.createElement("td");
    td8.innerText = "Remove"
    td8.style.cursor = "pointer"
    td8.addEventListener("click", function(){
        removeItem(elem,index)
    })
 
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    
    document.querySelector("tbody").append(tr);
   })

   function removeItem(elem, index){
      console.log(elem, index);
      arr.splice(index,1);
      localStorage.setItem("Employees", JSON.stringify(arr));
      window.location.reload();

   }
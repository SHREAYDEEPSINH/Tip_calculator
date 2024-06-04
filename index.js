let amount=document.querySelector("#billamount");
let service=document.querySelector("#service");
let sharing=document.querySelector("#people");
let btn=document.querySelector("#calculate");
let ans=document.querySelector(".ans");

let tipcalFun=(e)=>{
    e.preventDefault();
    if(amount.value==""){
        alert("enter bill amount");
    }
    else if(service.value=="select"){
        alert("select service rating");
    }
    else if(sharing.value==""){
        alert("How many people are sharing the bill ?")
    }
    else{
        e.preventDefault();
        let tip=((amount.value)*(service.value)/100)/sharing.value;
        ans.innerText=(`TIP AMOUNT Rs. ${tip} Each`);
        ans.style.fontWeight="900";
        ans.style.textAlign="center";
        ans.style.margin="auto";
        ans.style.marginTop="20px";
    }
}
btn.addEventListener("click",tipcalFun)
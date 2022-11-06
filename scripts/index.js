
document.querySelector(".fa-xmark").addEventListener("click", myFun);
function myFun() {
    // console.log("none");
    document.querySelector(".top-navbar").style.display = "none";
}

// slideshow--start-------------------------------------------

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// slideshow--end-------------------------------------------

// slider after video starts--------------------

let left = 1;
let right = 4;
function show(){
    for(let i=left;i<=right;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
}
show();
function moveLeft(){
    if(left<=12 && right<=16){
        document.getElementById("c"+left).style.display="none";
        left+=1;
        right+=1;
        for(let i=left;i<=right;i++){
         document.getElementById("c"+i).style.display="inline-block";
        }
    }else{
        return;
    }
  
}
function moveRight(){
    if(left>=1 && right>=5){
        document.getElementById("c"+right).style.display="none";
        left-=1;
        right-=1;
        for(let i=left;i<=right;i++){
         document.getElementById("c"+i).style.display="inline-block";
        }
    }else{
        return;
    }
 }
// hot deals slider-------------------

const productContainer = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) =>{
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', ()=>{
     item.scrollLeft += containerWidth;
  })
  preBtn[i].addEventListener('click', ()=>{
    item.scrollLeft -= containerWidth;
 })
 
});
  
//login-div--------------------------

function openNav() {
    document.getElementById("mySidenav").style.width = "656.6px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//login functionality-----------
 function loginFun(){
    let mob = document.querySelector(".input-num-div").value;
    console.log(mob.length);
    if(Number(mob.length)==10){
        document.querySelector(".otpButtonDisabled").style.background="#000000";
        request();
    }
 }
function request(){
    alert("enter OTP")
   document.querySelector(".reqPara").innerText="Didn't get the OTP? Resend OTP";
}
function otp(){
    let otp = document.querySelector(".rohinput-otp").value;
    if(Number(otp.length)==4){
        document.querySelector(".verifyOtpButtonDisabled").style.background="#fc2779";
    }
}

function verify(){
    window.location.href="index.html";
    document.querySelector("#changeName").innerText="Hi,Rohini Kushwaha";
}

// cart and wishlist show-----------------

function showWish(){
    document.querySelector(".show-wish").style.display="block";
}
function hideWish(){
    document.querySelector(".show-wish").style.display="none";
}

function showCart(){
    document.querySelector(".show-cart").style.display="block";
}
function hideCart(){
    document.querySelector(".show-cart").style.display="none";
}

// search functionality---------------

function search(){
    document.querySelector(".search-prod").addEventListener("click",myFun);
}
function myFun(){
    window.location.href="Products.html";
    document.querySelector(".searchInp").value=null;
}

function cartPage(){
    window.location.href="CartPage.html";
}

  

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
displayCartData(cartData);

 
var total = cartData.reduce(function(sum,el,index,arr){
    return sum + Number(el.price);
},0);
// console.log(total);
document.querySelector("#print-rs").innerText = ` Rs. ${total}`; 


function displayCartData(cartData){

    let mrpTotal=0;
    let priceTotal=0;
    let discTotal = 0;

var total = cartData.reduce(function(sum,el,index,arr){
    return sum + Number(el.price);
},0);
// console.log(total);
document.querySelector("#print-rs").innerText = ` Rs. ${total}`; 

    document.querySelector(".item-added").innerText = null;

    cartData.map((elem,index)=>{

        mrpTotal=mrpTotal+elem.mrp;
        document.querySelector(".print-mrp").innerText=`Rs. ${mrpTotal}`;
        priceTotal=priceTotal+elem.price;
        document.querySelector(".print-pay").innerText=`Rs. ${priceTotal}`;
        discTotal = discTotal + ((elem.mrp*elem.discount)/100);
        document.querySelector(".print-disc").innerText=`Rs. ${discTotal}`;
        // document.querySelector(".show-paisa").innerText= `(Rs. ${priceTotal})`;

        // console.log(elem);

        let box = document.createElement("div");
        box.setAttribute("class", "boxdiv");

        let box1=document.createElement("div");
        box1.setAttribute("class","box1");

        let img = document.createElement("img");
        img.setAttribute("class","img-lips");
        img.src = elem.img;

        let title = document.createElement("h4");
        title.innerText = elem.title;

        let paradiv = document.createElement("div");
        paradiv.setAttribute("class","paradiv");
        paradiv.addEventListener("click", ()=>{
            alert("Item added to Wishlist")
        })

        let wish = document.createElement("img");
        wish.src="https://in.sugarcosmetics.com/desc-images/Wishlist.svg";

        let wish2 = document.createElement("p");
        wish2.innerText="Save to Wishlist";

        paradiv.append(wish,wish2);

        let box12=document.createElement("div");
        box12.setAttribute("class","box12");
        box12.append(title, paradiv);

        box1.append(img,box12);

        let box2 = document.createElement("div");
        box2.setAttribute("class","box2");

        let removebtn=document.createElement("div");
        removebtn.setAttribute("class","removebtn");
         
        let delimg = document.createElement("img");
        delimg.setAttribute("class","delimg");
        delimg.src="https://www.kindpng.com/picc/m/200-2004814_delete-icon-png-transparent-png.png";

        removebtn.append(delimg);

        removebtn.addEventListener("click",function(){
            remove(elem,index);
        });

        let box22=document.createElement("div");
        box22.setAttribute("class","box22");

        let count = document.createElement("div");
        count.innerText = 1;
        // let cou = count.innerText;

        let calc=document.createElement("div");
        calc.setAttribute("class","calc");
        calc.innerText= `${count.innerText} x ${elem.price} = ${count.innerText*elem.price}`;

        let dec = document.createElement("div");
        dec.setAttribute("class","dec");
        dec.innerText="-";
        dec.addEventListener("click",decFun)
        function decFun(){
          let storeCount = count.innerText;
            if(storeCount>1){
                count.innerText--; 
                calc.innerText= `${count.innerText} x ${elem.price} = ${count.innerText*elem.price}`; 
                mrpTotal=mrpTotal-elem.mrp;
                document.querySelector(".print-mrp").innerText=`Rs. ${mrpTotal}`;
                priceTotal=priceTotal-elem.price;
                document.querySelector(".print-pay").innerText=`Rs. ${priceTotal}`;
                discTotal = discTotal - ((elem.mrp*elem.discount)/100);
                document.querySelector(".print-disc").innerText=`Rs. ${discTotal}`;
                
                document.querySelector("#print-rs").innerText = ` Rs. ${priceTotal}`;

                document.querySelector(".show-paisa").innerText= `(Rs. ${priceTotal})`;

            }
         }

        let inc = document.createElement("div");
        inc.setAttribute("class","inc");
        inc.innerText = "+";
        inc.addEventListener("click",incFun)
        function incFun(){
                count.innerText++;
                calc.innerText= `${count.innerText} x ${elem.price} = ${count.innerText*elem.price}`;
                mrpTotal=mrpTotal+elem.mrp;
                document.querySelector(".print-mrp").innerText=`Rs. ${mrpTotal}`;
                priceTotal=priceTotal+elem.price;
                document.querySelector(".print-pay").innerText=`Rs. ${priceTotal}`;
                discTotal = discTotal + ((elem.mrp*elem.discount)/100);
                document.querySelector(".print-disc").innerText=`Rs. ${discTotal}`;

                document.querySelector("#print-rs").innerText = ` Rs. ${priceTotal}`;

                document.querySelector(".show-paisa").innerText= `(Rs. ${priceTotal})`;
         }

        box22.append(dec,count,inc);

        box2.append(removebtn,box22,calc);
    
        box.append(box1,box2);

        document.querySelector(".item-added").append(box);
    });
     
    function remove(elem,index){
        cartData.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(cartData));
        window.location.reload();
        displayCartData(cartData);
    }
} 

function openCross(){
    window.location.href="Offers.html";
}
function gotoAddress(){
    window.location.href="Address.html"; 
}

//--------------------------------address page js included (show-paisa) ----------------------------------------//









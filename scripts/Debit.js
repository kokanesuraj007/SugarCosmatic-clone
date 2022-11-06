
document.getElementById("finalPay").addEventListener("click",function(event){
    event.preventDefault(event);
    document.getElementById("finalPay").addEventListener("click",function(event){
        event.preventDefault(event);
            var name=document.querySelector("#mycard-name").value
            var card_no = document.querySelector("#mycard-number").value
            var cvv = document.querySelector("#CVV").value
           
           if(card_no.length==16 && cvv.length==3){
             window.location.href="Successful.html"
           }
           else{
             alert("please fill with correct details")
           }
       
    })
})

document.getElementById("clickHere").addEventListener("click",function(){
    window.location.href="Payment.html"
})
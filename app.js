const billAmount = document.querySelector("#billAmount");
const cashReturn = document.querySelector("#cashReturn");
const checkbtn = document.querySelector("#checkbtn");
const errormsg = document.querySelector("#errormsg");

const Notes = [2000,500,200,100,50,20,10,5,1];



checkbtn.addEventListener("click", function clickHandler(){

    var totalBill = billAmount.value;
    var givenamount = cashReturn.value;
  
   if(billAmount.value > 0 ){

   
            if(cashReturn.value > billAmount.value){

                

                

            } else {

                Showmsg("Cash Provided should atleast equil to bill amount");

            }

            

   }else {

       Showmsg("Invalid Bill Amount");
   }


});


function Showmsg(err) {

    errormsg.innerText = err;
}
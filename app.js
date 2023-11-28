const billAmount = document.querySelector("#billAmount");
const cashReturn = document.querySelector("#cashReturn");
const checkbtn = document.querySelector("#checkbtn");
const errormsg = document.querySelector("#errormsg");

const Notes = ["2000","500","200","100","50","20","10","5","1"];



checkbtn.addEventListener("click", function clickHandler(){

    var totalBill = parseInt(billAmount.value);
    var givenamount = parseInt(cashReturn.value) ;
   
  
   if(totalBill > 0 ){

            errormsg.style.display = "none";
    
   
            if(givenamount >= totalBill){

                console.log(givenamount >= totalBill);
                               
                console.log("cashReturn="+givenamount);
                console.log("billamount ="+totalBill);
               
                for(let i = 1;i < Notes.length;i++){

                    console.log(Notes[i]);
                }

                

            } else {

                Showmsg("Cash Provided should atleast equil to bill amount");

            }

            

   }else {

       Showmsg("Invalid Bill Amount");
   }


});


function Showmsg(err) {
    errormsg.style.display = "block";
    errormsg.innerText = err;
}
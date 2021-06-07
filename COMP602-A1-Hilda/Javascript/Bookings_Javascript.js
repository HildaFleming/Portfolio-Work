/*used for the displaying of the email message*/
function showEmailMessage() {
  document.getElementById("EmailMessage").style.display="block";
}
function hideEmailMessage(){
    document.getElementById("EmailMessage").style.display="none";
}



/*Used for the display time*/
/*
function displayEstimatedTime() {
  if(document.getElementById("Arrival").value!==" "
   && document.getElementById("Departure").value!==" ")
  {
  document.getElementsByClassName("TimeETA").style.display="block";
}}

function displayETA() {
if(document.getElementById("Arrival").value!=="" &&
 document.getElementById("Departure").value!==""){
document.getElementsByClassName("Timeest").style.display="block";
}
}


function UpdatePrice() {


  var roomType = document.getElementById("RoomType").value;
  var roomType = document.getElementById("NoRooms").value;
  var roomType = document.getElementById("StartDate").value;
  var roomType = document.getElementById("EndDate").value;
  var roomType = document.getElementById("noAdults").value;
  var roomType = document.getElementById("noChildren").value;
  var roomType = document.getElementById("breakfast").value;
  var Price = 0;
  var breakfastPrice = 25;
*/
  /*checks for input*/
  /*
  if(StartDate == "" || EndDate == "" || roomType == "") { return;}

  //Calculates the day difference between two dates.
  StartDate = new Date (StartDate);
  EndDate = new Date (EndDate);

  //Calculating how many nights guests are staying
  var DaysDifference = EndDate.getTime() - StartDate.getTime();
  DayDifference /=1000;
  DayDifference /=60;
  DayDifference /=60;
  DayDifference /=24;

*/
  //Calculating room Price
  //Currentprice = roomType; /*the current price only consists of the room they choose*/
  //Currentprice*=parseInt(noRooms) //Increases the price depending on the amount of rooms they choose
  //var totalBreakfastPrice = 0; //sets the totalBreakfastPrice to equal zero at the Start
  //if (breakfast) { //if breakfast is chosen
    //totalBreakfastPrice = breakfastPrice*parseInt(noAdults);
    //totalBreakfastPrice = breakfastPrice*parseInt(noChildren);
    //Currentprice += totalBreakfastPrice; }

    //calculates the price per night for each night
    //Currentprice += DayDifference; //Caculates the total price for the amounts nights you stay
    //document.getElementById("YourStayPrice").textContent = '$' + Currentprice.toString();

  //}
//}





function showErrorMessage() {
  document.getElementById("errorMessage").style.display="block";}

function hideMessage(){
    document.getElementById("errorMessage").style.display="none";
}

function displayETA(){
var startDate = document.getElementById("Arrival").value;
var endDate = document.getElementById("Departure").value;
var ETALabel = document.getElementById("ETALabel");
if(startDate != ""){
var validDate = validDateCheck(startDate, endDate);
if(!validDate){
document.getElementById("errorMessage").style.display = "block";
ETALabel.style.opacity = "0";
}
else{
document.getElementById("errorMessage").style.display = "none";
}
if(endDate != ""){
validDate = validDateCheck(startDate, endDate);
if(validDate){
document.getElementById("errorMessage").style.display = "none";
ETALabel.style.opacity = "100";
}
else{
document.getElementById("errorMessage").style.display = "block";
ETALabel.style.opacity = "0";
}
}
}
}





function priceUpdate(){
var total=0;
var rmPrice = parseInt(document.getElementById("RoomType").value);
var rmQty = parseInt(document.getElementById("NoOfRoomsrequired").value);
var checkIn = document.getElementById("Arrival").value;
var checkOut = document.getElementById("Departure").value;
var numAdults = parseInt(document.getElementById("NoOfAdults").value);
var numChild = parseInt(document.getElementById("NoOfChildren").value);
var breakfast = document.getElementById("breakfast").checked;
var breakfastPrice = 35;


if(checkIn=="" || checkOut==""){return;}
checkIn = new Date(checkIn);
checkOut = new Date(checkOut);
total = rmPrice* rmQty;

var nights = (checkOut.getTime() - checkIn.getTime())/1000/60/60/24; //Division removes the milliseconds, seconds, minutes and hours so the difference is measured in days
total*=nights;

var breakfastTotal = 0;
if(breakfast){
breakfastTotal = numAdults * breakfastPrice;
breakfastTotal += numChild * breakfastPrice;
total+= breakfastTotal;
}

document.getElementById("totalPrice").innerHTML = total;
}




function validDateCheck(Arrival, Departure){
  var todayDay = new Date();
    var dd = todayDay.getDate();
    var mm = todayDay.getMonth()+1;
    var yyyy = todayDay.getFullYear();
            if (dd<10) {
        dd = '0'+dd
    }
    if (mm<10) {
      mm = '0'+mm
    }
    todayDay = yyyy + '-' + mm + '-' + dd;
  if(Departure == "") {
    if(Arrival < todayDay){
      return false;
  }
    return true;
}
if (Arrival < todayDay || Departure == todayDay || Departure == Arrival || Arrival > Departure){
    return false;
}
else{
    return true;
  }
}


function resetInfo() {
  if (confirm("Are you sure you want to reset all information?")){
    //set all values to initial values
    document.getElementById("Arrival").value = "";
    document.getElementById("Departure").value = "";
    document.getElementById("Timeest").style.opacity = "0";
    document.getElementById("Timeest").value = "14:00:00";
    document.getElementById("ETALabel").style.opacity = "0";
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("RoomType").value = "";
    document.getElementById("NoOfRoomsrequired").value = "";
    document.getElementById("NoOfAdults").value = "";
    document.getElementById("NoOfChildren").value = "";
    document.getElementById("breakfast").checked = "false";
    document.getElementById("yourStayTotal").textContent = "$";
    document.getElementById("Title").value = "";


    var i;
    var textboxes = document.getElementById("info");
    for (i = 0; i < textboxes.length; i++) {
      textboxes[i].value = "";
    }
  }
}

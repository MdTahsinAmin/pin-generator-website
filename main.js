
var randomNumber = document.getElementById('randomNumberBtn');

randomNumber.addEventListener('click',function(){
     display('showRandomNumber');
     showRandomNumber();
   
});

// Number Pad

function getInput(id){
    display('numberPad');
     var BtnValue = getElementByTags(id);
    var NumberPadValue = document.getElementById('numberPad').value;

    switch(BtnValue){
        case 1 :
         NumberPadValue = NumberPadValue+'1';
         break;

         case 2 :
         NumberPadValue = NumberPadValue+'2';
         break;

         case 3 :
         NumberPadValue = NumberPadValue+'3';
         break;

         case 4 :
         NumberPadValue = NumberPadValue+'4';
         break;

         case 5 :
         NumberPadValue = NumberPadValue+'5';
         break;

         case 6 :
         NumberPadValue = NumberPadValue+'6';
         break;

         case 7 :
         NumberPadValue = NumberPadValue+'7';
         break;

         case 8 :
         NumberPadValue = NumberPadValue+'8';
         break;

         case 9 :
         NumberPadValue = NumberPadValue+'9';
         break;

         case 0 :
         NumberPadValue = NumberPadValue+'0';
         break;
    }
    document.getElementById('numberPad').value = NumberPadValue;
}

//Submit-Btn

var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',function(){
    matchAndDisplay('showRandomNumber','numberPad');
 
})

function matchAndDisplay(firstId,secondId){
    var randomNumber = document.getElementById(firstId).value;

    var textNumber = document.getElementById(secondId).value;

    if(randomNumber == textNumber){
       trueOrFalse(true);
    }
    else{
      trueOrFalse(false);  
    }
}

function trueOrFalse(isTrue){
    if(isTrue == true){
        document.getElementById('bottom-text-for-match').style.display = 'block';

        document.getElementById('bottom-text-for-failed').style.display = "none";
    }
    else{
        
        document.getElementById('bottom-text-for-failed').style.display = "block";

        document.getElementById('bottom-text-for-match').style.display = 'none';
       
        var spanTagsValue = getElementByTags('tryValue');

      // console.log(spanTagsValue);

       if(spanTagsValue == 1 ){
           spanTagsValue -=1;
           document.getElementById('submitBtn').disable = true;
           document.getElementById('submitBtn').style.backgroundColor = "red"
       }

       else if(spanTagsValue > 0){
         spanTagsValue = spanTagsValue - 1;
       }
      
       document.getElementById('tryValue').innerText = spanTagsValue;
       
    }
}
// submit btn work finish 

// all clear Btn 

function allClearBtn(id){
    var numberPadValue = document.getElementById('numberPad').value;
     presentNumberPadValue = "";

    document.getElementById('numberPad').value = presentNumberPadValue;
}

// Erase last digit btn

function eraseLastDigit(id){

    var NumberPadValue = document.getElementById(id).value;

    if(NumberPadValue.length > 0){
        NumberPadValue = NumberPadValue.substring(0,NumberPadValue.length-1);
    }

    document.getElementById(id).value = NumberPadValue;
}


// show random Number 
function showRandomNumber(){
 var randomValue =  randomGenerate();
     var Number= document.getElementById('showRandomNumber').value;
     Number = randomValue;
     document.getElementById('showRandomNumber').value = Number;
}

// Function for 4 digit Random Number 

function randomGenerate(){

    var random = Math.round(1000+ Math.random()*9000);

    return random;
}

 // Value of InnerText

 function getElementByTags(id){
     var tagValue = document.getElementById(id).innerText;

     var integerValue = parseInt(tagValue);

     return integerValue ;
 }

// Function for Color and FontSize 
function display(id){
var col=document.getElementById(id);

col.style.color="white";

col.style.fontSize = '25px';
}
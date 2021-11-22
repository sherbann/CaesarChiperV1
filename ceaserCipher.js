// self calling function
function enDeCode(){
  let userString = document.getElementById("userMessage").value;// user input
  let encode = document.getElementById("encode");// radio button checked
  let userKey1 = document.getElementById("userKey1").value;// user key number - list
  let userKey2 = document.getElementById("userKey2").value;
  let cleanString = (userString.trim()).toLowerCase();//user input text, trim and made lowercase
  let outputMessage = [];// empty array to store decoded string
  let flag = true;// validation

  // checking which radio button was selected 
  if (encode.checked) {
    flag = true;
    }else {
    flag = false;
  } 
  // iterate through user input
  // calling function codeLetter to output coded/encoded letter
  for (let i = 0; i < cleanString.length; i++){
    outputMessage.push(codeLetter(cleanString[i], userKey1, userKey2,  flag));// return new coded letter
  }
  // add all elements of array into string
  document.getElementById("Output").value = outputMessage.join("");
}

function DeCode(){
  let userString = document.getElementById("userMessage").value;
  let decode = document.getElementById("decode");
  let userKey1 = document.getElementById("userKey1").value;
  let userKey2 = document.getElementById("userKey2").value;
  let cleanString = (userString.trim()).toLowerCase();
  let outputMessage = [];
  let flag = true;

  if (decode.checked) {
    flag = true;
  } else {
    flag = false;
  }
  // iterate through user input
  // calling function codeLetter to output coded/encoded letter
  for (let i = 0; i < cleanString.length; i++) {
    outputMessage.push(codeLetter(cleanString[i], userKey1, userKey2,  flag));// return new coded letter
  }
  // add all elements of array into string
  document.getElementById("output").value = outputMessage.join("");
}

function deCodeLetter(letter, userKey1, userKey2, flag) {
  //deal with non letter like space or number
  let letterRegEx = /[^a-z]/;

  if (letterRegEx.test(letter)) {
    return letter;// 
  } else {
    let newIndex = calculateNewIndex(letter, userKey1, userKey2, flag);// new index
    let codedLetter = convertIndexToLetter(newIndex);
    return codedLetter;// return coded letter
  }
};


function convertIndexToLetter(index){
  let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
  let letter = alphabet[index];
  return letter;
}

function convertLetterToIndex(letter){
  let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
  index = alphabet.indexOf(letter);
  return index;
}

// calculate new index using functions calculateNewIndex > convertLetterToIndex
function calculateNewIndex(letter, userKey1, userKey2, encode, decode){
  let index = Number(convertLetterToIndex(letter));

  if (encode) { 
    index = index + Number(userKey1);// shifts the index plus key number value ENCODE
    index = index + Number(userKey2);
           
  } else {
    index = index - Number(userKey1); // shifts the index minus key number value DECODE
    index = index - Number(userKey2);  
  }  
// index is < 25 on  function return 
  if (index > 25){
    index = index - 26;
  } else if (index < 0) {
    index = index + 26;
  }
  return index; // return a new index for function codeLetter
}


function codeLetter(letter, userKey1, userKey2, flag){
  //deal with non letter like space or number
  let letterRegEx = /[^a-z]/;
  
  if (letterRegEx.test(letter)){
    return letter;// 
  } else {
    let newIndex = calculateNewIndex(letter, userKey1, userKey2, flag);// new index
    let codedLetter = convertIndexToLetter(newIndex);
    return codedLetter;// return coded letter
  }
};

function deCodeLetter(letter, userKey1, userKey2, flag) {
  //deal with non letter like space or number
  let letterRegEx = /[^a-z]/;

  if (letterRegEx.test(letter)) {
    return letter;// 
  } else {
    let newIndex = calculateNewIndex(letter, userKey1, userKey2, flag);// new index
    let codedLetter = convertIndexToLetter(newIndex);
    return codedLetter;// return coded letter
  }
};

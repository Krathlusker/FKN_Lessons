let anton = {
  'bro': 0,
  'dude': 0
};

console.log(anton)

let checks = 0;

function checkBroDude (){
  if (anton['bro'] == 1 && anton['dude'] == 1) {
      document.getElementById("makkerCheck").innerHTML = "Anton er en brolicious dude"
  } else {
      document.getElementById("makkerCheck").innerHTML = "Anton er IKKE en brolicious dude"
  };
}

/* const buttonBro = document.getElementById('buttonBro');
const buttonDude = document.getElementById('buttonDude'); */

buttonBro.onclick = function(){
  if (anton.bro == 1) {
    anton.bro = 0;
    console.log(anton)
    checkBroDude()
  } else {
    anton.bro = 1;
    console.log(anton)
    checkBroDude()
  }
};

buttonDude.onclick = function(){
  if (anton.dude == 1) {
    anton.dude = 0;
    console.log(anton)
    checkBroDude()
  } else {
    anton.dude = 1;
    console.log(anton)
    checkBroDude()
  }
};

/* buttonBro.addEventListener('click', function() {
  changeBro(anton);
});

buttonDude.addEventListener('click', function() {
  changeDude(anton);
});

function changeBro(obj) {
  let objLen = Object.keys(obj).length;
  console.log("Antal keys:" + objLen);

  for (let i = 0; i < objLen; i++) {
    console.log("bro" + obj['bro'] && checks < objLen);
    if (obj['bro'] == 0) {
      obj['bro'] = 1;
      checks++;
    } else if (obj['bro'] == 1) {
      obj['bro'] = 0;
      checks--;
    }
  }

  if (checks == objLen) {
    document.getElementById("makkerCheck").innerHTML = "Anton er en brolicious dude";
  } else {
    document.getElementById("makkerCheck").innerHTML = "Anton er IKKE en brolicious dude";
  }
  console.log(anton)
}

function changeDude(obj) {
  let objLen = Object.keys(obj).length;

  console.log("Antal keys:" + objLen);

  for (let i = 0; i < objLen; i++) {
    console.log("dude" + obj['dude'] && checks < objLen);
    if (obj['dude'] == 0) {
      obj['dude'] = 1;
      checks++;
    } else if (obj['dude'] == 1) {
      obj['dude'] = 0;
      checks--
    }
  }

  if (checks == objLen) {
    document.getElementById("makkerCheck").innerHTML = "Anton er en brolicious dude";
  } else {
    document.getElementById("makkerCheck").innerHTML = "Anton er IKKE en brolicious dude";
  }
  console.log(anton)
} */

/* alert(anton.bro); */

/* function sayHi() {
    console.log("Hi");
    console.log("Bye");
}

function sum(a, b) {
    const sum = a + b;
    return a + b;
}

const value = sum(1, 2);
console.log(value);

sayHi();

if (Array.isArray(anton)) {
  console.log("bro is an array");
} else {
  console.log("bro is not an array");
}; */




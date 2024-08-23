let anton = {
  'bro': 0,
  'dude': 0
};

console.log(anton);

function checkBroDude() {
  if (anton['bro'] == 1 && anton['dude'] == 1) {
      document.getElementById("makkerCheck").innerHTML = "Anton er en brolicious dude";
  } else {
      document.getElementById("makkerCheck").innerHTML = "Anton er IKKE en brolicious dude";
  };
}

const buttonBro = document.getElementById("buttonBro");
const buttonDude = document.getElementById("buttonDude");

function flipFlop(obj, key, btn) {
  switch (obj[key]) {
    case 0:
      obj[key] = 1;
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
      checkBroDude();
      break;
    case 1:
      obj[key] = 0;
      btn.style.backgroundColor = "";
      btn.style.color = "";
      checkBroDude();
      break;
    default:
      console.log("I don't know what to tell you. I guess you broke the code.");
      break;
  }
}

buttonBro.addEventListener("click", flipFlop.bind(null, anton, Object.keys(anton)[0], buttonBro));
buttonDude.addEventListener("click", flipFlop.bind(null, anton, Object.keys(anton)[1], buttonDude));

/* buttonBro.onclick = function() {
  switch (anton.bro) {
    case 1:
      anton.bro = 0;
      console.log(anton);
      document.getElementById("buttonBro").style.backgroundColor = "";
      document.getElementById("buttonBro").style.color = "";
      checkBroDude();
      break;
    case 0:
      anton.bro = 1;
      console.log(anton);
      document.getElementById("buttonBro").style.backgroundColor = "green";
      document.getElementById("buttonBro").style.color = "white";
      checkBroDude();
      break;
    default:
      console.log("I don't know what to tell you. I guess you broke the code.");
      break;
  }
}; */

/* buttonBro.onclick = flipFlop(anton, anton.bro, buttonBro)
buttonDude.onclick = flipFlop(anton, anton.dude, buttonDude) */


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




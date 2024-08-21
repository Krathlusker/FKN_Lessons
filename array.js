

let anton = ["bro","dude"]

if (anton.includes("bro") && anton.includes("dude")) {
    document.getElementById("makkerCheck").innerHTML += "Anton er en brolicious dude"
} else {
    document.getElementById("makkerCheck").innerHTML += "Anton er IKKE en brolicious dude"
}




function sayHi() {
    console.log("Hi")
    console.log("Bye")
}

function sum(a, b) {
    const sum = a + b
    return a + b
}

const value = sum(1, 2)
console.log(value)

sayHi()

if (Array.isArray(anton)) {
  console.log("bro is an array");
} else {
  console.log("bro is not an array");
}




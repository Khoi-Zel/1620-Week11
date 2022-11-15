// function greet(user){                 # Method 1 to call a function
//     console.log("Hello",user,"!");
//     console.log("Hello" +  user);
//     console.log('Hello ${user}');
// }

// greet("Khôi") 

// const greet = function (user){        # Method 2 to call a function
//     console.log("Hello" +  user);
//     console.log('Hello ${user}');
// }

// greet("Khôi")


// const greet = (user,time = "day") => {   // # Method 3 to call a function
//     // console.log("Hello" +  user);
//     console.log(`Good ${time} ${user}`);
// }

// greet("Khôi", "night")

let r = prompt("Enter a radius.")
console.log(r)

function circleArea (radius){
    const radiusP = document.querySelector("#radius"); 
    const resultP = document.querySelector("#result");
    radiusP.textContent = r
    let calculatedArea = Math.PI * radius * radius;
    resultP.textContent = calculatedArea.toFixed(2);
    return calculatedArea;
}

let area = circleArea(r).toFixed(2);

alert(`The area of a circle with radius ${r} is ${area}`)
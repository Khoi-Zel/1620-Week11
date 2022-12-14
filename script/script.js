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

// let r = prompt("Enter a radius.")
// console.log(r)

// function circleArea (radius){
//     const radiusP = document.querySelector("#radius"); 
//     const resultP = document.querySelector("#result");
//     radiusP.textContent = r
//     let calculatedArea = Math.PI * radius * radius;
//     resultP.textContent = calculatedArea.toFixed(2);
//     return calculatedArea;
// }

// let area = circleArea(r).toFixed(2);

// alert(`The area of a circle with radius ${r} is ${area}`);

const unorderedList = document.querySelector(".shopping");

function populateList(list){
    for (let i = 0; i <list.length; i++){
        let listItems = document.createElement("li");
        listItems.textContent = list[i];
        unorderedList.appendChild(listItems);
        console.log(listItems);
    }
}

const shoppingList = ["cheese","bread","green pepper"];
populateList(shoppingList);

function changeListStyle(newlist){
    unorderedList.classList.remove("circleList");
    unorderedList.classList.add("squareList");
}

changeListStyle(shoppingList);

const listItems = document.querySelectorAll(".shopping li")

function findGreen(newestList){
    for (let i = 0; i < listItems.length; i++){
        if(listItems[i].textContent.includes("green")){
            listItems[i].classList.add("green");
        }
    }
}

findGreen(shoppingList);
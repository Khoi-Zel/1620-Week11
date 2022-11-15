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


const greet = (user,time = "day") => {   // # Method 3 to call a function
    // console.log("Hello" +  user);
    console.log(`Good ${time} ${user}`);
}

greet("Khôi", "night")

fruits.pop(2)

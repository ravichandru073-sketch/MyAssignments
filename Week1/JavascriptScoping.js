
let genderType = "female";

function printGender() {
  
    let color = "brown";

    console.log("--- Inside Function (Before If-Block) ---");
    console.log("Function-scoped color:", color);


    if (genderType.startsWith("female")) {
        

        var age = 30; 
        

        let color = "pink"; 
        
        console.log("\n--- Inside If-Block ---");
        console.log("Block-scoped color:", color);
    }


    console.log("\n--- Outside If-Block (Still in Function) ---");
    console.log("Accessing var age outside block:", age);
    console.log("Function-scoped color:", color);
}


printGender();
console.log("\n--- Global Scope ---");
console.log("Global genderType:", genderType);


console.log("\n--- Testing with genderType = 'male' ---");
genderType = "male";
printGender();
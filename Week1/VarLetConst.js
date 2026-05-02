const browserName = "Chrome";


function getBrowserName() {
    
 
    if (browserName === "Chrome") {
     
        var browserNameLocal = "Firefox"; 
        console.log("Inside the block: " + browserNameLocal);
    }


    console.log("Outside the block (using var): " + browserNameLocal);
}


getBrowserName();




const browserName1 = "Chrome";

function getBrowserName1() {
    
    if (browserName1 === "Chrome") {
      
        let browserNameLocal = "Safari"; 
        console.log("Inside the block: " + browserNameLocal);
    }



}

getBrowserName1();
const angles = document.querySelectorAll(".input-angle");
const outputBtn = document.querySelector("#output-btn");
const output = document.querySelector("#output");

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles();
    if(sumOfAngles === 180){
        output.innerText = "Yay! This forms a triangle";
    }else{
        output.innerText = "Sorry! It do not form a triangle";
    }
}

function calculateSumOfAngles(){
    let sum = 0;
    sum=Number(angles[0].value)+Number(angles[1].value)+Number(angles[2].value);
    return sum;
}

outputBtn.addEventListener('click',isTriangle);
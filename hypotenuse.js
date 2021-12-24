const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#hypotenuse-btn");
const showOutput = document.querySelector("#showOutput");

function calculateSquares(a,b){
    const c = a*a + b*b;
    return c;
}

function calculateHypotenuse(){
    const hypotenuse = calculateSquares(Number(sides[0].value),Number(sides[1].value));
    
    showOutput.innerText = "The hypotenuse of the triangle is "+Math.sqrt(hypotenuse);
}

calculateBtn.addEventListener("click",calculateHypotenuse);
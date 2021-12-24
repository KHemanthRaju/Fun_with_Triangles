const inputs = document.querySelectorAll(".area-input");
const checkBtn = document.querySelector("#calculate-area");
const output = document.querySelector("#area-output");

function calculateArea(){
    let area = triangleArea(Number(inputs[0].value),Number(inputs[1].value));
    output.innerText = "Area of the Triangle is "+area;
}

function triangleArea(b,h){
    let area = 0.5 * b * h;
    return area;
}

checkBtn.addEventListener("click",calculateArea);
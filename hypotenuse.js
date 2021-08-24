const sides = document.querySelectorAll(".input");
const checkHypotenuse= document.querySelector("#check-btn1");
const Output= document.querySelector("#output");

function sumOfSquares(base,height){
    return (base*base+height*height);
}


function calculateHypotenuse(){
    const sum = sumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const hypotenuse= Math.sqrt(sum);
    Output.innerText= "The length of the hypotenuse is "+ hypotenuse;
}


checkHypotenuse.addEventListener("click", calculateHypotenuse);
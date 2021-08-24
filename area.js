const sides = document.querySelectorAll(".input");
const checkArea = document.querySelector("#check-btn");
const Output = document.querySelector("#output");

function calculateArea()
{
    const area= 0.5*Number(sides[0].value)*Number(sides[1].value);
    Output.innerText="The area of the triangle is "+area;
}

checkArea.addEventListener("click",calculateArea);
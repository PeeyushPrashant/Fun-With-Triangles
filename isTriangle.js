const inputAngle = document.querySelectorAll("input");
const checkTriangle = document.querySelector("#check-btn");
const output = document.querySelector("#output");


function sumOfAngles(input1,input2,input3){
   return (input1+input2+input3);
}

function isTriangleOrNot(){
    
    
    const sum= sumOfAngles(Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value));
    
    if(sum===180)
      output.innerText= "Yup, the angles form a triangle";
    else
       output.innerText= "Oh no, the angles doesn't form a triangle.";
}

checkTriangle.addEventListener("click",isTriangleOrNot);

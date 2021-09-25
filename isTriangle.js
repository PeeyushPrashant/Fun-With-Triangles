const inputAngle = document.querySelectorAll("input");
const checkTriangle = document.querySelector("#check-btn");
const output = document.querySelector("#output");


function sumOfAngles(input1,input2,input3){
   return (input1+input2+input3);
}

function isTriangleOrNot(){

   const input1= Number(inputAngle[0].value);
   const input2=Number(inputAngle[1].value);
   const input3=Number(inputAngle[2].value);

   if(input1 && input2 && input3)
   {
      if(input1>0 && input2>0 && input3>0)
      {
         const sum= sumOfAngles(input1,input2,input3);
    
    if(sum===180)
      output.innerText= "Yup, the angles form a triangle";
    else
       output.innerText= "Oh no, the angles doesn't form a triangle.";
      }
      else
        output.innerText="All the input values should be positive";
   } 
    else
     alert("Please enter all the feilds");
}

checkTriangle.addEventListener("click",isTriangleOrNot);

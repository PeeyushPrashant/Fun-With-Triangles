const sides = document.querySelectorAll(".input");
const checkHypotenuse= document.querySelector("#check-btn1");
const Output= document.querySelector("#output");

function sumOfSquares(base,height){
    return (base*base+height*height);
}


function calculateHypotenuse(){
    const base=Number(sides[0].value);
    const height=Number(sides[1].value);
    if(base && height)
    {
        if(base>0 && height>0)
        {
            const sum = sumOfSquares(base,height);
            const hypotenuse= Math.sqrt(sum);
            Output.innerText= "The length of the hypotenuse is "+ hypotenuse;
        }
        else
          Output.innerText="Please enter positive values."
    }
    else
      alert("Enter both the feilds.");
    
}


checkHypotenuse.addEventListener("click", calculateHypotenuse);
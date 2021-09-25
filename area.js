const sides = document.querySelectorAll(".input");
const checkArea = document.querySelector("#check-btn");
const Output = document.querySelector("#output");

function calculateArea()
{
    const base=Number(sides[0].value);
    const height=Number(sides[1].value);
    if(base && height)
    {
        if(base>0 && height>0)
        {
            const area= 0.5*base*height;
            Output.innerText="The area of the triangle is "+area;
        }
        else{
            Output.innerText="Both the input values should be positive";
        }
    }
    else{
        alert("Please enter both the feilds");
    }
}

checkArea.addEventListener("click",calculateArea);
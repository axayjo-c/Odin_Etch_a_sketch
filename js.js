let grid_size ;
function play()
{
    grid_size = parseInt(prompt("Enter Grid Size"));
    console.log(grid_size);
let content = document.querySelector(".content");
content.innerHTML = '';
    let i = 0 ,j = 0 ;
    while(i<grid_size)
        {   let ver = document.createElement("div");
            ver.style.cssText =` display : flex ; flex : 1 ; gap : 5px; `;
            ver.style.flexDirection = "row";
            console.log("ver created");
            while(j<grid_size)
                {
                    let hor = document.createElement("div");
                    hor.style.cssText = `flex : 1; border : 1px solid hsl(123, 88%, 53%)`;
                    hor.style.alignSelf = "stretch";
                    hor.style.borderRadius = "5px"
                   

                    hor.addEventListener("mouseover", () =>{
                        console.log("work");
                        hor.style.backgroundColor = "blue";
                        hor.setAttribute("id","grid");
                    });
                    
                    ver.appendChild(hor);
                    j++;
                    console.log("hor created")
                }
            content.appendChild(ver);

            i++;
            j = 0;
        }
        document.querySelector(".erase").addEventListener("click",() => {
            let grid =  document.querySelectorAll("#grid");
            for(let i = 0 ; i<grid.length ; i++)
                {
                    grid[i].style.backgroundColor = "";
                    console.log("color");
                    grid[i].removeAttribute("id");
                }
        });






}
document.querySelector(".here").addEventListener("click" ,() => play());

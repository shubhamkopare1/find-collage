let url = "http://universities.hipolabs.com/search?name=";

async function findCollage(country) {
  try {
    let fetchs = await axios.get(url + country);
    return fetchs.data;
  } catch (error) {
    console.log(error);
  }
}
// findCollage("india")
let main = document.querySelector(".main");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let ul = document.createElement("ul");
  let colleges = await findCollage(input.value);
  
 
  for (const col of colleges) {
    let li = document.createElement("li");
    
    li.innerHTML = `${col.name}`;
    console.log(col.name);
   
    ul.appendChild(li);
  } 
  main.appendChild(ul);
  input.value=""
  input.addEventListener("input",()=>{
    if (ul) {
         main.removeChild(ul)
        ul=null
    }

})

});

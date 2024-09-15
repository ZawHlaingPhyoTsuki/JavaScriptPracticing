// selecter
const root = document.querySelector("#root");
root.classList.add("p-5")


//<h1>I'm title</h1>
// create h1 element with js
const heading = document.createElement("h1");
// console.log(heading);
heading.innerText = "I'm heading";

// adding classes to heading
heading.className = ("font-bold", "text-3xl", "font-serif");
heading.classList.add("font-bold", "text-3xl", "bg-red", "mb-4");

// adding title attribute to heading
heading.title = "This is heading"
heading.id = "heading";
heading.setAttribute("zhp", "tsukuyomi") //custom attribute
// console.log(heading);

const imgDiv = document.createElement("div") //not createAttribute
imgDiv.classList.add("flex","flex-col", "gap-3", "mb-5")
console.log(imgDiv);

const bgImg = document.createElement("img")
bgImg.src = "./imagesForCoding/p1.jpeg";
bgImg.classList.add("h-32")

const bgImg1 = new Image() // image() constructor web api
bgImg1.src = "./imagesForCoding/p2.jpeg";
bgImg1.classList.add("h-32");
imgDiv.append(bgImg)
imgDiv.append(bgImg1)
 
const para = document.createElement("p")
para.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui veritatis dicta et corporis reiciendis, laboriosam enim error corrupti officiis earum quibusdam magni eos veniam debitis saepe, eaque pariatur repellat?";


const listGroup = document.createElement("ul")

const creatList = (text) => {
    const li = document.createElement("li")
    li.classList.add("border", "mb-2", "p2")
    li.innerText = text
      return li
}

listGroup.append(creatList("apple"))
listGroup.append(creatList("orange"));
listGroup.prepend(creatList("mango"));
listGroup.prepend(creatList("banana"));





// add heading element to main
root.append(heading); // can still use before
root.append(imgDiv);
imgDiv.after(para)
para.before(listGroup)

// heading.remove() 
listGroup.removeChild(listGroup.children[0]) //banana

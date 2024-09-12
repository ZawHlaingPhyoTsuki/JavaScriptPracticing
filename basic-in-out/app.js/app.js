// // const age = window.prompt("How old are you?");

// // const birthYear = 2024 - parseInt(age);

// // window.alert(`You were born in ${birthYear}`);

// //////////////

// // const answer = window.confirm("Are you finish dinner ?")
// // console.log(answer ? "Yes, I finished" : "No, not yet");

// //select an element


// // const heading = document.getElementById("heading")
// // const textInput = document.getElementById("textInput");
// // const listGroup = document.getElementById("listGroup")
// // const btn = document.getElementById("btn");

// // console.log(heading);
// // console.log(heading.innerHTML);
// // console.log(heading.innerText);

// // console.log(listGroup);
// // console.log(listGroup.innerHTML); // not the same
// // console.log(listGroup.innerText); // not the same

// // console.log(textInput);
// // console.log(btn);
// //------------------------------------
// // small software

// // 1. select an element
// const heading = document.getElementById("heading");
// const textInput = document.getElementById("textInput");
// const listGroup = document.getElementById("listGroup");
// const btn = document.getElementById("btn");

// ///// heading.innerText = textInput.value 

// // 2. set
// function changeTitle() {
//     heading.innerText = textInput.value;

// // 3. clear
//     textInput.value = '';
// }

// // 4. event listen
// // btn.onclick = changeTitle; // no parenthesis  !!!!!
// // btn.addEventListener("click", changeTitle); // another method
// // another method is adding attribute to html tag (onclick = "changeTitle") // but must have ()

// //------------------------------------

//Day 39

const heading = document.querySelector("#heading")
const btn = document.querySelector("#btn")
const headingLarger = document.querySelector("#headingLarger")
const headingSmaller = document.querySelector("#headingSmaller");

btn.onclick = () => {
    heading.style.color = "green"
    heading.style.backgroundColor = "gray"
}

headingLarger.onclick = () => {
    const current = parseInt(heading.style.fontSize)
    heading.style.fontSize = `${current + 5}px`
}

headingSmaller.onclick = () => {
    heading.style.fontSize = `${parseInt(heading.style.fontSize) - 5}px`
}

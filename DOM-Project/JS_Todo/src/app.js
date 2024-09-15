// selectors

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");

// process
const addList = () => {
  // console.log(taskInput.value);
  // mount list to list group
  listGroup.append(createNewList(taskInput.value));
  taskInput.value = null;
  updateTaskTotal();
};

const updateTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

const updateDoneTaskTotal = () => {
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

//create new list
const createNewList = (currentTask) => {
  const list = document.createElement("div");
  list.classList.add("list");
  // console.log(list);
  list.innerHTML = `
    <div class="flex justify-between p-3 border border-stone-950 mb-3">
              <div class="flex items-center gap-3">
                <input type="checkbox" class="list-done-check accent-stone-950" />
                <p class="font-mono list-text">${currentTask}</p>
              </div>
              <div class="control">
                <button class="border border-stone-950 p-2 list-edit-btn disabled:opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button class="border border-stone-950 p-2 list-del-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
    `; // lazy method, but incorrect

  const listDoneCheck = list.querySelector(".list-done-check");
  const listText = list.querySelector(".list-text");
  const listEditBtn = list.querySelector(".list-edit-btn");

  // check
  listDoneCheck.addEventListener("change", () => {
    updateDoneTaskTotal();
    listText.classList.toggle("line-through");
    list.classList.toggle("opacity-20");
    list.classList.toggle("scale-90");
    list.classList.add("duration-200");
    //   listEditBtn.setAttribute("disabled", true)
    if (listDoneCheck.checked) {
      listEditBtn.disabled = true;
    } else {
        listEditBtn.disabled = false
    }
  });

  // del btn
  const listDelBtn = list.querySelector(".list-del-btn");

  listDelBtn.addEventListener("click", () => {
    if (window.confirm("Are u sure?")) {
      list.remove();
    }
  });

  // edit btn

  listEditBtn.addEventListener("click", () => {
    listEditBtn.disabled = false;
    listDoneCheck.disabled = false;
    const currentTask = listText.innerText;
    const newTaskInput = document.createElement("input");
    newTaskInput.className =
      "border border-stone-950 font-mono px-2 py-1 focus-visible:outline-none";
    newTaskInput.value = currentTask;
    listText.after(newTaskInput);
    newTaskInput.focus();
    listText.classList.add("hidden");

    // change or blur
    newTaskInput.addEventListener("blur", () => {
      listEditBtn.disabled = false;
      listDoneCheck.disabled = false;
      //   console.log("object");
      listText.innerText = newTaskInput.value;
      listText.classList.remove("hidden");
      newTaskInput.remove();
    });
  });

  return list;
};

// event
addTaskBtn.addEventListener("click", addList);

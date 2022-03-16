const alert = document.querySelector("#alert");
const form = document.querySelector("form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");
const listItem = document.querySelector(".list-item");
const list = document.querySelector(".list");

let editEle;
let editFlag = false;
let editId = "";

form.addEventListener("submit", addItem);

clear.addEventListener("click", clearItems);

//functions

function addItem(e) {
  e.preventDefault();
  const values = input.value;
  const id = new Date().getTime().toString();
  console.log(values);

  if (values && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("list-item");

    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p>${values}</p>
    <div class="action-btn">
        <button class="edit">edit</button>
        <button class="delete">delete</button>
    </div>`;

    const editbtn = element.querySelector(".edit");
    const deletebtn = element.querySelector(".delete");

    editbtn.addEventListener("click", editItem);
    deletebtn.addEventListener("click", deleteItem);
    list.appendChild(element);

    displayAlert("added item", "green");

    addToLocalStorage(values, id);

    setToDefault();
    //--
  } else if (values && editFlag) {
    editEle.innerHTML = values;
    displayAlert("updated", "green");
    // editLocal(editId, values);
    setToDefault();
  } else {
    displayAlert("please enter the value", "red");
  }
}

//display alert
function displayAlert(text, color) {
  alert.textContent = text;
  alert.style.color = color;
  //remove
  setTimeout(() => {
    alert.textContent = "";
    alert.style.color = "black";
  }, 3000);
}

function editItem(e) {
  const ele = e.currentTarget.parentElement.parentElement;
  editEle = e.currentTarget.parentElement.previousElementSibling;

  input.value = editEle.innerHTML;
  editFlag = true;
  editId = ele.dataset.id;
  submit.textContent = "Edit";
}

function deleteItem(e) {
  const ele = e.currentTarget.parentElement.parentElement;
  const id = ele.dataset.id;
  list.removeChild(ele);

  displayAlert("item deleted", "green");
  setToDefault();
  //   removeFromLocal(id)
}

function setToDefault() {
  input.value = "";
  editFlag = false;
  editId = "";
  submit.innerText = "submit";
  input.focus();
}

function clearItems() {
  const items = document.querySelectorAll(".list-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  setToDefault();
  localStorage.removeItem("list");
  displayAlert("items cleared", "green");
}

// function addToLocalStorage(value, id) {
//   const grocery = { id, value };
//   let items =
// }

// function removeFromLocal(id){}
// function editLocal(id,value){}

let add = document.querySelector("#add_btn")
let input = document.querySelector("#input")
let parentList = document.querySelector("#parentList")


add.addEventListener("click", additem)

function additem() {

    //  remove text if add data

    if (parentList.children[0].classList == "emptymsg") {
        parentList.children[0].remove()
    }

    // getting input values
    let currentInput = input.value
    console.log(currentInput)


    //  crating new list element and defining the input values
    let newLi = document.createElement("li")
        // newLi.classList.add("list-group-item d-flex justify-content-between")
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = ` <h3>${currentInput}</h3>
    <div>
        <button class="btn btn-outline-success mlr-5" onclick="edititem(this)">Edit</button>
        <button class="btn btn-outline-danger" onclick="removeitem(this)">Delete</button>
    </div> `


    //  creating the parent element that the input store in the chile element of this tag

    parentList.appendChild(newLi)



}


// deleting an element

function removeitem(e) {

    let delete_item = e.parentElement.parentElement.remove()
    console.log(delete_item)


    // show text if no data

    if (parentList.children.length <= 0) {
        let info = document.createElement("p")
        info.classList.add("emptymsg")
        info.textContent = "No data found"
        parentList.appendChild(info)

    }
}


function edititem(e) {
    if (e.innerHTML == "Done") {
        e.innerHTML = "Edit"
        let edit_item = e.parentElement.previousElementSibling.value
        let text_heading = document.createElement("h3")
        text_heading.innerHTML = edit_item
        e.parentElement.parentElement.replaceChild(text_heading, e.parentElement.previousElementSibling)

    } else {
        e.innerHTML = "Done"
        let edit_item = e.parentElement.previousElementSibling.innerHTML
        let text_input = document.createElement("input")
        text_input.type = "text"
        text_input.classList.add("form-control")
        text_input.value = edit_item

        e.parentElement.parentElement.replaceChild(text_input, e.parentElement.previousElementSibling)
    }


}
// Solution to add and delete items from the list on html.

document.addEventListener("DOMContentLoaded", function () {
    const addItemForm = document.getElementById("add-item-form");
    const newItemInput = document.getElementById("new-item");
    const itemList = document.getElementById("items");

    addItemForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const newItemText = newItemInput.value.trim();
        if (newItemText !== "") {
            const newItem = document.createElement("li");
            newItem.className = "list-group-item";
            newItem.textContent = newItemText;
            
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                itemList.removeChild(newItem);
            });

            newItem.appendChild(deleteButton);
            itemList.appendChild(newItem);
            newItemInput.value = "";
        }
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const item = button.parentElement;
            itemList.removeChild(item);
        });
    });
});
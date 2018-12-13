domBuilder.appendInputForm();
let legoBtn = document.querySelector(".lego__save");
console.log(legoBtn, "legobtn");
legoBtn.addEventListener("click", eventListeners.handleFormSubmission);

function addPerson()
{
    var firstNameElement = document.getElementById("firstNameField");
    // console.log("Adding a person: " + firstNameElement.value);
    viewController.addPerson(firstNameElement.value);
    localStorage.setItem("Username", firstNameElement.value);
}

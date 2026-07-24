function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var comments = document.getElementById("comments").value;

    if (fullName == "" || email == "" || country == "" || comments == "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("The form was submitted successfully.");
    return false;
}

function check() {

    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;

	if (password1.length < 8 || password2.length < 8) {
        document.getElementById("info2").innerHTML = "Passwords must be at least 8 characters long.";
    } 
    else {
        if (password1 === password2) {
            document.getElementById("info1").innerHTML = "Passwords match!";
        } 
        else {
            document.getElementById("info2").innerHTML = "Passwords do not match.";
        }
    }
}

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var addr = document.getElementById('addr');
var mobileno = document.getElementById('mobileno');
if (notEmpty(firstname, "First name cannot be empty")) {
    if (isAlphabet(firstname, "Please enter only letters for your Firstname")) {
        if (lengthRestriction(firstname, 6)) {
            if (isAlphabet(lastname, "Please enter only letters for your Lastname")) {
                if (emailValidator(email, "Please enter a valid email address")) {
                    if (lengthRestriction(pass, 6)) {
                        if (isAlphanumeric(pass, "Please enter Numbers and Letters Only for password")) {
                            if (notEmpty(addr, "Please enter the address")) {
                                if (isNumeric(mobileno, "Please enter a valid mobileno")) {
                                    if (lengthRestriction1(mobileno, 10, 10)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
return false;

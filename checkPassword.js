function checkPassword(password){
    var regularExpress1 = /[A-Z]/;
    var regularExpress2 = /\d/;
    var regularExpress3 = /\W/;

    return (regularExpress1.test(password) &&
        regularExpress2.test(password) &&
        regularExpress3.test(password) &&
        password.length >=12 &&
        password.length <=128
    );
}
function checkEmail(email){
    var regularExpress = /^\w+@\w+\.\w+$/;

    return (regularExpress.test(email));
}
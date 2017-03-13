function checkPhoneNumber(phoneNumber){
    var regularExpress1 = /^[+]\d{2} \d{3} \d{4} \d{4}$/;
    var regularExpress2 = /^[+][(]\d{2}[)] \d{3}-\d{4}-\d{4}$/;
    var regularExpress3 = /^[+]\d{13}$/;
    var regularExpress4 = /^\d{11}$/;

    return (regularExpress1.test(phoneNumber) ||
    regularExpress2.test(phoneNumber) ||
    regularExpress3.test(phoneNumber) ||
    regularExpress4.test(phoneNumber));
}
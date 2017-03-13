function checkPersonName(personName){
    let regularExpress = /^\w{8,32}$/;

    return (personName === undefined) ? false : (regularExpress.test(personName));
}
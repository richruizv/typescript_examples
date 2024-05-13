function printID(id) {
    console.log("your ID is ".concat(id));
}
;
printID(101);
printID('101');
printID({ id: '101' }); // error!

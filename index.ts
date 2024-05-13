function printID(id: number | string) {
    console.log(`your ID is ${id}`)
};

printID(101)
printID('101')
printID({id: '101'}) // error!


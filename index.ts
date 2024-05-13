function welcomePeople(x: string | string[]) {
    if( Array.isArray(x)){
        console.log(`welcome ${x.join(' and ')}`)
    } else
    { console.log(`welcome ${x}`)}
};

welcomePeople(['Richard', 'Liss'])
welcomePeople('Peter')
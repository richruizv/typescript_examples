function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("welcome ".concat(x.join(' and ')));
    }
    else {
        console.log("welcome ".concat(x));
    }
}
;
welcomePeople(['Richard', 'Liss']);
welcomePeople('Peter');

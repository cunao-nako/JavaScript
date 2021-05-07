document.querySelector('body').setAttribute('style', 'background-color: black');
poopa: for (let i=0; i<11; i++) {
    loopa: while (true) {
        if (i > 5) break;
        console.log('Loopa iteriruet i =', i);
        i++;
    }
    console.log('Poopa iteriruet i za loopu =', i);
}
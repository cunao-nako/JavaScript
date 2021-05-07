// let request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('получение данных');
//         let good = {
//             title: 'telephone',
//             price: '100',
//             currency: 'usd',
//         };
//         resolve(good);
//     }, 1500);
// }).then(good => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('обработка данных');
//             good.isSold = true;
//             resolve(good);
//             a = x;
//         }, 1500);
//     }).then(good => {
//         console.log('данные обработаны');
//     }).catch(() => {
//         console.log('ошибка');
//         }).finally(() => {
//             console.log('finally');
//     });
// });

let test = time => {
    return new Promise();
}
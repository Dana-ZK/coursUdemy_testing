'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else  {
            i--;
        } }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert ('Вы классический зритель')
        } else if (personalMovieDB.count >=30){
            alert('Вы киноман')
        } else {
            alert('Произошла ошибка')
        }
    },
    showDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggelVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            let gener = prompt(`Ваш любимый жанр под номером ${i}?`)
            if (gener === '' || gener == null) {
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i-1]= gener;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`)
        });
    },
    
};





//const test = 'Просмотрено довольно мало фильмов'
//console.log(test.indexOf('фильм'));
// console.log(test.slice(12, 23));


// const arr = [1, 2, 13, 4, 45, 6, 78, 0];
// arr.sort()
// console.log(arr)
// arr.sort(compare)
// console.log(arr)

// function compare (a, b) {
//     return a - b
// }
// // console.log(arr)
// // arr.pop()
// // console.log(arr)
// // arr.push(32)
// // console.log(arr)

// // for (let value of arr) {
// //     console.log(value)
// // };
// arr.forEach(function(item,index,arr) {
//     console.log(`${index}: ${item} in array of ${ arr }`)
// });


// //const str = prompt('', '')
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));

// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy
// }

// const obj = {
//     a: 2,
//     b: 4,
//     c: {
//         x: 3,
//         y:5
//     }
// }

// const newObj = copy(obj);
// newObj.a = 6;
// console.log(newObj);
// console.log(obj);

// const add = {
//     d: 34,
//     e: 42
// }

// const newAdd = Object.assign(obj, add);

// console.log(newAdd);
// newAdd.d = 21;
// console.log(newAdd);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// console.log(newArr);
// newArr[2] = 3
// console.log(newArr);
// console.log(oldArr);

// const name = ['Serj', 'Dana', 'Maks'],
//     profi = ['vp', 'nw', 'cf'],
//     doing = [...name, ...profi, 'noth', 'work'];

// console.log(doing)
    

// const a = {
//     1: 'one',
//     2: 'two'
// };

// const b = {...a};
// console.log(b)
// a[1] = 'three';
// console.log(a)
// console.log(b)


// const arr = [1, 2, 3, 4]
// console.log(Array.isArray(arr))

// const dup = [1, 2, 3, 4, 5,]
// const dupl = dup.concat(dup)
// console.log(dupl)


// function sum(n) {
//     console.log(n)
//     return function (a) {
//         return  sum(a + n)
//     }
// }

// sum(4)
// console.log('----')
// sum(4)(11)(20)

// const obj1 = {
//     foo: 'foo',
//     bar: 'bar'
// }
// const obj2 = {
//     bar: 'foo',
//     baz: 'baz'
// }

// const mergeObj = (obj1, obj2) => {
//     let a = Object.keys(obj1);
//     let b = Object.keys(obj2);
//     for (let i = 0; i < a.length; i++) {
//         let element = a[i];
//         for (let j = 0; j < b.length; j++) {
//             let element2 = b[j];
//             if (element === element2) {
//                 obj1[element] = obj2[element2]
//             }
//         }
        
//     }
//     console.log(obj1);
// }
// mergeObj({ foo: 'foo', bar: 'bar' },
//     { bar: 'foo', baz: 'baz' })


// let arr = [1, 2, 3, 4, 5, 6];

// let result1 = arr.find(el => el % 2); 
// console.log(result1);
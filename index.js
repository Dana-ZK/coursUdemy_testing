// let number = 5;
// const anotherNumber = 2;

// number = 12;
// console.log(number);


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false,
};


// const questions = {
//     film: prompt('Один из последних просмотренных фильмов?', ''),
//     rang: prompt('На сколько оцените его?', ''),
// }

// personalMovieDB.movies = questions;

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
      
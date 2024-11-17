// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr =
    [-5,
        100,
        'commit',
        'push',
        true,
        false,
        null,
        undefined,
        [5, 10, 'car', 'bike'],
        {
            id: 0,
            firstName: 'Vlad',
            lastName: 'Ostafiychuk',
            age: 29,
            status: true
        },];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Witcher. The last wish',
    pageCount: 282,
    genre: "Dark fantasy"
}
let book2 = {
    title: 'Robinson Crusoe',
    pageCount: 392,
    genre: "Adventure"
};
let book3 = {
    title: 'The Hunger Games',
    pageCount: 384,
    genre: "Dystopian"
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let favouriteBook1 =
    {
        title: 'The Witcher. The last wish',
        pageCount: 282,
        genre: "Dark fantasy",
        authors: [
            {
                name: 'Andrzej Sapkowski',
                age: 74
            }
        ]
    };
let favouriteBook2 = {
    title: 'Robinson Crusoe',
    pageCount: 392,
    genre: "Adventure",
    authors: [
        {
            name: 'Daniel Defoe',
            age: 74
        }
    ]
};
let favouriteBook3 =
    {
        title: 'The Hunger Games',
        pageCount: 384,
        genre: "Dystopian",
        authors: [
            {
                name: 'Suzanne Collins',
                age: 74
            }
        ]
    };

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let users = [
    {
        name: 'Vlad',
        age: 28,
        password: "vlad28"
    },
    {
        name: 'Max',
        age: 25,
        password: "12345678"
    },
    {
        name: 'Dima',
        age: 30,
        password: "qwerty"
    },
    {
        name: 'Anna',
        age: 27,
        password: "01345"
    },
    {
        name: 'Olena',
        age: 35,
        password: "olena12"
    },
    {
        name: 'Oleg',
        age: 15,
        password: "oleg1"
    },
    {
        name: 'Roman',
        age: 19,
        password: "roma2000"
    },
    {
        name: 'Vova',
        age: 20,
        password: "vova10"
    },
    {
        name: 'Diana',
        age: 22,
        password: "dia10na"
    },
    {
        name: 'Misha',
        age: 30,
        password: "mishaqwerty"
    },
];

let user1 = users[0];
console.log(user1.password);
let user2 = users[1];
console.log(user2.password);
let user3 = users[2];
console.log(user3.password);
let user4 = users[3];
console.log(user4.password);
let user5 = users[4];
console.log(user5.password);
let user6 = users[5];
console.log(user6.password);
let user7 = users[6];
console.log(user7.password);
let user8 = users[7];
console.log(user8.password);
let user9 = users[8];
console.log(user9.password);
let user10 = users[9];
console.log(user10.password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weekTemperatures = [
    {
        day: 'Monday',
        temperatures: {
            morning: 4,
            afternoon: 15,
            evening: 7
        }
    },
    {
        day: 'Tuesday',
        temperatures: {
            morning: 6,
            afternoon: 17,
            evening: 10
        }
    },
    {
        day: 'Wednesday',
        temperatures: {
            morning: 5,
            afternoon: 14,
            evening: 8
        }
    },
    {
        day: 'Thursday',
        temperatures: {
            morning: 7,
            afternoon: 18,
            evening: 12
        }
    },
    {
        day: 'Friday',
        temperatures: {
            morning: 8,
            afternoon: 19,
            evening: 11
        }
    },
    {
        day: 'Saturday',
        temperatures: {
            morning: 9,
            afternoon: 20,
            evening: 13
        }
    },
    {
        day: 'Sunday',
        temperatures: {
            morning: 10,
            afternoon: 22,
            evening: 14
        }
    }
];

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть довільне числове значення');

if (x !== 0) {
    console.log('Вірно!');
} else {
    console.log('Невірно!');
}






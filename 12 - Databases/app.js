const sqlite = require("sqlite3");

const db = new sqlite.Database('./database.db');

// db.serialize(() => {
//     db.run(createStreetTable())
//         .run(addStreetsIntoTable())
//         .run(createPersonTable())
//         .run(addPersonIntoTable())
//         .close()
// })
//
// function  createStreetTable() {
//     return 'CREATE TABLE Streets (StreetID INTEGER PRIMARY KEY AUTOINCREMENT , streetName VARCHAR (50));'
// }
//
// function addStreetsIntoTable() {
//     return 'INSERT INTO Streets (streetName) ' +
//         'VALUES ("Правды"),' +
//         '("Неравды"),' +
//         '("Садовая"),' +
//         '("Несадовая"),' +
//         '("Звенигородская"),' +
//         '("Маршала Рвбалко"),' +
//         '("Дальнеповоротная"),' +
//         '("Механозаводская"),' +
//         '("Северная"),' +
//         '("Центральная"),' +
//         '("Владимирская"),' +
//         '("Невладимирская"),' +
//         '("Южная"),' +
//         '("Кривая"),' +
//         '("Плюжная")';
// }
//
// function  createPersonTable() {
//     return 'CREATE TABLE People (PersonId INTEGER PRIMARY KEY AUTOINCREMENT, PersonFirstName VARCHAR (50), PersonLastName VARCHAR (50), PersonAge VARCHAR (3), Id_Street INTEGER, FOREIGN KEY (Id_Street) REFERENCES Streets (StreetID));'
// }
//
// function addPersonIntoTable() {
//     return 'INSERT INTO People (PersonFirstName, PersonLastName, PersonAge, Id_Street)' +
//         'VALUES ("Борис", "Нребенщиков", 28, 1),' +
//         '("Семён", "Слепаков", 82, 5),' +
//         '("Николай", "Первый", 32, 1),' +
//         '("Йожик", "Втумане", 72, 2),' +
//         '("Константин", "Константин", 1, Null),' +
//         '("Нина", "Иванова", 35, 3),' +
//         '("Аркадий", "Райкин", 27, 4),' +
//         '("Йетти", "Илинет", 41, 5),' +
//         '("Ирина", "Пугачева", 46, Null),' +
//         '("Августина", "Поигралова", 16, 1),' +
//         '("Андрей", "Серый", 40, 7),' +
//         '("Зина", "Пиванова", 35, 3),' +
//         '("Акакий", "Райкин", 27, 4),' +
//         '("Йетти", "Илинет", 41, 5),' +
//         '("Ирина", "Пугачева", 46, Null),' +
//         '("Августина", "Поигралова", 16, 1),' +
//         '("Андрей", "Серый", 40, 7)';
// }

init(process.argv[2])



function getAllPersons() {
    db.each('SELECT COUNT(1) AS count FROM People', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getAveragePersonsAge() {
    db.each('SELECT AVG(PersonAge) FROM People', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getPersonsLastNames() {
    db.each('SELECT DISTINCT PersonLastName FROM People ORDER BY PersonLastName', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getPersonsLastNamesWithRepeats() {
    db.each('SELECT PersonLastName, COUNT(*) FROM People GROUP BY PersonLastName', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getPersonsBLastNames() {
    db.each('SELECT PersonLastName FROM People WHERE PersonLastName LIKE "_%б%_"', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getBumNames() {
    db.each('SELECT * FROM People WHERE Id_Street IS NULL', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getTeenagersNames() {
    db.each('SELECT People.* FROM People JOIN Streets ON People.Id_Street = Streets.StreetID WHERE Streets.streetName ="Правды" AND People.PersonAge < 18', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getStreetsListABC() {
    db.each('SELECT Streets.streetId, Streets.streetName, COUNT(People.personID) FROM Streets JOIN People ON Streets.streetId = People.Id_Street GROUP BY Streets.streetId, Streets.streetName', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getStreetsListOfSix() {
    db.each('SELECT * FROM Streets WHERE LENGTH(streetName) = 6', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function getStreetsListWithTreePersons() {
    db.each('SELECT Streets.StreetID, Streets.streetName FROM Streets JOIN People ON Streets.StreetID = People.Id_Street GROUP BY Streets.StreetID, Streets.streetName HAVING COUNT(People.PersonId) < 3', (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

function init(arg) {
    switch (arg) {
        case '1':
            getAllPersons();
            break;
        case '2':
            getAveragePersonsAge();
            break;
        case '3':
            getPersonsLastNames();
            break;
        case '4':
            getPersonsLastNamesWithRepeats();
            break;
        case '5':
            getPersonsBLastNames();
            break;
        case '6':
            getBumNames();
            break;
        case '7':
            getTeenagersNames();
            break;
        case '8':
            getStreetsListABC();
            break;
        case '9':
            getStreetsListOfSix();
            break;
        case '10':
            getStreetsListWithTreePersons();
            break;
        default:
            console.log('Wrong number! There is no such task!')
    }
}
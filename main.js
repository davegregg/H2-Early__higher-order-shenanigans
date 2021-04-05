let pets = ["Hugo", "Maximillian Golden Bullet", "Thurston Waffles", "Dog", "Questionable Ethics", "Poobert", "Bowie"]

let add1 = function (x, y) { // classic function expression
    return x + y
}

let add2 = (x, y) => { // arrow function
    return x + y
}

let add3 = (x, y) => x + y // shorter version of arrow fun

// FOREACH

let play = (pet, index) => {
    console.log("Let's pet the pet! Which pet?", pet, index)
}

for (let index = 0; index < pets.length; index += 1) {
    let pet = pets[index]
    play(pet)
}

function forEach (array, callback) {
    for (let index = 0; index < array.length; index += 1) {
        let item = array[index]
        callback(item)
    }
}

forEach(pets, (pet) => console.log(pet))

pets.forEach((pet) => console.log(pet))

// MAP - Used for creating a new array based on the original
//            ... transforming every item of an array

let users = [
    { username: "cassandra", isActive: false },
    { username: "trey", isActive: true },
    { username: "becky", isActive: true },
    { username: "tasfir", isActive: false },
    { username: "dmg", isActive: true },
    { username: "mariah", isActive: false },
    { username: "madalyn", isActive: true },
]
let names = []
for (let index = 0; index < users.length; index += 1) {
    let user = users[index]
    names.push(user.username)
}
console.log(users)
console.log(names)

let usernames = users.map((user) => {
    return user.username
})
console.log(usernames)

// EVERY & SOME

let allAreActive = users.every((user) => user.isActive === true)
let someAreActive = users.some((user) => user.isActive)
console.log({ allAreActive, someAreActive });

// FIND & FILTER

let firstActiveUser = users.find((user) => {
    return user.isActive === false
})
console.log(firstActiveUser)

let petContainingLetterC = pets.find((pet) => {
    return pet.includes("c") || pet.includes("C")
})
console.log(petContainingLetterC);

let allPetsWithE = pets.filter((pet) => {
    return pet.includes("e") || pet.includes("E")
})
console.log(allPetsWithE);

let activeUsers = users.filter(user => user.isActive)
let inactiveUsers = users.filter(user => user.isActive === false)
console.log({ activeUsers, inactiveUsers });

// find the name of every ACTIVE user whose name contains a "m" OR "M"
let toNamesIncludingM = (user) => user.username.includes("m") || user.username.includes("M")
let toActiveUsers = (user) => user.isActive === true
let toUsernames = (user) => user.username

let activeUsersWithM = users
    .filter(toActiveUsers)
    .filter(toNamesIncludingM)
    .map(toUsernames)

console.log(activeUsersWithM);

// REDUCE

let nums = [1, 2, 3, 4, 5, 6]
//                     21    -
let sum = nums.reduce((x, y) => x + y, 0)
console.log(sum);

let product = nums.reduce((x, y) => x * y, 1)
console.log(product);

let delimiter = ","
let stringOfPets = pets.reduce((x, y) => x + delimiter + y, "")
console.log(stringOfPets);


let counts = {
    m: 0,
    e: 0,
    t: 0,
}

let petsWithMCount = 0
for (let index = 0; index < pets.length; index += 1) {
    let pet = pets[index]
    if (pet.includes("m") || pet.includes("M")) {
        counts.m += 1
    }
    if (pet.includes("e") || pet.includes("E")) {
        counts.e += 1
    }
}
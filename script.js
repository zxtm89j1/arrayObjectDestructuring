'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

const menu = [restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

rest2.owner = rest2.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYOUS>';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat! ');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// // console.log('--OR--');

// // // Use ANY data type, return ANY data type, short circuiting (falsy and truthy values)
// // console.log(3 || 'Spencer'); // result: 3
// // console.log('' || 'Spencer'); // result: Spencer
// // console.log(true || 0); // result: true
// // console.log(undefined || null); //result: null

// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('--AND--');
// // console.log(0 && 'Spencer');
// // console.log(7 && 'Spencer');

// // console.log('Hello' && 23 && null && 'Spencer');

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // // // spread, because on right side of operator of =
// // // const arr = [1, 2, ...[3, 4]];

// // // // REST, because on left side of =
// // // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // // console.log(a, b, others);

// // // const [pizza, , risotto, ...otherFood] = [
// // //   ...restaurant.mainMenu,
// // //   ...restaurant.starterMenu,
// // // ];

// // // console.log(pizza, risotto, otherFood);

// // // // Objects
// // // const { sat, ...weekdays } = restaurant.openingHours;
// // // console.log(weekdays);

// // // // Functions
// // // const add = function (...numbers) {
// // //   let sum = 0;
// // //   for (let i = 0; i < numbers.length; i++) {
// // //     sum += numbers[i];
// // //     console.log(sum);
// // //   }
// // // };

// // // add(2, 3);
// // // add(5, 3, 7, 2);
// // // add(8, 2, 5, 3, 2, 1, 4);

// // // const x = [23, 5, 7];
// // // add(...x);

// // // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // // restaurant.orderPizza('mushrooms');
// // // // // The spread operator
// // // // restaurant.orderDelivery({
// // // //   time: '22:30',
// // // //   address: 'Secret Street',
// // // //   mainIndex: 2,
// // // //   starterIndex: 2,
// // // // });

// // // // const arr = [7, 8, 9];
// // // // const badNewArr = [1, 2, arr[0], arr[2]];
// // // // console.log(badNewArr);

// // // // const newArr = [1, 2, ...arr];
// // // // console.log(newArr);
// // // // console.log(...newArr);

// // // // const newmenu = [...restaurant.mainMenu, 'Gnocci'];
// // // // console.log(newmenu);

// // // // // Copy array
// // // // const mainMenuCopy = [...restaurant.mainMenu];

// // // // // Join 2 arrays or more
// // // // const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // // console.log(menu1);

// // // // // Iterables: arrays, strings, maps, sets but not objects
// // // // const str = 'Spencer';
// // // // const letters = [...str, ' ', 'S'];
// // // // console.log(letters);

// // // // console.log(...str);

// // // // // const ingredients = [
// // // // //   prompt("Let's make pasta! Ingredient 1?"),
// // // // //   prompt("Let's make pasta! Ingredient 2?"),
// // // // //   prompt("Let's make pasta! Ingredient 3?"),
// // // // // ];

// // // // // console.log(ingredients);

// // // // // restaurant.orderPasta(...ingredients);

// // // // // Objects
// // // // const newRestaurant = {
// // // //   ...restaurant,
// // // //   founder: 'Spencer Bohol',
// // // //   foundedIn: 1998,
// // // // };

// // // // console.log(newRestaurant);

// // // // const restaurantCopy = { restaurant };
// // // // restaurantCopy.name = 'RESSSTTTTOOOOOO';
// // // // console.log(restaurantCopy.name);
// // // // console.log(restaurant.name);

// // // // const { name, openingHours, categories } = restaurant;
// // // // console.log(name, openingHours, categories);

// // // // const {
// // // //   name: restaurantName,
// // // //   openingHours: hours,
// // // //   categories: tags,
// // // // } = restaurant;

// // // // console.log(restaurantName, hours, tags);

// // // // // default values
// // // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // // console.log(menu, starters);

// // // // // mutating variables
// // // // let a = 111;
// // // // let b = 999;
// // // // const obj = { a: 23, b: 7, c: 14 };

// // // // ({ a, b } = obj);
// // // // console.log(a, b);

// // // // // nested objects
// // // // const {
// // // //   fri: { open, close },
// // // // } = openingHours;
// // // // console.log(open, close);

// // // // // // Destructuring array
// // // // // const arr = [2, 3, 4];
// // // // // const a = arr[0];
// // // // // const b = arr[1];
// // // // // const c = arr[2];

// // // // // const [x, y, z] = arr;
// // // // // console.log(x, y, z);

// // // // // console.log(arr);

// // // // // let [main, , secondary] = restaurant.categories;
// // // // // console.log(main, secondary);

// // // // // // switching variables
// // // // // [main, secondary] = [secondary, main];
// // // // // console.log(main, secondary);

// // // // // // receive 2 return values from a function
// // // // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // // // console.log(starter, mainCourse);

// // // // // //Nested destructuring
// // // // // const nested = [2, 4, [5, 6]];
// // // // // // const [i, , j] = nested;
// // // // // // console.log(i, j);

// // // // // const [i, , [j, k]] = nested;
// // // // // console.log(i, j, k);

// // // // // //Default values
// // // // // const [p = 1, q = 1, r = 1] = [8];
// // // // // console.log(p, q, r);

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
// annotated version would be 'const carsByMake: string[][] = ...'

// Help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const unimportantDates: (Date | string)[] = [new Date()];

unimportantDates.push('2030-10-10');
unimportantDates.push(new Date());

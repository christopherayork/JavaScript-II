// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let chris = 'awesome';
function whoIsAwesome() {
    return chris;
}
console.log(whoIsAwesome());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let counter = 0;
    function count() {
        counter++;
        return counter;
    }
    return count;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    let counter = 0;
    return {
        'increment': () => console.log(++counter),
        'decrement': () => console.log(--counter)
    };
};
const fact1 = counterFactory();
fact1.increment();
fact1.decrement();

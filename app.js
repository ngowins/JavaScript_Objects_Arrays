console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(n) {
  let sum = 0;

  n.forEach((n) => {
    sum += n;
  });
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
  title: "The Voyages of Dr. DoLittle",
  author: "Hugh Lofting",
  lengthInPages: undefined,
  timesRead: undefined,
};

book.title = "The Voyages of Dr. DoLittle";
book.lengthInPages = 364;
book.timesRead = 3;
book.info = function () {
  console.log(
    `${this.title} by ${this.author} is ${this.lengthInPages} pages in length. I have read this book ${this.timesRead} time(s)`
  );
};

book.info();

import chalk from "chalk";

const colors = [
  chalk.red,
  chalk.green,
  chalk.blue,
  chalk.yellow,
  chalk.magenta,
  chalk.cyan,
];

const p1 = new Promise((resolve) => setTimeout(() => resolve("H"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("I"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("T"), 3000));
const p4 = new Promise((resolve) => setTimeout(() => resolve("L"), 4000));
const p5 = new Promise((resolve) => setTimeout(() => resolve("E"), 5000));
const p6 = new Promise((resolve) => setTimeout(() => resolve("R"), 6000));

[p1, p2, p3, p4, p5, p6].forEach((promise, index) => {
  promise.then((letter) => {
    process.stdout.write(colors[index % colors.length](letter));
  });
});

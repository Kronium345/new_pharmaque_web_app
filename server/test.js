import path, { dirname } from "path";

const path2 = dirname(new URL(import.meta.url).pathname);
const path3 = path.join(dirname(new URL(import.meta.url).pathname), "uploads");

console.log(path2);
console.log(path3);

const { dir } = path.parse(new URL(import.meta.url).pathname); // Extract directory

console.log(dir);

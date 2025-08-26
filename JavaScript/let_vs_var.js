// -------------------------------
// Difference between let and var
// -------------------------------

// 1) Scope Difference
if (true) {
    var a = 10;   // var is function-scoped (or global)
    let b = 20;   // let is block-scoped
}
console.log(a); // ✅ Works → 10
// console.log(b); // ❌ Error → b is not defined (block-scoped)


// 2) Hoisting & Temporal Dead Zone (TDZ)
console.log(x); // ✅ undefined (var is hoisted & initialized to undefined)
var x = 5;

// console.log(y); // ❌ ReferenceError (let is hoisted but not initialized → TDZ)
let y = 15;


// 3) Re-declaration
var p = 1;
var p = 2;  // ✅ Allowed (but can cause bugs)
console.log(p); // 2

let q = 1;
// let q = 2;  // ❌ Not allowed (SyntaxError)
// Use let only once in the same scope


// 4) Global Object Binding
var g = "I am var";
// Accessible via window/globalThis in browser
console.log(window.g); // ✅ "I am var"

let h = "I am let";
// Not added to window/globalThis
console.log(window.h); // ❌ undefined


// 5) Loops & Closures
// Using var → same variable shared across loop iterations
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log("var i:", i), 1000);
}
// Output after 1 sec → var i: 4, var i: 4, var i: 4

// Using let → new variable created for each iteration
for (let j = 1; j <= 3; j++) {
    setTimeout(() => console.log("let j:", j), 1000);
}
// Output after 1 sec → let j: 1, let j: 2, let j: 3

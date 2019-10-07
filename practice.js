var a = 5;
var b = 10
var c = a + b
var time = 0;
var a = c + b
//var age = window.prompt("Tell me your age");
do {
    a = a + 1;
    time = time + 1;
} while (a < 30)
console.log(a);
console.log(time);
aa = 25;
timer = 0;
while (aa < 30) {
    aa = aa + 1;
    timer = timer + 1;
}
console.log(aa);
console.log(timer);
for (i = 1; i < 10; i ++ ) {
    aa = aa + 1;
}
console.log(aa);




//Function Scope
var a = 12;
foo();

function foo() {
    a = 5;
    a = a + 1;
    console.log(a);
    var a;                  //this can make the var to be locked into the local scope!
}
console.log(a);

//Nested Scopes

console.log("--------------------------------------Nested Scope");
function foo1() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a );				// 1
}

foo1();

console.log("-------------------------------------indivisual block");
function foo2() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
        }
        console.log(c);             //why this is a value of 15?: this is the global value!
	}
}

foo2();


console.log("==========================================Lexical Scope");

var myFunction = function() {
    var name = "Max";
    var myOtherFunciton = function() {
        console.log(1);
    }
    console.log(2);
    myOtherFunciton();
}
myFunction();

var obj = {a:1, b:2, c:3};
console.log("a in obj is:" + obj.a);

var youtube = function (str) {
    console.log(str);
}
youtube("stiter");
var adder = 0;
while (true) {
    console.log(adder);
    adder += 1;
    if (adder >= 10) {
        break;
    }
}
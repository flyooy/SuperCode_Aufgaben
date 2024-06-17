
function intro() {
    console.log("Hello World");
    let a = 1 + 3;
    console.log("1+3= " + a);
}

intro();


//Level 1.2

function intro2(paramName) {
    let description = "SuperCoder:in";
    console.log("Hi " + description + ". Mein Name ist " + paramName ); 
}

intro2("Max Scholz")

//Level 1.3

function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt);
}

intro3("Yan", "Velbert", 28);


//Level 1.5

function math(a, b) {
    console.log("Multiplikation von " + a + " und " + b + ": " + (a * b));
    console.log("Division von " + a + " und " + b + ": " + (a / b));
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);





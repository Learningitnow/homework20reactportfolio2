// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

function myMath(props){
    let num1 = props.num1
    let num2 = props.num2
    let operator = props.operator


    if ( operator === "+") {
        return (num1 + num2 )
    };

    else if ( operator === "-") {
        return (num1 - num2 )
    };

    else if ( operator === "*") {
        return (num1 * num2 )
    };

    else if ( operator === "/") {
        return (num1 / num2 )
    };

    else if ( operator === "^") {
        return (Math.pow(num1 ^ num2 )
    };

}
IIFS (Immediately Invoked Function Expression)

it executes with the grouping operator (), so when it see

function(){

}(), this is will create a ambiguity that  it will process this as a function declaration, so to reduce  the ambiguity, we use ( ) parenthesis, it know that what must be  an expression instead of functions declaration

we can use void operator allow, 


1. 
void (function() {

})()



2. Arrow Function, we can diretly return the body expression, without return, grouping operator() can be used to return object literal expression, bcz otherwise the left curly brace would be interpreted as a start of function declaration

const f = () => ({ a:1 })

3. If a property is accessed on a number literal, the property accessor dot[.] operator may be ambiguous with the decimal points, unless it's already has a decimal place. we can warp integer literal with ()

(1).toString()

4. Grouping operator and automatic semicolon insertion
the return keyword & the return expression cannot have a line break between them
function sum(a,b) {
    return
           a+b;
}

5. Grouping may also, introduce a hazards, when a line starts with the ( ) parenthesis & previous line ends with a expression, it treats this as a function call, 


const a = 1
(1).toString()

bcz of the parenthesis, semicolon is not inserted at the end of the line & 
this is interpreted as const a = 1(1).toString()   // will get thow a type error as "TypeError:1 is not a function", remember that when a line starts with left parenthesis'(', prefix with semicolon before that, this pratices is recommanded by all formatting tools (prettier) etc,.

so, 

const a = 1
;(1).toString()

more details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion


6. Based on above flow, a semicolon is inserted automatically after the return ; function is returned immediately without process the expression and upcoming expression is skiped & 'undefined' is returned, so we can use () to format the return

function sum(a,b) {
    return (
        a+b
    )
}

when the interptor sess teh 

-> helps in reducing poluting global variables


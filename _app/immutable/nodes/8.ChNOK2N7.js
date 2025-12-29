import{f as K,a as Q}from"../chunks/B2siLBbx.js";import"../chunks/Cwjy71xG.js";import{ab as X,ac as Z,ad as t,ae as n,u as o,T as a,af as $,ag as i}from"../chunks/CRmMhqsU.js";import{h as s}from"../chunks/DJ-P1dcL.js";import{i as ee}from"../chunks/B6mePkL4.js";import{p as te}from"../chunks/BArjWSjB.js";var oe=K(`<section id="docs-content"><header class="docs-hero svelte-174icia"><p class="docs-kicker svelte-174icia">Introduction</p> <h1>Basics of Dragonstone</h1> <p class="docs-lede svelte-174icia">This is a quick overview into some of the features of Dragonstone,
            for these examples, we'll be using the interpreter to run our code.</p></header> <section class="docs-card svelte-174icia" aria-labelledby="hello-world"><h2 id="hello-world">Hello World</h2> <p>The first thing you need to learn in any programming language is 
            normally the Hello World! program. In Dragonstone this is pretty 
            simple:</p> <!> <p>The entire program consists of a call to the method <code>echo</code> with the 
            string <code>Hello World!</code> as an argument. This method prints the string 
            to the standard output. All code in the top-level scope is part of the main 
            program, so in this example there is no need for an explicit main function 
            as the entry point to the program. These kinds of variables are called <code>local variables</code>.</p> <br/> <p>Dragonstone print statements automatically add a line break after each call to <code>echo</code>, but also supports printing without a line break using <code>eecho</code>:</p> <!> <p>For print statements you can also use 2 variations of debug prints, <code>e!</code> and <code>ee!</code>, which prints the full expression. 
            The only difference between the 2 is that <code>e!</code> adds a line break at the end, while <code>ee!</code> does not:</p> <!> <p>Paired with <code>typeof</code> (shown later) this can be powerful for debugging.</p></section> <section class="docs-card svelte-174icia" aria-labelledby="comments"><h2 id="comments">Comments</h2> <p>Single Line Comments start with a <code>#</code>.</p> <!> <p>Single Line Trailing Comments start with a <code>#</code> on the same line.</p> <!> <p>Multi-Line Comments start with a <code>#[\`</code> and end with a <code>\`]#</code>, they can also be nested.</p> <!> <p>Nested Multi-Line Comment.</p> <!> <p>This can also be inline.</p> <!></section> <section class="docs-card svelte-174icia" aria-labelledby="variables"><h2 id="variables">Variables</h2> <p>To store a value and so it can be re-used later, it can be 
            assigned to a variable.</p> <p>For example, if you want to say Hello! three times, you 
            don't need to repeat the same string multiple times. Instead, 
            you can assign it to a variable and re-use it:</p> <!> <p>This program prints the string <code>Hello!</code> three times to the 
            standard output, each followed by a line break. The name of a 
            variable always starts with a lowercase ascii or unicode letter 
            (or underscores) and can otherwise consist of alphanumeric 
            characters (or underscores). As a typical convention in 
            programming, uppercase letters are avoided and names are written 
            in snake_case, but there is no explicit rules within 
            Dragonstone preventing you from using uppercase.</p> <h3>Type of a Variable</h3> <p>The type of a variable is automatically inferred. In the above 
            example, it's String. You can verify this with typeof:</p> <!> <h3>Variable Expression</h3> <p>The <code>e!</code> is similar to echo as it prints the value to the standard 
            output, but it also prints the full expression. It's a useful 
            tool for debugging:</p> <!> <h3>Reassigning a Value</h3> <p>A variable can be reassigned with a different value:</p> <!> <p>This also works with values of different types. The type of the 
            variable changes when a value of a different type is assigned.</p> <!></section> <section class="docs-card svelte-174icia" aria-labelledby="strings"><h2 id="strings">Strings</h2> <p>A string, which is just a set of ascii or unicode characters, and by default 
            are UTF-8 (this needed to be done to support unicode), all you need to do is 
            enclose them in double quotes <code>" "</code>. But, note that strings are immutable, any 
            changes to that string will change its output later.</p> <!> <h3>Interpolation</h3> <p>String interpolation is a method in which you combine strings, this is done inside 
            double quotes <code>" "</code> and using <code>#&#123;...&#125;</code>. Here's an example:</p> <!> <p>This also works with any type of variable, so it doesn't need to be a string only.</p> <!> <h3>Concatenation</h3> <p>An alternative to interpolation, or if you need to group multiple strings together 
            you can use concatenation by adding strings with the <code>+</code> like this 
            example:</p> <!> <h3>Escaping</h3> <p>Sometimes you might find trouble writing some characters in literals. Something like 
            a double quote <code>" "</code> if used inside a string, would either throw an error 
            or cause certain parts of you program to not run. The workaround for this in
            programming is by escaping. If a double quote is preceded by a backslash <code>\\</code> it will be used as an escape and both characters together will output correctly.</p> <!> <p>Dragonstone has multiple types of escapes that won't print such as a line break <code>\\n</code>, tabulator <code>\\t</code>, and double backslash <code>\\\\</code>. 
            Here is the current list, with more coming soon:</p> <!> <h3>Unicode</h3> <p>A Unicode is an international standard for text in many different writing systems. 
            This includes not just the latin alphabet used in English, but also includes the 
            characters of many others. The Unicode standard also includes things like emojis 
            and icons.</p> <!> <p>As usual with most programming languages you can use the unicode directly, however 
            some characters or emojis may not be supported on all fonts or editors. Some don't 
            even output and you may end up with a blank space. To use the unicode directly you 
            have to use the <code>\\</code> followed by the <code>u</code> codepoint and then in 
            curly brackets <code>&#123;...&#125;</code> the hexadecimal of the emoji you wish to use, 
            here's an example:</p> <!> <h3>String Manipulation</h3> <p>Dragonstone also allows you to manipulate a string, so if you want to change how a 
            string looks you can convert it using some of the methods it provides, with more 
            coming soon:</p> <!> <h3>Other String Types</h3> <p>There's also support for some other detailed information about strings.</p> <p>We can check the number of characters a string contains:</p> <!> <p>Without <code>e!</code>:</p> <!> <p>Or a simpler method with the Standard Library:</p> <!> <p>Without <code>e!</code>:</p> <!></section> <section class="docs-card svelte-174icia" aria-labelledby="numbers"><h2 id="numbers">Numbers</h2> <p>Now, with Dragonstone has quite a few ways to deal 
            with Data, for our introduction we're going to work 
            on numbers. There are 2 ways to deal with numbers: <code>int</code> (Integer) and <code>float</code> (Float). You can also be optionally explicit even 
            more by specifying <code>int32</code>, <code>int64</code>, <code>float32</code>, and <code>float64</code>.</p> <!> <p>Float values print with a decimal point whereas 
            Integer values don't.</p> <br/> <h2>Arithmetic</h2> <h3>Equality and Comparison</h3> <p>If two numbers have the same value, the <code>==</code> operator says they are equal, no matter what type they are.</p> <!> <p>In addition to the equality operator, there are comparison 
            operators that check how two values relate to each other. 
            Like equality, comparisons work the same way no matter the type.</p> <!> <p>The <code>&lt;=&gt;</code> operator, called the spaceship operator 
            because of how it looks, compares two values. It returns 0 if
            they are equal, a positive number if the first is larger, or 
            a negative number if the second is larger. It acts like all 
            the other comparison operators combined.</p> <!> <h3>Operators</h3> <p>You can do basic math using operators. Most of them take two values 
            and are written between those values, like <code>a + b</code>. Some 
            only need one value and are written before it, like <code>-a</code>. 
            The expression’s value is the result of that operation.</p> <!> <p>Most math operations with integers give another integer as the 
            result. The division operator <code>/</code> is an exception 
            because it always gives a float. The floor division operator <code>//</code> gives an integer result, but rounded down to 
            the nearest whole number. When you mix integers and floats in 
            an operation, the result is always a float. In other cases, 
            the result usually has the same type as the first value.</p> <br/> <p>Here's a full list of the supported operators in Dragonstone:</p> <!> <h3>Precedence</h3> <p>When an expression uses several operators, the question 
            is which one is applied first. In math, for example, 
            multiplication and division are done before addition 
            and subtraction, and Dragonstone follows the same 
            precedence rules for its operators.</p> <!> <p>Here's a full list of the operator precedence:</p> <!></section></section>`);function de(B,p){X(p,!1);let e=te(p,"data",8);ee();var r=oe(),l=t(n(r),2),u=t(n(l),4);s(u,()=>(a(e()),o(()=>e().hello1Html)));var m=t(u,8);s(m,()=>(a(e()),o(()=>e().hello2Html)));var P=t(m,4);s(P,()=>(a(e()),o(()=>e().hello3Html))),$(2),i(l);var d=t(l,2),g=t(n(d),4);s(g,()=>(a(e()),o(()=>e().comment1Html)));var b=t(g,4);s(b,()=>(a(e()),o(()=>e().comment2Html)));var v=t(b,4);s(v,()=>(a(e()),o(()=>e().comment3Html)));var f=t(v,4);s(f,()=>(a(e()),o(()=>e().comment4Html)));var R=t(f,4);s(R,()=>(a(e()),o(()=>e().comment5Html))),i(d);var c=t(d,2),y=t(n(c),6);s(y,()=>(a(e()),o(()=>e().variables1Html)));var w=t(y,8);s(w,()=>(a(e()),o(()=>e().variables2Html)));var H=t(w,6);s(H,()=>(a(e()),o(()=>e().variables3Html)));var _=t(H,6);s(_,()=>(a(e()),o(()=>e().variables4Html)));var z=t(_,4);s(z,()=>(a(e()),o(()=>e().variables5Html))),i(c);var h=t(c,2),k=t(n(h),4);s(k,()=>(a(e()),o(()=>e().strings1Html)));var T=t(k,6);s(T,()=>(a(e()),o(()=>e().strings2Html)));var x=t(T,4);s(x,()=>(a(e()),o(()=>e().strings3Html)));var I=t(x,6);s(I,()=>(a(e()),o(()=>e().strings4Html)));var q=t(I,6);s(q,()=>(a(e()),o(()=>e().strings5Html)));var S=t(q,4);s(S,()=>(a(e()),o(()=>e().strings6Html)));var D=t(S,6);s(D,()=>(a(e()),o(()=>e().strings7Html)));var A=t(D,4);s(A,()=>(a(e()),o(()=>e().strings8Html)));var W=t(A,6);s(W,()=>(a(e()),o(()=>e().strings9Html)));var C=t(W,8);s(C,()=>(a(e()),o(()=>e().strings10Html)));var L=t(C,4);s(L,()=>(a(e()),o(()=>e().strings11Html)));var j=t(L,4);s(j,()=>(a(e()),o(()=>e().strings12Html)));var G=t(j,4);s(G,()=>(a(e()),o(()=>e().strings13Html))),i(h);var F=t(h,2),M=t(n(F),4);s(M,()=>(a(e()),o(()=>e().numbers1Html)));var E=t(M,12);s(E,()=>(a(e()),o(()=>e().numbers2Html)));var U=t(E,4);s(U,()=>(a(e()),o(()=>e().numbers3Html)));var V=t(U,4);s(V,()=>(a(e()),o(()=>e().numbers4Html)));var N=t(V,6);s(N,()=>(a(e()),o(()=>e().numbers5Html)));var O=t(N,8);s(O,()=>(a(e()),o(()=>e().numbers6Html)));var Y=t(O,6);s(Y,()=>(a(e()),o(()=>e().numbers7Html)));var J=t(Y,4);s(J,()=>(a(e()),o(()=>e().numbers8Html))),i(F),i(r),Q(B,r),Z()}export{de as component};

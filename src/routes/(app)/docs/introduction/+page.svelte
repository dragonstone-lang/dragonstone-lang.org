<script lang="ts">
    export let data: { 
        
        // DOCS HELLO WORLD EXAMPLES
        hello1Html: string, 
        hello2Html: string,
        hello3Html: string,

        // DOCS COMMENT EXAMPLES
        comment1Html: string,
        comment2Html: string,
        comment3Html: string,
        comment4Html: string,
        comment5Html: string,

        // DOCS VARIABLES EXAMPLES
        variables1Html: string,
        variables2Html: string,
        variables3Html: string,
        variables4Html: string,
        variables5Html: string,

        // DOCS STRINGS EXAMPLES
        strings1Html: string,
        strings2Html: string,
        strings3Html: string,
        strings4Html: string,
        strings5Html: string,
        strings6Html: string,
        strings7Html: string,
        strings8Html: string,
        strings9Html: string,
        strings10Html: string,
        strings11Html: string,
        strings12Html: string,
        strings13Html: string,

        // DOCS NUMBERS EXAMPLES
        numbers1Html: string,
        numbers2Html: string,
        numbers3Html: string,
        numbers4Html: string,
        numbers5Html: string,
        numbers6Html: string,
        numbers7Html: string,
        numbers8Html: string
    };
</script>

<section id="docs-content">
    <header class="docs-hero">
        <p class="docs-kicker">
            Introduction
        </p>
        <h1>
            Basics of Dragonstone
        </h1>
        <p class="docs-lede">
            This is a quick overview into some of the features of Dragonstone,
            for these examples, we'll be using the interpreter to run our code.
        </p>
    </header>

    <section class="docs-card" aria-labelledby="hello-world">
        <h2 id="hello-world">
            Hello World
        </h2>
        <p>
            The first thing you need to learn in any programming language is 
            normally the Hello World! program. In Dragonstone this is pretty 
            simple:
        </p>
        {@html data.hello1Html}
        <p>
            The entire program consists of a call to the method <code>echo</code> with the 
            string <code>Hello World!</code> as an argument. This method prints the string 
            to the standard output. All code in the top-level scope is part of the main 
            program, so in this example there is no need for an explicit main function 
            as the entry point to the program. These kinds of variables are called 
            <code>local variables</code>.
        </p>
        <br>
        <p>
            Dragonstone print statements automatically add a line break after each call to 
            <code>echo</code>, but also supports printing without a line break using 
            <code>eecho</code>:
        </p>
        {@html data.hello2Html}
        <p>
            For print statements you can also use 2 variations of debug prints, 
            <code>e!</code> and <code>ee!</code>, which prints the full expression. 
            The only difference between the 2 is that <code>e!</code>
            adds a line break at the end, while <code>ee!</code> does not:
        </p>
        {@html data.hello3Html}
        <p>
            Paired with <code>typeof</code> (shown later) this can be powerful for debugging.
        </p>
    </section>

    <section class="docs-card" aria-labelledby="comments">
        <h2 id="comments">
            Comments
        </h2>
        <p>
            Single Line Comments start with a <code>#</code>.
        </p>
        {@html data.comment1Html}
        <p>
            Single Line Trailing Comments start with a <code>#</code> on the same line.
        </p>
        {@html data.comment2Html}
        <p>
            Multi-Line Comments start with a <code>#[`</code> and end with a 
            <code>`]#</code>, they can also be nested.
        </p>
        {@html data.comment3Html}
        <p>
            Nested Multi-Line Comment.
        </p>
        {@html data.comment4Html}
        <p>
            This can also be inline.
        </p>
        {@html data.comment5Html}
    </section>

    <section class="docs-card" aria-labelledby="variables">
        <h2 id="variables">
            Variables
        </h2>
        <p>
            To store a value and so it can be re-used later, it can be 
            assigned to a variable. 
        </p>
        <p>
            For example, if you want to say Hello! three times, you 
            don't need to repeat the same string multiple times. Instead, 
            you can assign it to a variable and re-use it:
        </p>
        {@html data.variables1Html}
        <p>
            This program prints the string <code>Hello!</code> three times to the 
            standard output, each followed by a line break. The name of a 
            variable always starts with a lowercase ascii or unicode letter 
            (or underscores) and can otherwise consist of alphanumeric 
            characters (or underscores). As a typical convention in 
            programming, uppercase letters are avoided and names are written 
            in snake_case, but there is no explicit rules within 
            Dragonstone preventing you from using uppercase.
        </p>
        <h3>
            Type of a Variable
        </h3>
        <p>
            The type of a variable is automatically inferred. In the above 
            example, it's String. You can verify this with typeof:
        </p>
        {@html data.variables2Html}
        <h3>
            Variable Expression
        </h3>
        <p>
            The <code>e!</code> is similar to echo as it prints the value to the standard 
            output, but it also prints the full expression. It's a useful 
            tool for debugging:
        </p>
        {@html data.variables3Html}
        <h3>
            Reassigning a Value
        </h3>
        <p>
            A variable can be reassigned with a different value:
        </p>
        {@html data.variables4Html}
        <p>
            This also works with values of different types. The type of the 
            variable changes when a value of a different type is assigned.
        </p>
        {@html data.variables5Html}
    </section>

    <section class="docs-card" aria-labelledby="strings">
        <h2 id="strings">
            Strings
        </h2>
        <p>
            A string, which is just a set of ascii or unicode characters, and by default 
            are UTF-8 (this needed to be done to support unicode), all you need to do is 
            enclose them in double quotes <code>" "</code>. But, note that strings are immutable, any 
            changes to that string will change its output later.
        </p>
        {@html data.strings1Html}
        <h3>
            Interpolation
        </h3>
        <p>
            String interpolation is a method in which you combine strings, this is done inside 
            double quotes <code>" "</code> and using 
            <code>#&#123;...&#125;</code>. Here's an example:
        </p>
        {@html data.strings2Html}
        <p>
            This also works with any type of variable, so it doesn't need to be a string only.
        </p>
        {@html data.strings3Html}
        <h3>
            Concatenation
        </h3>
        <p>
            An alternative to interpolation, or if you need to group multiple strings together 
            you can use concatenation by adding strings with the <code>+</code> like this 
            example:
        </p>
        {@html data.strings4Html}
        <h3>
            Escaping
        </h3>
        <p>
            Sometimes you might find trouble writing some characters in literals. Something like 
            a double quote <code>" "</code> if used inside a string, would either throw an error 
            or cause certain parts of you program to not run. The workaround for this in
            programming is by escaping. If a double quote is preceded by a backslash <code>\</code>
            it will be used as an escape and both characters together will output correctly.
        </p>
        {@html data.strings5Html}
        <p>
            Dragonstone has multiple types of escapes that won't print such as a line break 
            <code>\n</code>, tabulator <code>\t</code>, and double backslash <code>\\</code>. 
            Here is the current list, with more coming soon:
        </p>
        {@html data.strings6Html}
        <h3>
            Unicode
        </h3>
        <p>
            A Unicode is an international standard for text in many different writing systems. 
            This includes not just the latin alphabet used in English, but also includes the 
            characters of many others. The Unicode standard also includes things like emojis 
            and icons.
        </p>
        {@html data.strings7Html}
        <p>
            As usual with most programming languages you can use the unicode directly, however 
            some characters or emojis may not be supported on all fonts or editors. Some don't 
            even output and you may end up with a blank space. To use the unicode directly you 
            have to use the <code>\</code> followed by the <code>u</code> codepoint and then in 
            curly brackets <code>&#123;...&#125;</code> the hexadecimal of the emoji you wish to use, 
            here's an example:
        </p>
        {@html data.strings8Html}
        <h3>
            String Manipulation
        </h3>
        <p>
            Dragonstone also allows you to manipulate a string, so if you want to change how a 
            string looks you can convert it using some of the methods it provides, with more 
            coming soon:
        </p>
        {@html data.strings9Html}
        <h3>
            Other String Types
        </h3>
        <p>
            There's also support for some other detailed information about strings. 
        </p>
        <p>
            We can check the number of characters a string contains:
        </p>
        {@html data.strings10Html}
        <p>
            Without <code>e!</code>:
        </p>
        {@html data.strings11Html}
        <p>
            Or a simpler method with the Standard Library:
        </p>
        {@html data.strings12Html}
        <p>
            Without <code>e!</code>:
        </p>
        {@html data.strings13Html}
    </section>

        <section class="docs-card" aria-labelledby="numbers">
        <h2 id="numbers">
            Numbers
        </h2>
        <p>
            Now, with Dragonstone has quite a few ways to deal 
            with Data, for our introduction we're going to work 
            on numbers. There are 2 ways to deal with numbers: 
            <code>int</code> (Integer) and <code>float</code> 
            (Float). You can also be optionally explicit even 
            more by specifying <code>int32</code>, 
            <code>int64</code>, <code>float32</code>, and 
            <code>float64</code>.
        </p>
        {@html data.numbers1Html}
        <p>
            Float values print with a decimal point whereas 
            Integer values don't.
        </p>
        <br>
        <h2>
            Arithmetic
        </h2>
        <h3>
            Equality and Comparison
        </h3>
        <p>
            If two numbers have the same value, the <code>==</code>
            operator says they are equal, no matter what type they are.
        </p>
        {@html data.numbers2Html}
        <p>
            In addition to the equality operator, there are comparison 
            operators that check how two values relate to each other. 
            Like equality, comparisons work the same way no matter the type.
        </p>
        {@html data.numbers3Html}
        <p>
            The <code>&lt;=&gt;</code> operator, called the spaceship operator 
            because of how it looks, compares two values. It returns 0 if
            they are equal, a positive number if the first is larger, or 
            a negative number if the second is larger. It acts like all 
            the other comparison operators combined.
        </p>
        {@html data.numbers4Html}
        <h3>
            Operators
        </h3>
        <p>
            You can do basic math using operators. Most of them take two values 
            and are written between those values, like <code>a + b</code>. Some 
            only need one value and are written before it, like <code>-a</code>. 
            The expression’s value is the result of that operation.
        </p>
        {@html data.numbers5Html}
        <p>
            Most math operations with integers give another integer as the 
            result. The division operator <code>/</code> is an exception 
            because it always gives a float. The floor division operator 
            <code>//</code> gives an integer result, but rounded down to 
            the nearest whole number. When you mix integers and floats in 
            an operation, the result is always a float. In other cases, 
            the result usually has the same type as the first value.
        </p>
        <br>
        <p>
            Here's a full list of the supported operators in Dragonstone:
        </p>
        {@html data.numbers6Html}
        <h3>
            Precedence
        </h3>
        <p>
            When an expression uses several operators, the question 
            is which one is applied first. In math, for example, 
            multiplication and division are done before addition 
            and subtraction, and Dragonstone follows the same 
            precedence rules for its operators.
        </p>
        {@html data.numbers7Html}
        <p>
            Here's a full list of the operator precedence:
        </p>
        {@html data.numbers8Html}
    </section>
</section>

<style>
    .docs-hero {
        display: grid;
        gap: 1rem;
        padding: 2rem;
        border-radius: 10px;
        background: var(--gradient);
        border: var(--border-card-transparent);
        box-shadow: var(--shadow);
    }

    .docs-kicker {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 0.75rem;
        color: var(--txt-secondary);
        margin: 0;
    }

    .docs-lede {
        margin: 0;
    }

    .docs-card {
        padding: 1.75rem;
        border-radius: 8px;
        border: var(--border-card-transparent);
        background: var(--bg-primary);
    }
</style>

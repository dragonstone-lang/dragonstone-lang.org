import type { PageServerLoad } from "./$types";
import { highlightDoc } from "$ts/docs-highlight";

export const load: PageServerLoad = async () => {
    // 
    // DOCS
    // DOCS HELLO WORLD EXAMPLES
    // 
    // {@html data.hello1Html}
    const hello1 =
`
1   echo "Hello World!"
2   

# OUTPUT: Hello World!

`;

    // {@html data.hello2Html}
    const hello2 = 
`
1   eecho "Hello"
2   eecho " World!"
3   

# OUTPUT: Hello World!

`;

    // {@html data.hello3Html}
    const hello3 = 
`
1   e! "Hello World!"
2   ee! "Hello"
3   ee! " World!"
4   

# OUTPUT: "Hello World!" # -> "Hello World!"
#         "Hello" + " World!" # -> "Hello" + " World!"

`;

    // 
    // DOCS
    // DOCS COMMENT EXAMPLES
    // 
    // {@html data.comment1Html}
    const comment1 = 
`
1   # Single Line Comment
2   

`;
    
    // {@html data.comment2Html}
    const comment2 = 
`
1   echo "Hello World!"     # Trailing Comment
2   

`;
    
    // {@html data.comment3Html}
    const comment3 = 
`
1   #[
2       This is a Multi-Line Comment.
3   ]#
4   

`;

    // {@html data.comment4Html}
    const comment4 = 
`
1   #[
2       #[
3           This is a Nested Multi-Line Comment.
4       ]#
5   ]#

`;

    // {@html data.comment5Html}
    const comment5 = 
`
1   #[ Inside. ]#  numbers = 10  #[ Outside. ]#
2   

`;

    // 
    // DOCS
    // DOCS VARIABLES EXAMPLES
    // 
    // {@html data.variables1Html}
    const variables1 =
`
1   message = "Hello!"
2   echo message
3   echo message
4   echo message
5   

`;

    // {@html data.variables2Html}
    const variables2 =
`
1   message = "Hello Jules!"
2   
3   echo typeof(message)
4   

`;

    // {@html data.variables3Html}
    const variables3 =
`
1   message = "Hello Jules!"
2   
3   e! typeof(message)
4   

`;

    // {@html data.variables4Html}
    const variables4 =
`
1   message = "Hello Jules!"
2   
3   echo message
4   
5   message = "Hello Ringo!"
6   
7   echo message
8   

`;

    // {@html data.variables5Html}
    const variables5 =
`
1   message = "Hello Jules!"
2   
3   e! message, typeof(message)
4   
5   message = 50
6   
7   e! message, typeof(message)
8   

`;

    // 
    // DOCS
    // DOCS STRINGS EXAMPLES
    // 
    // {@html data.strings1Html}
    const strings1 =
`
1   message = "Hello!"
2   echo message
3   

# OUTPUT: Hello!

`;

    // {@html data.strings2Html}
    const strings2 =
`
1   name = "V"
2   echo "Hello, my name is #{name}"
3   

# OUTPUT: Hello, my name is V

`;

    // {@html data.strings3Html}
    const strings3 =
`
1   number = "100"
2   echo "Your grade is #{number}%"
3   

# OUTPUT: Your grade is 100%

`;

    // {@html data.strings4Html}
    const strings4 =
`
1   name = "V"
2   echo "Hi, my name is " + name + "!"
3   

# OUTPUT: Hi, my name is V!

`;

    // {@html data.strings5Html}
    const strings5 =
`
1   echo "I said: \\\"Hi\\\""
2    

# OUTPUT: I said: "Hi"

`;

    // {@html data.strings6Html}
    const strings6 =
`
    Slash           =   /\\//
    Backslash       =   /\\\\/
    Backspace       =   /\\b/
    Tabulator       =   /\\f/
    New Line        =   /\\n/
    Return          =   /\\r/
    Tab             =   /\\t/
    Vertical Tab    =   /\\v/

`;

    // {@html data.strings7Html}
    const strings7 =
`
1   echo "I ❤️ U!"
2    

# OUTPUT: I ❤️ U!

`;

    // {@html data.strings8Html}
    const strings8 =
`
1   echo "This is \\u{1F525}"
2    

# OUTPUT: This is 🔥

`;

    // {@html data.strings9Html}
    const strings9 =
`
1   msg = "Hello World!"
2   echo "standard: #{msg}"
3   echo "upcased: #{msg.upcase}"
4   echo "downcased: #{msg.downcase}"
5   echo "reversed: #{msg.reverse}"
6   

# OUTPUT: standard: Hello World!
#         upcased: HELLO WORLD!
#         downcased: hello world!
#         reversed: !dlroW olleH

`;

    // {@html data.strings10Html}
    const strings10 =
`
1   msg = "Hello World!"
2   e! msg.size
3 

# OUTPUT: msg.size # -> 12

`;

    // {@html data.strings11Html}
    const strings11 =
`
1   msg = "Hello World!"
2   echo msg.size
3 

# OUTPUT: 12

`;

    // {@html data.strings12Html}
    const strings12 =
`
1   use "strings_length"
2   
3   e! strings.length("Test")
4   

# OUTPUT: strings.length("Test") # -> 4

`;

    // {@html data.strings13Html}
    const strings13 =
`
1   use "strings_length"
2   
3   echo strings.length("Test")
4   

# OUTPUT: 4

`;

    // 
    // DOCS
    // DOCS NUMBERS EXAMPLES
    // 
    // {@html data.numbers1Html}
    const numbers1 =
`
1   e! typeof(1)
2   e! typeof(1.5)
3   

# OUTPUT: typeof(1) # -> "Integer"
#         typeof(1.5) # -> "Float"

`;

    // {@html data.numbers2Html}
    const numbers2 =
`
1   e! 1 == 1
2   e! 1 == 2
3   e! 1.5 == 1
4   e! -2.0 == -2
5   

# OUTPUT: 1 == 1 # -> true
#         1 == 2 # -> false
#         1.5 == 1 # -> false
#         -2.0 == -2 # -> true

`;

    // {@html data.numbers3Html}
    const numbers3 =
`
1   e! 2 > 1
2   e! 1 >= 1
3   e! 1 < 2
4   e! 1 <= 2
5   

# OUTPUT: 2 > 1 # -> true
#         1 >= 1 # -> true
#         1 < 2 # -> true
#         1 <= 2 # -> true

`;

    // {@html data.numbers4Html}
    const numbers4 =
`
1   e! 1 <=> 1
2   e! 2 <=> 1
3   e! 1 <=> 2
4   e! 5.5 <=> 5
5   

# OUTPUT: 1 <=> 1 # -> 0
#         2 <=> 1 # -> 1
#         1 <=> 2 # -> -1
#         5.5 <=> 5 # -> 1

`;

    // {@html data.numbers5Html}
    const numbers5 =
`
1   e! 1 + 1    # addition
2   e! 1 - 1    # subtraction
3   e! 2 * 3    # multiplication
4   e! 2 ** 4   # exponentiation
5   e! 6 / 2    # division
6   e! 2 // 3   # floor division
7   e! 7 % 3    # modulus
8   e! -1       # negation
9   e! +1       # unary plus
10  

# OUTPUT: 1 + 1 # -> 2
#         1 - 1 # -> 0
#         2 * 3 # -> 6
#         2 ** 4 # -> 16.0
#         6 / 2 # -> 3.0
#         2 // 3 # -> 0
#         7 % 3 # -> 1
#         -1 # -> -1
#         +1 # -> 1

`;

    // {@html data.numbers6Html}
    const numbers6 =
`
# Unary
#    +       positive                         +1
#    &+      wrapping positive                &+1
#    -       negative                         -1
#    &-      wrapping negative                &-1
#    !       inversion                        !true
#    ~       binary complement                ~1
#
# Binary
#    &       binary AND                       1 & 2
#    |       binary OR                        1 | 2
#    ^       binary XOR                       1 ^ 2
#
# Shifts
#    <<      shift left, append               1 << 2
#    >>      shift right                      1 >> 2
#
# Equality
#    ==      equal                            1 == 2
#    !=      not equal                        1 != 2
#
# Inequalities
#    <       less                             1 < 2
#    <=      less or equal                    1 <= 2
#    >       greater                          1 > 2
#    >=      greater or equal                 1 >= 2
#    <=>     three-way comparison             1 <=> 2
#
# Addition
#    +       addition                         1 + 2
#    &+      wrapping addition                1 &+ 2
#
# Subtraction
#    -       subtraction                      1 - 2
#    &-      wrapping subtraction             1 &- 2
#
# Multiplication
#    *       multiplication                   1 * 2
#    &*      wrapping multiplication          1 &* 2
#
# Exponent
#    **      exponentiation                   1 ** 2
#    &**     wrapping exponentiation          1 &** 2
#
# Division
#    /       division                         1 / 2
#    //      floor division                   1 // 2
#
# Modulus (find the remainder of division)
#    %       modulus                          1 % 2
#
# Subsumption
#    ===     case subsumption                 "foo" === 5
#
# Logical
#    &&      logical AND                      true && false
#    ||      logical OR                       true || false
#
# Range
#    ..      inclusive range                  1..10
#    ...     exclusive range                  1...10
#
# Assignments
#    =       variable assignment              a = 1
#
`;

    // {@html data.numbers7Html}
    const numbers7 =
`
1   e! 7 + 5 * 3
2   e! (3 + 4) * 2
3   

# OUTPUT: 7 + 5 * 3 # -> 22
#         3 + 4 * 2 # -> 14

`;

    // {@html data.numbers8Html}
    const numbers8 =
`
# Unary                                 +, &+, -, &-, !, ~
#
# Exponential                           **, &**
#
# Multiplicative                        *, &*, /, //, %
#
# Additive                              +, &+, -, &-
#
# Shift                                 <<, >>
#
# Binary AND                            &
#
# Binary OR/XOR                         |,^
#
# Equality and Subsumption              ==, !=, ===
#
# Comparison                            <, <=, >, >=, <=>
#
# Logical AND                           &&
#
# Logical OR                            ||
#
# Range                                 .., ...
#
# Assignment                            =, []=, +=, &+=, -=, &-=,
#                                       *=, &*=, /=, //=, %=, |=,
#                                       &=, ^=, **=, <<=, >>=, ||=,
#                                       &&=
#
`;

    return {
        // DOCS HELLO WORLD EXAMPLES
        hello1Html: await highlightDoc(hello1),
        hello2Html: await highlightDoc(hello2),
        hello3Html: await highlightDoc(hello3),

        // DOCS COMMENT EXAMPLES
        comment1Html: await highlightDoc(comment1),
        comment2Html: await highlightDoc(comment2),
        comment3Html: await highlightDoc(comment3),
        comment4Html: await highlightDoc(comment4),
        comment5Html: await highlightDoc(comment5),

        // DOCS VARIABLES EXAMPLES
        variables1Html: await highlightDoc(variables1),
        variables2Html: await highlightDoc(variables2),
        variables3Html: await highlightDoc(variables3),
        variables4Html: await highlightDoc(variables4),
        variables5Html: await highlightDoc(variables5),

        // DOCS STRINGS EXAMPLES
        strings1Html: await highlightDoc(strings1),
        strings2Html: await highlightDoc(strings2),
        strings3Html: await highlightDoc(strings3),
        strings4Html: await highlightDoc(strings4),
        strings5Html: await highlightDoc(strings5),
        strings6Html: await highlightDoc(strings6),
        strings7Html: await highlightDoc(strings7),
        strings8Html: await highlightDoc(strings8),
        strings9Html: await highlightDoc(strings9),
        strings10Html: await highlightDoc(strings10),
        strings11Html: await highlightDoc(strings11),
        strings12Html: await highlightDoc(strings12),
        strings13Html: await highlightDoc(strings13),

        // DOCS NUMBERS EXAMPLES
        numbers1Html: await highlightDoc(numbers1),
        numbers2Html: await highlightDoc(numbers2),
        numbers3Html: await highlightDoc(numbers3),
        numbers4Html: await highlightDoc(numbers4),
        numbers5Html: await highlightDoc(numbers5),
        numbers6Html: await highlightDoc(numbers6),
        numbers7Html: await highlightDoc(numbers7),
        numbers8Html: await highlightDoc(numbers8)
    };
};

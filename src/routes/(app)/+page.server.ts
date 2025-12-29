import type { PageServerLoad } from "./$types";
import { highlightDoc } from "$ts/docs-highlight";

export const load: PageServerLoad = async () => {
    // 
    // HOMEPAGE CODE EXAMPLES
    // 
    // {@html data.home1Html}
    const home1 =
`
echo "Hello World!"
eecho "Welcome to "
eecho "Dragonstone!"

e! "Happy coding!"
ee! "I ❤️ "
ee! "U!"

# OUTPUT: Hello World!
# OUTPUT: Welcome to Dragonstone!

# OUTPUT: "Happy coding!" # -> "Happy coding!"
# OUTPUT: "I ❤️ " + "U!" # -> "I ❤️ " + "U!"

`;

    // {@html data.home2Html}
    const home2 = 
`
record Point
    x
    y
end

num = Point.new(1, 2)

echo num.x
echo num.y

# OUTPUT: 1
# OUTPUT: 2


`;

    // {@html data.home3Html}
    const home3 = 
`
module Logger
    define hello(name: str)
        "Hello, #{name}!"
    end
end

class Greeter
    extend Logger
end

echo Greeter.hello("World")

# OUTPUT: "Hello, World!"

`;
    return {
        home1Html: await highlightDoc(home1),
        home2Html: await highlightDoc(home2),
        home3Html: await highlightDoc(home3),
    };
};

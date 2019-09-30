# Introduction

## Fundamentals

                console.log("This is a string");
                //This will create a log within the console section of a website once inspected.

                alert("This is a string");
                //This will create a pop up on the webpage upon loading in or refreshing

                var insertName;
                //This will create a variable with the attached name, in this case it will create a variable named insertName. Variable name must contain only letters,digits, or the symbols $ and _ .Also, the first character must not be a  digit. However the value of this variable will be undefined until we assigned something to it.

                insertName = "I am a string";
                //This will assign the string to the variable we just made. Other data types can also be assigned with the variable, such as strings,integers,arrays,etc. However, only one data type can be attached to a variable. Assigning a        new data type will overide the old one.

                const numberOne = 1;
                //This will assign the integer 1 to the constant variable numberOne. Unlike normal variables, this cannot be change once it has been defined and by trying to do so will produce an error.

## Combining Fundamentals

<u>Example 1</u>

                var message;
                message = "I am a message";
                alert(message);

                //This will alert "I am a message" when entering the webpage or refreshing

## Data Types

A <strong>Number</strong> can be both an integer or floating point numbers.

                // below is the example of floating point number
                var n = 1.365

A <strong>String</strong> must be surrounded by quotes.

                //below is examples of strings
                var x = "unknown";
                var one = "1";
                var name = "Simon";

A <strong>String</strong> can also be embeded via backticks(``) ONLY. Normal quotes will do absolutely nothing.

                //example of embedded string
                alert(`My name is ${name}.`); // My name is Simon
                alert(`2 + 2 is ${2 + 2}`); // 2 + 2 is 4

A <strong>boolean</strong> can only have 2 values, <strong>true</strong> or <strong>false</strong>. This type of <strong>Data Types</strong> falls under <strong>Logical Operators</strong>

A <strong>Null</strong> value is a special value that does not belong to any of the types mentioned before. It forms a separate type of its own which containes only the null value.

                var life = null
                // this will prompt that the value of life will be written as "undefined".
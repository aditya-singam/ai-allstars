import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper, Accordion, AccordionSummary, AccordionDetails, Button, Divider } from '@mui/material';
import { ExpandMore, PlayCircleOutline, Assignment, Quiz } from '@mui/icons-material';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import ReactMarkdown from 'react-markdown';
import QuizComponent from '../components/Quiz';

const courseContents = {
  1: { // Python Course
    title: "Intro to Python",
    duration: "7 Hours",
    difficulty: "Easy",
    author: "AI Allstars Team",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800",
    modules: [
      {
        title: "Python Fundamentals",
        lessons: [
          {
            title: "Hello World!",
            type: "tutorial",
            duration: "30 min",
            points: 100,
            content: `# Hello World!

The "Hello World!" program is the first step in learning how to code with any language. This tradition was first established in the 70s by Nokia Bell Labs and has since advanced into the famous first line of code that most programmers write.

It is a program that prints the text "Hello World!" to some output stream, usually the console, and it's primarily taught for three purposes:

1. To illustrate the basic syntax of a language
2. To check that you have correctly installed your computer language
3. To teach printing. Printing is a handy tool because you can use it for debugging regardless of what language or IDE you are running

## Printing

Printing in computer science is getting the computer to print out specific text into an output stream, as mentioned above.

Here are some examples of how printing works:`,
            codeExamples: [
              {
                code: 'print("Hello World!")',
                output: 'Hello World'
              },
              {
                code: 'print("I am learning how to program in Python!")',
                output: 'I am learning how to program in Python!'
              },
              {
                code: 'print("I like to eat pizza!")',
                output: 'I like to eat pizza!'
              }
            ],
            notes: [
              "When you print text, everything between the quotation marks is printed to the output."
            ],
            additionalContent: `## Entry points

Another important beginner concept is entry points. Entry points are where your program will begin to run. 

Python is executed differently from Java and C++. It simply runs all code from the very first line to the very bottom line, and this means you don't need to mark any entry points like in Java or C++. The Python code below, for example, will run fine on its own.`,
            finalExample: {
              code: 'print("Python doesn\'t require you to mark any entry points")',
              output: "Python doesn't require you to mark any entry points"
            },
            finalNote: "It's possible to structure your code in Python to define an entry point that isn't the first line, but it isn't necessary to get the code running.",
            trinketEmbed: `<iframe 
              src="https://pythontutor.com/iframe-embed.html#code=print(%22Hello%20World!%22)&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=3&rawInputLstJSON=%5B%5D&curInstr=0&codeDivWidth=350&codeDivHeight=400"
              width="100%" 
              height="400" 
              frameborder="0"
            ></iframe>`,
            quiz: {
              title: "Hello World Quiz",
              questions: [
                {
                  id: 1,
                  question: "What is the purpose of the print() function in Python?",
                  options: [
                    "To read user input",
                    "To display output to the console",
                    "To perform mathematical calculations",
                    "To create variables"
                  ],
                  correctAnswer: "To display output to the console",
                  explanation: "The print() function in Python is used to display output (text or variables) to the console or terminal."
                },
                {
                  id: 2,
                  question: "Which of the following will correctly print 'Hello World!' to the console?",
                  options: [
                    'print(Hello World!)',
                    'print("Hello World!")',
                    'print[Hello World!]',
                    'print{Hello World!}'
                  ],
                  correctAnswer: 'print("Hello World!")',
                  explanation: "In Python, string literals must be enclosed in quotation marks (either single or double quotes)."
                },
                {
                  id: 3,
                  question: "Why is 'Hello World!' traditionally the first program written when learning a new programming language?",
                  options: [
                    "Because it's the most complex program",
                    "To test if the programming environment is set up correctly",
                    "Because it's required by the compiler",
                    "To learn about databases"
                  ],
                  correctAnswer: "To test if the programming environment is set up correctly",
                  explanation: "The 'Hello World!' program is a simple way to verify that your programming environment is correctly set up and you can write, compile, and run code."
                }
              ]
            }
          },
          {
            title: "Variables",
            type: "tutorial",
            duration: "30 min",
            points: 100,
            content: `# Variables

The vast majority of applications, regardless of platform, store data. **Variables** are one such method of storing data, and they are helpful because an application can constantly manipulate and reference them. One common example is a score in a video game. The score is stored in a variable, and whenever you defeat an enemy or pass a level, the variable's value increases.

In Python, a variable is created with two components:

* Name - you use the name to reference the variable later on
* Value - this is the data that is being stored

Let's first store a variable named \`number\` that has the value \`5\`. Then, let's use the print function we learned in the "Hello World!" article to see the variable's value. Here is what it would look like:`,
            codeExamples: [
              {
                code: `number = 5
print(number)`,
                output: '5'
              },
              {
                code: `number = 5
print("number")`,
                output: 'number'
              }
            ],
            notes: [
              "Notice that unlike in the 'Hello World!' article, we don't have quotation marks around 'number' in the print statement. This is because quotation marks indicate the computer should print the words between them. We don't want to print the actual word 'number,' we want the computer to print the value of the variable named 'number'."
            ],
            additionalContent: `## Math Using Variables

Now that we know how to create variables, we can manipulate and modify them. 

For example, here is how we manipulate them using the four basic arithmetic operations (\`+\`, \`-\`, \`*\`, \`/\`):`,
            codeExamples2: [
              {
                code: `a = 5
b = 5
# addition
print(a + b)
# subtraction
print(a - b)
# multiplication
print(a * b)
# division
print(a / b)`,
                output: `10
0
25
1.0`
              }
            ],
            notes2: [
              "Notice only the last number ends with `.0` even though all four numbers technically end with `.0`. This is because integers and numbers with decimals are stored differently. Python originally stored `a` and `b` as integers but automatically converted them to a number with a decimal when the `/` division operator was used. Thus, when it was printed, it included its decimal despite not having a non-zero decimal."
            ],
            additionalContent2: `We modify the value of an already-created variable with a line of code in the form "name of variable = new value of the variable." If we wanted to change \`number\` from the previous example to have the value \`10\`, this is what it would look like:`,
            codeExamples3: [
              {
                code: `number = 5
number = 10
print(number)`,
                output: '10'
              }
            ],
            finalContent: `In programming, the equals sign does not have the same purpose as in math. Instead, equal signs are used to set the variable on the LEFT equal to the value on the RIGHT. The value on the right is first calculated, then the variable on the left is assigned that value. 

You can also use arithmetic when modifying a variable.`,
            codeExamples4: [
              {
                code: `number = 5
number = 10 + 5
print(number)`,
                output: '15'
              }
            ],
            additionalContent3: `You can even use the variable itself when modifying it.`,
            codeExamples5: [
              {
                code: `number = 5
number = number + 2
print(number)`,
                output: '7'
              }
            ],
            finalNotes: [
              "If you plan to use the variable itself when modifying it, you can use the shortcut below."
            ],
            codeExamples6: [
              {
                code: `number = 5
number += 2
print(number)`,
                output: '7'
              }
            ],
            finalContent2: `This code does the same thing as the previous example but takes less space. You can also use this shortcut with any arithmetic operation by replacing \`+\` in the expression with the desired operation (\`-\`, \`*\`, \`/\`).`,
            quiz: {
              title: "Variables Quiz",
              questions: [
                {
                  id: 1,
                  question: "What are the two components of a variable in Python?",
                  options: [
                    "Type and value",
                    "Name and type",
                    "Name and value",
                    "Value and size"
                  ],
                  correctAnswer: "Name and value",
                  explanation: "In Python, a variable consists of a name (used to reference it) and a value (the data being stored)."
                },
                {
                  id: 2,
                  question: "What will be the output of: number = 5; print(number + 3)",
                  options: [
                    "5",
                    "3",
                    "8",
                    "53"
                  ],
                  correctAnswer: "8",
                  explanation: "The code will add 3 to the value of number (5), resulting in 8."
                },
                {
                  id: 3,
                  question: "Which of these is the correct way to increment a variable by 2?",
                  options: [
                    "number =+ 2",
                    "number += 2",
                    "number =+ number + 2",
                    "number = 2+"
                  ],
                  correctAnswer: "number += 2",
                  explanation: "The += operator is a shorthand way to add a value to a variable and assign the result back to the variable."
                }
              ]
            }
          },
          {
            title: "Booleans",
            type: "tutorial",
            duration: "30 min",
            points: 100,
            content: `# Booleans

**Booleans** are a special variable data type that can only store two possible values: 1 and 0. These values are intended to represent the two truth values in logic: True and False. 

_Note: It's only storing the numbers 1 and 0, but because it's basically only ever used to represent True and False, most languages offer programmers the ability to use 1/True and 0/False interchangeably when referencing or modifying a boolean._

To serve this purpose, a boolean variable is best declared like so:`,
            codeExamples: [
              {
                code: `our_boolean = True`,
                output: null
              }
            ],
            notes: [
              "In many languages, booleans can also be declared by setting it equal to 1 or 0, but it is best practice to use true and false to not confuse booleans with integers."
            ],
            additionalContent: `Like the integer data type you saw in the "Variables" article, Booleans can also be modified and manipulated in various ways. Here are some examples:

* Booleans can be declared as equal to some statement the computer can check is true or false. In the following example, we ask the program if 1 is greater than 2.`,
            codeExamples2: [
              {
                code: `b = 1 > 2
print(b)`,
                output: 'False'
              }
            ],
            additionalContent2: `* You can also use variables in the statement that the computer checks is true or false.`,
            codeExamples3: [
              {
                code: `a = 2
b = 1
c = a > b
print(c)`,
                output: 'True'
              }
            ],
            additionalContent3: `You may be wondering how we check if two variables are equal to each other. We can use the \`==\` operator to do this, which checks if the value on the left of the operator is equal to the value on the right of the operator. Notice it uses two equal signs, which helps the computer distinguish between whether we are trying to check if two variables are equal vs whether we are trying to modify a variable's value.`,
            codeExamples4: [
              {
                code: `a = 1
b = 1
c = (a == b)
print(c)`,
                output: 'True'
              }
            ],
            notes2: [
              "Common Mistake: Accidentally using the '=' operator instead of the '==' operator to check if two values are equal is one of the most common beginner mistakes. Make sure you're using the right operator for what you want to do!"
            ],
            additionalContent4: `## Conditionals

**Conditional statements** are statements that can control the flow of a program when used in conjunction with booleans. The most common conditional statement is the "if-statement," which has three components:

1. The if-statement itself
2. The boolean that determines if the enclosed code will run
3. The enclosed code that will run if the boolean is true

For example, this code will print the variable \`b\` only if it is true because the print statement is enclosed in the body of the if-statement:`,
            codeExamples5: [
              {
                code: `# When b is true:
b = True
if b:
    print(b)`,
                output: 'True'
              },
              {
                code: `# When b is false:
b = False
if b:
    print(b)`,
                output: ''
              }
            ],
            notes3: [
              "Python doesn't use brackets and instead uses indentation to indicate that a body of code is enclosed in an if-statement. The lack of brackets is one of the hallmarks of Python that make it an easily identifiable language."
            ],
            additionalContent5: `"If-statement"s can also be expanded into "if-else-statement"s, which add an additional level of control. The body of code enclosed in the else component only runs if the given boolean is false.`,
            codeExamples6: [
              {
                code: `# When b is true:
b = True
if b:
    print("b is true!")
else:
    print("b is false!")`,
                output: 'b is true!'
              },
              {
                code: `# When b is false:
b = False
if b:
    print("b is true!")
else:
    print("b is false!")`,
                output: 'b is false!'
              }
            ],
            finalContent: `Let's apply our repertoire of variables, booleans, and conditionals to write a short program that tells you what to wear. 

Imagine you want to wear a t-shirt if the temperature is >70 degrees Fahrenheit, and otherwise, you want to wear a jacket. Your code for this scenario might look like this:`,
            codeExamples7: [
              {
                code: `temperature = 80 # replace 80 with today's temperature
if temperature > 70:
    print("Wear a t-shirt")
else:
    print("Wear a jacket")`,
                output: 'Wear a t-shirt'
              }
            ],
            finalContent2: `This program executes perfectly, but the issue is we also don't want to wear a jacket for all temperatures <=70 degrees. We instead want to wear a coat if the temperature is <40 degrees. Here is the catch: we now have three different ranges where we will be wearing various things depending on the temperature (<40, >=40 but <=70, >70). How can we represent three different values in the boolean we give the if-else-statement when a boolean can only store two different values? Where do we define the 3rd body of code since an if-else statement only has room for two bodies of code?

To address this issue, we can use a **nested if-else-statement**. A nested if-else-statement is an if-else-statement enclosed within another if-else statement. We can use this in our scenario to address our problem in 2 steps:

1. First, determine if the temperature is >70 degrees, and if it is, wear a t-shirt.
2. If it isn't, we either need to wear a jacket or coat, so we use another if-statement to figure out if we will wear a jacket or coat

This is what that logic would look like in code:

\`\`\`python
if temperature > 70:
    print("Wear a t-shirt")
else:
    if temperature < 40:
        print("Wear a coat")
    else:
        print("Wear a jacket")
\`\`\`

Let's see how this code works with different temperatures:`,
            codeExamples8: [
              {
                code: `# When the temperature is 20:
temperature = 20
if temperature > 70:
    print("Wear a t-shirt")
else:
    if temperature < 40:
        print("Wear a coat")
    else:
        print("Wear a jacket")`,
                output: 'Wear a coat'
              },
              {
                code: `# When the temperature is 60:
temperature = 60
if temperature > 70:
    print("Wear a t-shirt")
else:
    if temperature < 40:
        print("Wear a coat")
    else:
        print("Wear a jacket")`,
                output: 'Wear a jacket'
              },
              {
                code: `# When the temperature is 80:
temperature = 80
if temperature > 70:
    print("Wear a t-shirt")
else:
    if temperature < 40:
        print("Wear a coat")
    else:
        print("Wear a jacket")`,
                output: 'Wear a t-shirt'
              }
            ],
            quiz: {
              title: "Booleans Quiz",
              questions: [
                {
                  id: 1,
                  question: "What are the two possible values a boolean can store?",
                  options: [
                    "Yes and No",
                    "0 and 1",
                    "True and False",
                    "On and Off"
                  ],
                  correctAnswer: "True and False",
                  explanation: "In Python, booleans store True and False values, which internally represent 1 and 0."
                },
                {
                  id: 2,
                  question: "Which operator is used to check if two values are equal?",
                  options: [
                    "=",
                    "==",
                    "===",
                    "equals"
                  ],
                  correctAnswer: "==",
                  explanation: "The == operator is used to compare values, while the single = is used for assignment."
                },
                {
                  id: 3,
                  question: "What will be the output of: print(5 > 3)",
                  options: [
                    "5",
                    "3",
                    "True",
                    "False"
                  ],
                  correctAnswer: "True",
                  explanation: "The expression 5 > 3 evaluates to True because 5 is greater than 3."
                }
              ]
            }
          }
        ]
      },
      {
        title: "Working with Data",
        lessons: [
          {
            title: "Strings",
            type: "tutorial",
            duration: "30 min",
            points: 100,
            content: `# Strings

**Strings** are data types used to store words or text. They are easily spotted in code because string values normally have quotation marks around them. One of the first lines of code one may write when learning to code is printing the famous "Hello World!"`,
            codeExamples: [
              {
                code: `print("Hello World!")`,
                output: 'Hello World!'
              }
            ],
            additionalContent: `Notice how in each print statement the string that was printed, "Hello World!" needed to be surrounded by quotation marks. The quotation marks are how the computer differentiates a string from other lines of code, such as a variable name.`,
            codeExamples2: [
              {
                code: `x = 5
print("This is the letter: " + "x")
print("This is the variable: " + str(x))`,
                output: `This is the letter: x
This is the variable: 5`
              }
            ],
            additionalContent2: `Strings are stored differently in different languages. For example, strings in Java are stored as their own objects of the Java Class, while strings in C/C++ are stored as arrays(lists) of characters. This leads to differences in how Strings can be accessed and manipulated. If we wanted to print the first letter of a string, we would have to do it differently in each language.`,
            codeExamples3: [
              {
                code: `ourString = "hi"
# prints first letter of string
print(ourString[0:1])`,
                output: 'h'
              }
            ],
            additionalContent3: `The letter 'h' of "hi" is called a substring of the entire string, and as its name suggests, it is part of the string. In Python, you directly access the array of characters that stores the string. You can use this to access parts of a string, getting substrings of different lengths. If we wanted to gather the substring "you d" from the string "How are you doing", we would code`,
            codeExamples4: [
              {
                code: `question = "How are you doing"
# first parameter is start position (inclusive), second parameter is end position (exclusive)
print(question[8:13])`,
                output: 'you d'
              }
            ],
            notes: [
              "In Python, you would use the positions of the first character you want to include and the one index more than the last character you want to include."
            ],
            additionalContent4: `Keep in mind that despite their differences, strings are just arrays of characters, so remember that the first letter of a string is stored at a position (index) of 0 like an array in most languages.

Strings are also immutable in many languages, which means that once you create a data of the type string, you cannot change it. Thus, if you want to manipulate strings, you may need to access the original string while using other strings and methods. You can perform many more functions on strings, due to them having many attributes, and a common field used when working with strings is their length.`,
            codeExamples5: [
              {
                code: `x = "1234567"
# gets length of string
xLength = len(x)
print(xLength)`,
                output: '7'
              }
            ],
            quiz: {
              title: "Strings Quiz",
              questions: [
                {
                  id: 1,
                  question: "What are strings used for in programming?",
                  options: [
                    "To store numbers",
                    "To store words or text",
                    "To store boolean values",
                    "To store arrays"
                  ],
                  correctAnswer: "To store words or text",
                  explanation: "Strings are data types specifically designed to store and manipulate text data."
                },
                {
                  id: 2,
                  question: "How do you identify a string in code?",
                  options: [
                    "It starts with a number",
                    "It has quotation marks around it",
                    "It ends with a semicolon",
                    "It starts with 'str'"
                  ],
                  correctAnswer: "It has quotation marks around it",
                  explanation: "Strings are easily identified in code because they are surrounded by quotation marks (either single or double quotes)."
                },
                {
                  id: 3,
                  question: "What is the index of the first character in a string?",
                  options: [
                    "1",
                    "0",
                    "-1",
                    "None of the above"
                  ],
                  correctAnswer: "0",
                  explanation: "In Python (and most programming languages), string indexing starts at 0, so the first character is at index 0."
                }
              ]
            }
          },
          {
            title: "User Input",
            type: "tutorial",
            duration: "30 min",
            points: 100,
            content: `# User Input

Have you ever wondered how online websites take in and verify the usernames and passwords that you enter? Well, these websites ask the user for input and process the information that the user sends in, typically storing this information in variables.

This process used by those programs is called **user input**, and it is any information that is sent by the user to a computer using an input device. In almost every program, user input is utilized in some form. For example, console applications, desktop applications, databases, and website pages all use user input.

Below is an example of prompting the user for a password, taking in the user input, storing the input into a variable, and printing the password back out.`,
            codeExamples: [
              {
                code: `# Example 1: Basic user input with password
password = input("Enter a password: ")
print(\`Password is \${password}\`)

# Example 2: Numerical input with calculation
favNumber = int(input("Enter your favorite number: "))
favNumber *= 2
print(\`Favorite Number X 2 = \${favNumber}\`)

# Example 3: Multiple inputs
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(\`Hello \${name}, you will be \${age + 1} next year!\`)`,
                output: `Enter a password:
Password is coolCats23
Enter your favorite number:
Favorite Number X 2 = 100
Enter your name:
Enter your age:
Hello John, you will be 26 next year!`
              }
            ],
            additionalContent: `If you input into the same variable multiple times, only the last info is kept.

User input works for a variety of data types, including numerical values. The syntax is different for numerical values, but not significantly.

Taking in user input and storing it in variables also allows for the manipulation of input data before producing a final output value. In other words, calculations could be performed on the input data to create a different output value, similar to how a function in math produces an output f(x) from an input x. For example, we could take in a number x, add 10 to x, and then print out x.

Below is an example of prompting the user for their favorite number, taking in the user input, multiplying the number by 2, and then outputting the result.`,
            codeExamples2: [
              {
                code: `# prompting user and reading input
favNumber = int(input("Enter your favorite number: "))

# multiplying favorite number by 2
favNumber*=2

# outputting user input
print("Favorite Number X 2 = " + str(favNumber))`,
                output: `Enter your favorite number:
User types in "50"
Favorite Number X 2 = 100`
              }
            ],
            notes: [
              "It is extremely important that the variables you are storing the inputs in are the correct variables or the ones you want. For example, if a user inputs 0.55 when a program expects an integer, it will return an integer (the input is usually rounded to the nearest one). If a user inputs the string 'hello!' when the program expects an integer, it will fail entirely as the program expects an integer, and has received something which is not one."
            ],
            quiz: {
              title: "User Input Quiz",
              questions: [
                {
                  id: 1,
                  question: "What is user input?",
                  options: [
                    "Information sent from the computer to the user",
                    "Information sent from the user to the computer using an input device",
                    "A type of variable",
                    "A mathematical function"
                  ],
                  correctAnswer: "Information sent from the user to the computer using an input device",
                  explanation: "User input is any information that is sent by the user to a computer using an input device."
                },
                {
                  id: 2,
                  question: "What happens if you input into the same variable multiple times?",
                  options: [
                    "All inputs are stored",
                    "The first input is kept",
                    "Only the last input is kept",
                    "The variable is deleted"
                  ],
                  correctAnswer: "Only the last input is kept",
                  explanation: "When you input multiple values into the same variable, only the most recent (last) input is stored."
                },
                {
                  id: 3,
                  question: "What happens if a user inputs a string when the program expects an integer?",
                  options: [
                    "The program converts it to an integer",
                    "The program will fail",
                    "The string is stored as-is",
                    "The program ignores the input"
                  ],
                  correctAnswer: "The program will fail",
                  explanation: "If a program expects an integer but receives a string, it will fail because it cannot convert text into a number."
                }
              ]
            }
          }
        ]
      },
      {
        title: "Control Flow",
        lessons: [
          {
            title: "Loops",
            type: "tutorial",
            duration: "60 min",
            points: 100,
            content: "Understanding for loops and while loops in Python.",
            codeExample: `
# For loop example
for i in range(5):
    print(f"Count: {i}")

# While loop example
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1
            `
          }
        ]
      },
      {
        title: "Data Structures",
        lessons: [
          {
            title: "Arrays",
            type: "tutorial",
            duration: "30 min",
            points: 100,
            content: "Working with lists and arrays in Python.",
            codeExample: `
# List operations
numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # First element
numbers.append(6)  # Add element
numbers.pop()      # Remove last element
            `
          }
        ]
      },
      {
        title: "Advanced Concepts",
        lessons: [
          {
            title: "Functions",
            type: "tutorial",
            duration: "60 min",
            points: 100,
            content: "Creating and using functions in Python.",
            codeExample: `
# Function definition
def greet(name):
    return f"Hello, {name}!"

# Function call
message = greet("Alice")
print(message)
            `
          },
          {
            title: "Object-Oriented Programming",
            type: "tutorial",
            duration: "60 min",
            points: 100,
            content: "Introduction to classes and objects in Python.",
            codeExample: `
# Class definition
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

# Creating an object
person = Person("John", 25)
print(person.introduce())
            `
          }
        ]
      }
    ]
  },
  2: { // Machine Learning Course
    title: "Fundamentals of Machine Learning",
    modules: [
      {
        title: "Introduction to Machine Learning",
        lessons: [
          {
            title: "What is Machine Learning?",
            type: "video",
            duration: "13:16",
            content: "Understanding the basics of machine learning and its applications.",
            videoUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU", // StatQuest
            additionalResources: [
              {
                title: "Google Machine Learning Crash Course",
                url: "https://developers.google.com/machine-learning/crash-course"
              }
            ]
          },
          {
            title: "Mathematics for Machine Learning",
            type: "video",
            duration: "47:06",
            content: "Essential math concepts for machine learning.",
            videoUrl: "https://www.youtube.com/watch?v=1VSZtNYMntM", // 3Blue1Brown
            practice: "Complete the basic linear algebra exercises."
          }
        ]
      },
      {
        title: "Practical Machine Learning",
        lessons: [
          {
            title: "Your First ML Model with Scikit-learn",
            type: "tutorial",
            duration: "23:55",
            content: "Build your first machine learning model using scikit-learn.",
            videoUrl: "https://www.youtube.com/watch?v=pqNCD_5r0IU", // Sentdex
            codeExample: `
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make predictions
print(model.predict([[5]]))
            `,
            additionalResources: [
              {
                title: "Scikit-learn Documentation",
                url: "https://scikit-learn.org/stable/"
              }
            ]
          }
        ]
      }
    ]
  },
  3: { // GenAI Course
    title: "Introduction to Generative AI",
    modules: [
      {
        title: "Basics of Generative AI",
        lessons: [
          {
            title: "Understanding Generative AI",
            type: "video",
            duration: "18:42",
            content: "Introduction to generative models and their applications.",
            videoUrl: "https://www.youtube.com/watch?v=hfIUstzHs9A", // Computerphile
            additionalResources: [
              {
                title: "OpenAI Documentation",
                url: "https://platform.openai.com/docs/introduction"
              }
            ]
          },
          {
            title: "Practical Prompt Engineering",
            type: "video",
            duration: "16:03",
            content: "Learn how to write effective prompts for AI models.",
            videoUrl: "https://www.youtube.com/watch?v=_ZvnD1IkQ9Q", // Andrew Ng
            practice: "Create prompts for different use cases using ChatGPT.",
            additionalResources: [
              {
                title: "OpenAI Prompt Engineering Guide",
                url: "https://platform.openai.com/docs/guides/prompt-engineering"
              }
            ]
          }
        ]
      },
      {
        title: "Working with LLMs",
        lessons: [
          {
            title: "Introduction to Large Language Models",
            type: "video",
            duration: "22:15",
            content: "Understanding how LLMs work and their capabilities.",
            videoUrl: "https://www.youtube.com/watch?v=zjkBMFhNj_g", // Yannic Kilcher
            additionalResources: [
              {
                title: "Hugging Face Documentation",
                url: "https://huggingface.co/docs"
              }
            ]
          }
        ]
      }
    ]
  }
};

const CourseContent = () => {
  const { id } = useParams();
  const course = courseContents[id];

  if (!course) {
    return (
      <Container>
        <Typography>Course not found</Typography>
      </Container>
    );
  }

  const renderLesson = (lesson) => {
    const { id } = useParams();
    // Set different initial code based on lesson title
    const getInitialCode = (lessonTitle) => {
      switch(lessonTitle) {
        case "Hello World!":
          return `# Basic Hello World program
print("Hello World!")

# More examples
print("I am learning Python!")
print("Programming is fun!")`;
        
        case "Variables":
          return `# Basic arithmetic operations
number1 = 10
number2 = 5

# Addition
print("Addition: " + str(number1 + number2))

# Subtraction
print("Subtraction: " + str(number1 - number2))

# Multiplication
print("Multiplication: " + str(number1 * number2))

# Division
print("Division: " + str(number1 / number2))`;
        
        case "Strings":
          return `# Print a simple string
print("Hello World!")

# Working with strings and variables
x = 5
print("This is the letter: x")
print("This is the variable: " + str(x))

# Getting first letter of a string
ourString = "hi"
print(ourString[0])

# Working with substrings
question = "How are you doing"
print(question.substring(8, 13))

# Getting string length
x = "1234567"
print("String length: " + str(len(x)))`;
        
        case "User Input":
          return `# Example 1: Basic user input with password
password = input("Enter a password: ")
print(\`Password is \${password}\`)

# Example 2: Numerical input with calculation
favNumber = int(input("Enter your favorite number: "))
favNumber *= 2
print(\`Favorite Number X 2 = \${favNumber}\`)

# Example 3: Multiple inputs
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(\`Hello \${name}, you will be \${age + 1} next year!\`)`;
        
        default:
          return '# Write your code here';
      }
    };

    const [code, setCode] = useState(getInitialCode(lesson.title));
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRunCode = async () => {
      try {
        setIsRunning(true);
        setOutput('');

        const sandbox = {
          variables: {},  // Store all variables here
          str: (val) => String(val),
          len: (str) => str.length,
          print: (text) => {
            let output;
            try {
              if (typeof text === 'string' && text.includes('+')) {
                const parts = text.split('+').map(p => p.trim());
                const evaluatedParts = parts.map(part => {
                  if (part.startsWith('"') || part.startsWith("'")) {
                    return part.slice(1, -1);
                  }
                  if (part.startsWith('str(')) {
                    const varName = part.slice(4, -1).trim();
                    return String(sandbox.variables[varName]);
                  }
                  return sandbox.variables[part] || part;
                });
                output = evaluatedParts.join('');
              } else {
                output = typeof text === 'string' ? 
                  text.replace(/^["'](.+)["']$/, '$1') : 
                  String(text);
              }
            } catch (e) {
              output = String(text);
            }
            setOutput(prev => prev + output + '\n');
            return output;
          }
        };

        const lines = code.split('\n');
        
        // Process all lines
        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine.startsWith('#')) continue;

          try {
            if (trimmedLine.includes('=') && !trimmedLine.includes('print')) {
              const [varName, expression] = trimmedLine.split('=').map(s => s.trim());
              // Handle numeric assignments
              if (!isNaN(expression)) {
                sandbox.variables[varName] = Number(expression);
              }
              // Handle arithmetic operations
              else if (expression.includes('+') || expression.includes('-') || 
                       expression.includes('*') || expression.includes('/')) {
                const evalExpression = expression
                  .replace(/number1/g, sandbox.variables.number1)
                  .replace(/number2/g, sandbox.variables.number2);
                sandbox.variables[varName] = eval(evalExpression);
              }
            } else if (trimmedLine.includes('print(')) {
              const match = trimmedLine.match(/print\((.*)\)/);
              if (match) {
                const printContent = match[1];
                sandbox.print(printContent);
              }
            }
          } catch (e) {
            setOutput(prev => prev + `Error: ${e.message}\n`);
          }
        }
      } catch (error) {
        setOutput(prev => prev + `Error: ${error.message}\n`);
      } finally {
        setIsRunning(false);
      }
    };

    return (
      <Box>
        <Box sx={{ mb: 3 }}>
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        </Box>

        {lesson.codeExamples && lesson.codeExamples.map((example, index) => (
          <Paper 
            key={index}
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              mb: 2,
              '& pre': {
                margin: 0,
                overflow: 'auto'
              }
            }}
          >
            <pre>{example.code}</pre>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Output: {example.output}
            </Typography>
          </Paper>
        ))}

        {lesson.notes && lesson.notes.map((note, index) => (
          <Typography 
            key={index} 
            sx={{ 
              fontStyle: 'italic',
              color: 'text.secondary',
              mb: 2 
            }}
          >
            Note: {note}
          </Typography>
        ))}

        {lesson.additionalContent && (
          <Box sx={{ mb: 3 }}>
            <ReactMarkdown>{lesson.additionalContent}</ReactMarkdown>
          </Box>
        )}

        {lesson.codeExamples2 && lesson.codeExamples2.map((example, index) => (
          <Paper 
            key={index}
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              mb: 2
            }}
          >
            <pre>{example.code}</pre>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Output: {example.output}
            </Typography>
          </Paper>
        ))}

        {lesson.notes2 && (
          <Typography 
            sx={{ 
              fontStyle: 'italic',
              color: 'text.secondary',
              mb: 2 
            }}
          >
            Note: {lesson.notes2}
          </Typography>
        )}

        {lesson.additionalContent2 && (
          <Box sx={{ mb: 3 }}>
            <ReactMarkdown>{lesson.additionalContent2}</ReactMarkdown>
          </Box>
        )}

        {lesson.codeExamples3 && lesson.codeExamples3.map((example, index) => (
          <Paper 
            key={index}
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              mb: 2
            }}
          >
            <pre>{example.code}</pre>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Output: {example.output}
            </Typography>
          </Paper>
        ))}

        {lesson.finalContent && (
          <Box sx={{ mb: 3 }}>
            <ReactMarkdown>{lesson.finalContent}</ReactMarkdown>
          </Box>
        )}

        {lesson.codeExamples4 && lesson.codeExamples4.map((example, index) => (
          <Paper 
            key={index}
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              mb: 2
            }}
          >
            <pre>{example.code}</pre>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Output: {example.output}
            </Typography>
          </Paper>
        ))}

        {lesson.additionalContent3 && (
          <Box sx={{ mb: 3 }}>
            <ReactMarkdown>{lesson.additionalContent3}</ReactMarkdown>
          </Box>
        )}

        {lesson.codeExamples5 && lesson.codeExamples5.map((example, index) => (
          <Paper 
            key={index}
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              mb: 2
            }}
          >
            <pre>{example.code}</pre>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Output: {example.output}
            </Typography>
          </Paper>
        ))}

        {lesson.finalNotes && (
          <Typography 
            sx={{ 
              fontStyle: 'italic',
              color: 'text.secondary',
              mb: 2 
            }}
          >
            Note: {lesson.finalNotes}
          </Typography>
        )}

        {lesson.codeExamples6 && lesson.codeExamples6.map((example, index) => (
          <Paper 
            key={index}
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              mb: 2
            }}
          >
            <pre>{example.code}</pre>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Output: {example.output}
            </Typography>
          </Paper>
        ))}

        {lesson.finalContent2 && (
          <Box sx={{ mb: 3 }}>
            <ReactMarkdown>{lesson.finalContent2}</ReactMarkdown>
          </Box>
        )}

        {id === "1" && (
          <Box sx={{ mt: 3, mb: 3 }}>
            <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <CodeMirror
                value={code}
                height="200px"
                theme="dark"
                extensions={[python()]}
                onChange={(value) => setCode(value)}
              />
              <Button 
                variant="contained" 
                onClick={handleRunCode}
                disabled={isRunning}
                sx={{ mt: 2, mb: 2 }}
              >
                {isRunning ? 'Running...' : 'Run Code'}
              </Button>
              {output && (
                <Paper 
                  sx={{ 
                    p: 2, 
                    bgcolor: 'black',
                    color: 'white',
                    fontFamily: 'monospace',
                    mt: 2 
                  }}
                >
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{output}</pre>
                </Paper>
              )}
            </Paper>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />
        
        {lesson.quiz && (
          <>
            <QuizComponent quizData={lesson.quiz} />
            <Divider sx={{ my: 2 }} />
          </>
        )}

        {!lesson.quiz && (
          <Button
            variant="outlined"
            startIcon={<Quiz />}
          >
            Take Quiz
          </Button>
        )}
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        {course.title}
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1">
          Approximate Duration: {course.duration}
        </Typography>
        <Typography variant="subtitle1">
          Difficulty: {course.difficulty}
        </Typography>
        <Typography variant="subtitle1">
          Author: {course.author}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        {course.modules.map((module, moduleIndex) => (
          <Paper key={moduleIndex} sx={{ mb: 3, overflow: 'hidden' }}>
            <Typography
              variant="h6"
              sx={{
                p: 2,
                bgcolor: 'primary.main',
                color: 'white',
              }}
            >
              Module {moduleIndex + 1}: {module.title}
            </Typography>

            <Box sx={{ p: 2 }}>
              {module.lessons.map((lesson, lessonIndex) => (
                <Accordion key={lessonIndex}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {lesson.type === 'video' ? (
                        <PlayCircleOutline color="primary" />
                      ) : (
                        <Assignment color="primary" />
                      )}
                      <Typography>
                        {lessonIndex + 1}. {lesson.title}
                      </Typography>
                      <Typography variant="caption" sx={{ ml: 2, color: 'text.secondary' }}>
                        ({lesson.duration})
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {renderLesson(lesson)}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default CourseContent; 
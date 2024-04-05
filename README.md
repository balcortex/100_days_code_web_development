# 100_days_code_web_development

My progress through the 100 Days of Code Challenge to learn Full-Stack Web Development

## Day 001 - 2023/09/03

Today, I learned how The Internet works: the purpose of the routers, modems, DNS names, and IP addresses. As I am following 'The Project Odin' course, I also installed Linux as a virtual machine and the required software (VS Code, Chrome, Git). In the end, I created my very first web page.

## Day 002 - 2023/09/04

Today, I learned several things:

* The home page should be named 'index.html'.
* The head tag should not contain any element that displays content (only metadata).
* Several hierarchical headings go from h1 to h6. In addition to making the text the biggest and boldest, the h1 tag is used by search indexers to locate the most crucial information about the webpage.
* Break lines and multiple spaces are comprised into a single whitespace. The 'p' tag is used to break several paragraphs.

## Day 003 - 2023/09/05

Today, I learned how to apply visual style (bold and italics) to text. The preferred way is using "strong" and "em" because these tags also change the semantics (the way screen readers pronounce the words).

## Day 004 - 2023/09/06

Today, I learned how to list items. There are two types of lists: ordered (ol) and unordered (ul). Within the tags of the list, use the tag (li) to add an item to the list. Nested lists are allowed.

## Day 005 - 2023/09/07

Today, I learned how to link to external and internal web pages. To include a link, use the "a" tag and specify in the href attribute the destination webpage.

## Day 006 - 2023/09/08

Today I learned how to display an image on a web page. Use the <img src='' alt=''> tag to include an image. The src attribute is the path of the image (can be relative or absolute, as with links; see day 005). The alt attribute is the description of the image in case the web browser cannot render the image.

## Day 007 - 2023/09/09

Today I learned how to change the style of individual elements, using CCS inline style. The style is defined in the opening tag with the syntax <p style="">. There are many CSS properties like color, font-size, text-alignment. You can find a complete list of CSS properties at <https://www.w3schools.com/cssref/index.php>.

## Day 008 - 2023/09/10

Today I learned how to change the style of all matching elements with the internal CCS style. Instead of styling each element as inline CSS, internal CSS creates a style for all the elements sharing one tag (selector).

## Day 009 - 2023/09/11

Today I learned CSS External Style. When you have multiple pages, the use of Internal CSS would require changing each individual file. With External CSS, you only need to make the changes in one file, despite the number of pages your website has.

## Day 010 - 2023/09/12

Today I learned to mix Inline, Internal, and External CSS Styles. The resolution order is the following: Inline, Internal, and External. That means Inline CSS Style will always be applied if there are conflicting attributes.

## Day 011 - 2023/09/13

Today I learned CSS classes, which are used to group HTML elements, regardless of their type, to apply unique styling and formatting to those elements.

## Day 012 - 2023/09/14

Today I learned CSS ID selectors, which are similar to classes in the sense that they allow applying unique styling to an element. Still, IDs can be applied just to a single element.

## Day 013 - 2023/09/15

Today I learned about the Box Model. Every element in HTML has a box around it. By default, block boxes match the parent's width, whereas inline boxes shrink their size to the content.

## Day 014 - 2023/09/16

Today I learned the CSS display property, which allows to change the default positioning of the element on the same line (inline) or in a new line (block).

## Day 015 - 2023/09/17

Today I learned the parts of the CSS Box Model: margin, border, padding, and content. These properties allow us to fine-control the elements' position on the page.

## Day 016 - 2023/09/18

Today I learned the two types of Box Model that CSS uses. The size calculations are more complex in the standard model (default); in contrast, in the alternative model (preferred) the actual size is the declared one.

## Day 017 - 2023/09/19

Today I learned about positive and negative margins. Use positive margins to create space between elements and negative margins to narrow the distance between elements.

## Day 018 - 2023/09/20

Today I learned about collapsing margins. Two adjacent margins with the same sign are combined into the greatest one (the farthest from zero). This property only applies to vertical margins.

## Day 019 - 2023/09/21

Today I learned how to customize borders. To style a border, you need to specify the width, line style, and color values. You can use any combination of values for each border on the element.

## Day 020 - 2023/09/22

Today I learned about the padding property, which changes the space between the border and the content. Contrary to the margin property, padding does not accept negative values.

## Day 021 - 2023/09/23

Today I learned the inline-block value for the display property. The inline-block behaves like an inline element, but its size can be changed.

## Day 022 - 2023/09/24

Today I learned about the Normal Flow, the standard way to put elements on the page (top to bottom and right to left). This mode only allows us to create very basic web pages

## Day 023 - 2023/09/25

Today I learned about the flexbox layout mode, which is a mode that re-arranges a group of elements into rows or columns that can grow or shrink based on the available space.

## Day 024 - 2023/09/26

Today I learned how to grow items in the flexbox layout mode, which is done using the property flex-grow. If all items have the same value, they will have the same width.

## Day 025 - 2023/09/27

Today I learned how to shrink items in the flexbox layout, which is controlled by the property flex-shrink. You can prevent a particular item from shrinking by setting a value of 0.

## Day 026 - 2023/09/28

Today I learned the flex-basis property, which defines the item's size before the extra space is distributed. It behaves similarly to the width property (almost always).

## Day 027 - 2023/09/29

Today I learned the flex-direction property, which places the items in a row (default) or in a column (like a list, but fancier).

## Day 028 - 2023/09/30

Today I learned the justify-content property, which controls the items' position when they are not allowed to grow. The default value is flex-start, which places the items at the left.

## Day 029 - 2023/10/01

Today I learned the justify-content property applied when the flex-direction is set to column, which sets the position of the items along the y-axis (instead of the x-axis for row direction).

## Day 030 - 2023/10/02

Today I learned the align-items property applied when the flex-direction is set to row, which moves the items along the y-axis (the position on the x-axis is set with justify-content).

## Day 031 - 2023/10/03

Today I learned the align-items property applied when the flex-direction is set to column, which moves the items along the x-axis (the position on the y-axis is set with justify-content).

## Day 032 - 2023/10/04

Today I learned about flex container main and cross axis, which is why justify-content behaves differently when the value of flex-direction is row or column.

## Day 033 - 2023/10/05

Today I learned about the flex-wrap property, which controls whether the items can span multiple lines if they don't fit the container.

## Day 034 - 2023/10/06

Today I learned the align-content property, which, as the align-items property, controls the items' position on the cross axis. Still, this property needs the container to allow wrapping.

## Day 035 - 2023/10/07

Today I learned the gap property on the flexbox layout, which sets the space between items. The gap space is immutable (i.e., does not grow or shrink).

## Day 036 - 2023/10/08

Apparently, I already know the basics to build my first web page, so I was given my first major task: designing (by imitation) a web page. My first approach was to define the main sections.

## Day 037 - 2023/10/09

Today I worked on the header section of the webpage. I used an unordered list (without bullets) with the flexbox layout and set the margin-left to auto on the header-logo item to separate it from the links

## Day 038 - 2023/10/10

Today I worked on the hero section (title, button, and image). I used a div container with the flexbox layout to separate the text and the image. For the text, I used h1, p, and button tags.

## Day 039 - 2023/10/11

Today I worked on the information section. This section uses an h2 and a div (flexbox container) as the main elements. Inside the container are four divs, each with a p and img tags.

## Day 040 - 2023/10/12

Today I worked on the quote section. This section was the simplest of all, containing only two p tags. I added a little CSS animation to make it more fun.

## Day 041 - 2023/10/13

Today I worked on the action section. This section is a flex container with two elements. The first is a div containing an h4 and p tags; the other is a button.

## Day 042 - 2023/10/14

Today I worked on the final section, the footer. This section was more straightforward than the quote section, containing a p and an a tag. It was fun working on a large project

## Day 043 - 2023/10/15

Today I started learning JavaScript, the third layer of the current standard web technologies. JavaScript is a programming language that "makes pages alive."

## Day 044 - 2023/10/16

Today I made my first JavaScript program, which prints "Hello World!" to the console. This is done by the function console.log().

## Day 045 - 2023/10/17

Today I learned how to dynamically change text using JavaScript. First, use the document.querySelector() method, and then use the textContent property on the returned element.

## Day 046 - 2023/10/18

Today I learned how to display alert boxes with the alert() method and call functions when a button is pressed with the button's onclick attribute.

## Day 047 - 2023/10/19

Today I learned how to declare and use variables in JavaScript. I used a variable to count the times a button has been pressed.

## Day 048 - 2023/10/20

Today I learned the syntax of the IF statement in JavaScript. I made a program that compares the user input using an IF statement.

## Day 049 - 2023/10/21

Today I learned the difference between the IF and the SWITCH conditionals. The SWITCH is preferred when a list of predefined options is provided.


## Day 050 - 2023/10/22

Today I learned some advanced methods to log information in JavaScript. Besides console.log(), the info, warn, and error methods also display information on the console

## Day 051 - 2023/10/23

Today I learned about the data types in JavaScript: Number, String, Boolean, BigInt, undefined, null, Symbol, and Object. To find the type a of variable use the operator typeof.

## Day 052 - 2023/10/24

Today I learned about the plus operator in JavaScript. For numbers, it performs the sum; for strings, it performs a concatenation.

## Day 053 - 2023/10/25

Today I learned about implicit casting using the plus operator. Use + in front of a string (numeric string) to convert it to a numeric type.

## Day 054 - 2023/10/26

Today I learned how to use the debugger, which is a tool that allow us to pause the program and inspect the variables in real time.

## Day 055 - 2023/10/27

Today I learned how to declare arrays in JavaScript. To declare an array,  use square brackets and values separated by commas.

## Day 056 - 2023/10/28

Today, I learned how to add elements at the end of an array using the push method and remove the last element using the pop method.

## Day 057 - 2023/10/29

Today, I learned about other array methods. The toString() and join() methods convert the array to strings, and the slice() method selects a sub-array.

## Day 058 - 2023/10/30

Today I learned about the for loop and how to use it to loop over the items of an array.

## Day 059 - 2023/10/31

Today I learned how to loop over array items using the for ... of, and the for ... in loops. The first one iterates over values, while the last iterates over indices.

## Day 060 - 2023/11/01

Today I learned about the forEach method of the Array objects, which receives a callback function as a parameter and executes it for each item.

## Day 061 - 2023/11/02

Today I learned that functions are like values in JavaScript (a special kind tho). Also, I learned how to declare default arguments in function definitions

## Day 062 - 2023/11/03

Today I learned how to create functions using the definition and the expression syntax. You should almost always use function definition tho.

## Day 063 - 2023/11/04

Today, I learned the advantages of function expressions over function definitions: they can be unnamed and immediately invoked after creation.

## Day 064 - 2023/11/05

Today I learned another feature of function expressions: arrow functions. This type of function syntax is concise and clear and often preferred for simple functions

## Day 065 - 2023/11/06

Today I learned about the DOM and how to target elements on the DOM using the document.querySelector() method.

## Day 066 - 2023/11/07

Today I learned how to change the text content of elements on the DOM using the textContent property.

## Day 067 - 2023/11/08

Today I learned how to add inline style to elements using JavaScript, which is done using the element's style property.

## Day 068 - 2023/11/09

Today I learned how to change all the elements of a specific selector using the document.querySelectorAll() and a for loop.

## Day 069 - 2023/11/10

Today I learned to add, remove, and toggle classes to elements using the classList's add(), remove(), and toggle() methods. This approach is cleaner than adding inline style.

## Day 070 - 2023/11/11

Today I learned to create and add new elements to the DOM using the document.createElement() and the [parentNode].appendChild() methods.

## Day 071 - 2023/11/12

Today I learned to remove elements from the DOM and attributes (id, class, style) from specific elements, using the parentNode.removeChild() and the node.removeAttribute() methods.

## Day 072 - 2023/11/13

Today I learned how to perform actions (i.e., execute functions) using an element's on[action] attribute.

## Day 073 - 2023/11/14

Today, I learned how to add event listeners using JavaScript by setting the onclick property of a node element. This approach is preferred over using the element attribute on the DOM.

## Day 074 - 2023/11/15

Today I learned to add event listeners to handle events using JavaScript. One advantage of this approach is that multiple listeners can be attached to the same event

## Day 075 - 2023/11/16

Today I learned that an event variable is passed to the event listener's function as an argument. This variable contains information about the event itself, such as its type and source.

## Day 076 - 2023/11/17

Today I learned how to attach an event listener to a group of nodes using the forEach() method. This task is straightforward, no matter the number of items in the group.

## Day 077 - 2023/11/18

Today I learned about event bubbling. If there are nested elements with listeners attached, triggering the event in the child will also start the event in the parent.

## Day 078 - 2023/11/19

Today I learned about capture and trigger events. By default, events are captured from the parents to the children and triggered in reverse, from the children to the parents.

## Day 079 - 2023/11/20

Today I learned how to change the trigger order of nested events to match the capture order. To do this, pass `true` as the third argument while adding the event listener.

## Day 080 - 2023/11/21

Today I learned how to stop event propagation in nested elements using the reference to the event itself in the listener's function and calling the method event.stopPropagation().

## Day 081 - 2023/11/22

Today, I started a little project of a 'Rock, Paper, Scissors' webpage, allowing you to play the game against the computer. On the first day, I made the basic UI.

## Day 082 - 2023/11/23

Today, I made the function that plays the role of the computer enemy, which randomly selects a choice every time the user clicks a button.

## Day 083 - 2023/11/24

Today, I made the actual game logic, which checks whether the player wins or loses, or whether there's a draw, based on the player's and computer's selections.

## Day 084 - 2023/11/25

Today I wrote the code that keeps track of the score, announces the winner after five won rounds, and finally disables the button once the game ends.

## Day 085 - 2023/11/27

Today I changed the text buttons for image buttons to enhance the visuals. The buttons have round corners and change color on hover and active actions.

## Day 086 - 2023/11/28

Today, I changed the UI to display the selection as an image, not just text. I only wrote the HTML this day, so the image is fixed for now.

## Day 087 - 2023/11/29

Today I wrote the code that displays the image of both players' selections. Also, the loser image has less opacity to identify the round winner quickly.

## Day 088 - 2023/12/01

Today I finished the `Rock, paper, scissors` project by adding CSS code. I mainly used flexbox to center the divs and buttons.

## Day 089 - 2023/12/05

Today I started a new project, a simple webpage that allows the creation of a shopping list. On the first day, I worked on the UI and the logic of the adding process.

## Day 090 - 2023/12/06

Today I made a few changes to the shopping list webpage that enhance the user experience, like allowing the use of the enter key and clearing the typing box when an item is added.

## Day 091 - 2023/12/07

Today I added two more features to the shopping list webpage: marking items as completed and deleting items.

## Day 092 - 2023/12/09

Today, I added a new functionality to the list: when the items are marked as done, they are moved to the end (and vice versa).

## Day 093 - 2023/12/11

Today I added two buttons that allow the user to move up/down any item in the list.

## Day 094 - 2023/12/12

Today, I added the functionality for editing the items on the list. I used an input text box and two event listeners: keypress and blur. The last one is executed when the element loses focus.

## Day 095 - 2023/12/13

Today was the final day of the shopping list project; I worked on the visuals and replaced the buttons with custom icons.

## Day 096 - 2023/12/15

Today I started learning JavaScript objects. Objects are a keyed collection of data; that is, objects can store many things, which are retrieved by their key (name).

## Day 097 - 2023/12/17

Today I learned the difference between dot and square bracket notation regarding JavaScript objects. The latter is more powerful but complex and cumbersome to write.

## Day 098 - 2023/12/18

Today I learned the property value shorthand functionality and that all property names are converted to strings regardless their type.

## Day 099 - 2023/12/20

Today I learned how to test for properties existence using the `in` operator and the comparison to `undefined`. Also, I learned how to loop over all the keys and properties using a for...in loop.

## Day 100 - 2023/12/21

Today, I learned how the object keys are sorted: integer keys will appear at the top in ascending order, and the rest will appear next in creation order.

## Day 101 - 2023/12/23

Today I learned how to declare object methods and the use of `this` to refer to the object itself within the object code.

## Day 102 - 2023/12/26

Today, I learned about constructors, which are functions used to create, instantiate, and return objects. To call a function as a constructor, use the keyword `new`.

## Day 103 - 2023/12/27

Today I started another small project: a basic calculator. The first thing I did was the placement of the buttons on the HTML document.

## Day 104 - 2023/12/28

Today I worked on improving the layout using CSS. I used flex containers to distribute the buttons evenly.

## Day 105 - 2023/12/29

Today, I started working on the JS document. The first thing I did was to have the number buttons work correctly, showing the number on the screen.

## Day 106 - 2023/12/30

Today I added support for the sum and equals buttons

## Day 107 - 2024/01/02

Today I fixed the issue of the screen clearing itself after the user selects the operator

## Day 108 - 2024/01/03

Today I added the support for all the operators (addition, subtraction, multiplication and division)

## Day 109 - 2024/01/04

Today I added support for the decimal point button and fixed the overflow of float numbers on the screen

## Day 110 - 2024/01/05

Today I added the delete, clear, and clear all buttons.

## Day 111 - 2024/01/07

Today I added support for thousand-separated numbers on screen.

## Day 112 - 2024/01/08

Today I learned the basics of HTML tables—the table, tr (table row), and td (table data) tags.

## Day 113 - 2024/01/10

Today I learned about the `th` element (table header) and how to style entire rows.

## Day 114 - 2024/01/12

Today I learned how to define columns in HTML tables to apply style, using the colgroup element.

## Day 115 - 2024/01/15

Today I learned how to allow a cell to span multiple columns (colspan) and multiple rows (rowspan)

## Day 116 - 2024/01/16

Today I learned how to include a title in the table with the < caption> element and to structure the table with the < thead>, < tbody>, and < tfoot> elements.

## Day 117 - 2024/01/18

Today I learned about the two types of CSS units: absolute and relative. Absolute units remain consistent no matter the screen. px (pixel), cm, and in are the most used.

## Day 118 - 2024/01/20

Today I learned about relative units,w which scale according to a reference element. The `em` unit refers to the parent's font size

## Day 119 - 2024/01/22

Today I learned the difference between the `em` and the `rem` units. The `em` relates to the parent, while the `rem` relates to the root element.

## Day 120 - 2024/01/23

Today I learned about the viewport units (vh and vw), which resize an element based on the page size (the document's visible part).

## Day 121 - 2024/01/24

Today I learned the percentage unit, which relates a specific property of the element to that of the parent through a percentage.

## Day 122 - 2024/01/25

Today I learned about the fallback fonts, and how to use online and downloaded fonts.

## Day 123 - 2024/01/26

Today I learned how to use italics (and other font styles) in CSS and to change the space between letters using the letter-spacing attribute.

## Day 124 - 2024/01/27

Today I learned to increase the space between lines of text, transform the case of a given text, and to add a shadow to any text.

## Day 125 - 2024/01/29

Today I learned about the overflow property. If the content is too big to fit the element, you can select its behavior, like adding scrollbars or clipping the content.

## Day 126 - 2024/01/30

Today I learned about three advanced CSS selectors: the child, the adjacent sibling, and the general sibling combinators.

## Day 127 - 2024/01/31

Today I learned about pseudo-classes, which allow us to apply CSS rules to elements in a specific state (like if the mouse is over it)

## Day 128 - 2024/02/01

Today I learned about the pseudo-elements, which apply CSS rules to HTML code that aren't elements at all. For instance, the ::first-letter selector.

## Day 129 - 2024/02/02

Today I learned attribute selectors, which target elements based on the existence of an attribute or on a specific attribute's value.

## Day 130 - 2024/02/03

Today I learned about the position property, which specifies how an element is set on the document.

## Day 131 - 2024/02/06

### CSS Functions

Today I learned about CSS functions. They work the same as other programming language functions, except they come predefined (the user cannot create new ones).

## Day 132 - 2024/02/07

### CSS Variables - Pt. 1

Today, I learned about CSS custom properties (or CSS variables), which allow us to define a single property and reuse it however many times we need throughout the document.

## Day 133 - 2024/02/08

### CSS Variables - Pt. 2

Today I learned about the scope of custom properties (CSS variables) and using the :root selector to declare global variables.

## Day 134 - 2024/02/09

### CSS Variables - Pt. 3

Today I learned how to create custom themes (light and dark) using custom properties and the :root selector.

## Day 135 - 2024/02/10

### HTML Input Elements - Pt. 1

Today, I learned about the input element, which allows the user to enter information to be used later on the page.

## Day 136 - 2024/02/12

### HTML Input Elements - Pt. 2

Today I learned about the types of inputs, like text, password, and date.

## Day 137 - 2024/02/13

### HTML Input Elements - Pt. 3

Today, I continued learning about other input types: radio buttons, checkboxes, color pickers, and range sliders.

## Day 138 - 2024/02/14

### HTML Input Elements - Pt. 4

Today, I learned about other elements used for user input, the textarea and the select elements.

## Day 139 - 2024/02/15

### HTML Input Elements - Pt. 5

Today, I learned about the fieldset and legend elements, which allow us to group input elements logically and visually.

## Day 140 - 2024/02/16

### HTML Web Forms - Pt. 1

Today, I learned about the form element, which wraps all the user inputs and is responsible for sending them to the server.

## Day 141 - 2024/02/17

### HTML Web Forms - Pt. 2

Today I learned about the name attribute, a crucial element in forms. If an input does not have a name, it will be ignored when sending the form.

## Day 142 - 2024/02/21

### HTML Web Forms - Pt. 3

Today I learned about form validation, starting with the `required` attribute, which forces the user to fill in a field.

## Day 143 - 2024/02/22

### HTML Web Forms - Pt. 4

Today I learned about the minimum text length validation, which prevents the user from inputting less than a desired number of characters.

## Day 144 - 2024/02/23

### HTML Web Forms - Pt. 5

Today I learned about the maximum length validation, which will directly prevent the user from entering more than the specified characters.

## Day 145 - 2024/02/24

### HTML Web Forms - Pt. 6

Today I learned about number range validation, which allows us to control the minimum and maximum numerical values (time and dates too) the user can enter.

## Day 146 - 2024/02/25

### HTML Web Forms - Pt. 7

Today I learned about pattern validation. This type of validation is more complex as it uses regular expressions (regex).

## Day 147 - 2024/02/26

### HTML Web Forms - Pt. 8

Today, I learned about styling validations, which is very helpful for giving direct feedback to the user on which fields he has the wrong data.

## Day 148 - 2024/02/27

### CSS Grid - Pt. 1

Today, I learned about Grid, a layout tool that allows easy placement of elements into a two-dimensional pattern (it works in one dimension too).

## Day 149 - 2024/02/28

### CSS Grid - Pt. 2

Today, I learned how to specify the number and width of columns in a grid layout using the grid-template-columns property.

## Day 150 - 2024/02/29

### CSS Grid - Pt. 3

Today I learned about the grid-template-rows property to specify the height of the rows on the grid layout.

## Day 151 - 2024/03/01

### CSS Grid - Pt. 4

Today, I learned about the implicit grid concept for rows, which makes the automatic placing of new items into the necessary rows.

## Day 152 - 2024/03/02

### CSS Grid - Pt. 5

Today I learned how to change the placement direction of items in the grid with the grid-auto-flow property.

## Day 153 - 2024/03/04

### CSS Grid - Pt. 6

Today I learned about the Grid's gap property, which allows us to set the distance between rows and columns.

## Day 154 - 2024/03/05

### CSS Grid - Pt. 7

Today I learned about grid lines and how to use them to position items on the grid. For example, you can make a item span multiple columns

## Day 155 - 2024/03/06

### CSS Grid - Pt. 8

Today I learned about the grid-row properties, which allow us to vertically position an item on the grid.

## Day 156 - 2024/03/08

### CSS Grid - Pt. 9

Today, I learned about the span keyword, which is an easy syntax for specifying how tall/wide an item should be without counting the grid lines.

## Day 157 - 2024/03/10

### CSS Grid - Pt. 10

Today, I learned how to position the items in the grid using the grid-template-areas property, which acts as a blueprint for the final layout.

## Day 158 - 2024/03/13

### CSS Grid - Pt. 11

Today, I learned about the repeat function in the grid layout, which helps define repeating patterns, eliminating the need to specify each track size.

## Day 159 - 2024/03/15

### CSS Grid - Pt. 12

Today I learned about grid fractional units (fr), which make the size of the cells dynamic.

## Day 160 - 2024/03/18

### CSS Grid - Pt. 13

Today I learned how to use the min() and max() functions to specify size limits on the grid tracks.

## Day 161 - 2024/03/19

### CSS Grid - Pt. 14

Today, I learned about the minmax() function, which is a grid-exclusive function to set both the minimum and maximum of a grid track

## Day 162 - 2024/03/24

### CSS Grid - Pt. 15

Today, I learned about the clamp() function, which lets us specify three values: the minimum, the ideal, and the maximum size value of an item.

## Day 163 - 2024/03/26

### CSS Grid - Pt. 16

Today I learned about the auto-fit value of the repeat() function, which gives the grid a flexible number of columns based on its size. 

## Day 164 - 2024/03/27

### CSS Grid - Pt. 17

Today I learned the difference between auto-fit and auto-fill. When using minmax(), the former will always stretch the items to fit the entire container.

## Day 165 - 2024/03/30

### JavaScript: The Prototype - Pt 1

Today I learned about the prototype, which is like a parent object. All objects that inherit from the prototype have access to all its methods and properties

## Day 166 - 2024/04/01

### JavaScript: The Prototype - Pt 2

Today I learned that defining methods in the prototype helps us save memory because the method is created only once and not in every object like in the constructor

## Day 167 - 2024/04/03

### JavaScript: The Prototype - Pt 3

Today I learned that all objects share the Object.prototype as their last prototype. That means all objects can access the methods on the Object.prototype

## Day 168 - 2024/04/04

### JavaScript: The Prototype - Pt 4

Today I learned how to change an object's prototype, which allows us to modify the inheritance hierarchy

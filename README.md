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
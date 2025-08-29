1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   **Answer 1**
   `getElementById` `getElementsByClassName` `and querySelector / querySelectorAll` All of these are functions to access DOM Element. But there are few differences between them.

## getElementById

We use getElementById to select a single DOM Element with it's ID. Every single HTML Element should have a unique ID. So if we need to get an element we use getElementById.
e.g. if we I want to select a button with it's ID I will write the following code.
const button = document.getElementById("buttonIDhere")

## getElementsByClassName

`getElementsByClassName` We use this function to access DOM Elements by their class name. Multiple DOM Elements can have the same class name. So if we need to select all the elements which have the same class We use getElementsByClassName. getElementsByClassName give us a HTML COLLECTION. HTML COLLECTION is an array like object. It has index like array but we can't perform all the functions and methods that can be performed on an array. But it is possible to convert this HTML COLLECTION to an array using Array.from(). Then I can use it as an array.

## querySelector

querySelector is used to access DOM Elements. But instead of just class name or id we have to put a `#` for id and `.` for class name and for tag name we can simply write the tag name inside quotes. This is kind of CSS SELCETORS.
And it only gives one element at a time. If multiple elements have the same class name or tag name then it will give us the first element with that id or name.

## querySelectorAll

The process is similar with `querySelector` to access DOM Elements with `querySelectorAll`. But the key difference between them is that `querySelectorAll` gives us a NODE LIST. NODE LIST is also an array like object. And instead of giving one element at a time like `querySelector` it gives all elements in node list.

2. How do you **create and insert a new element into the DOM**?
   **dAnswer 2**
   <!-- create -->
   To create an HTML Element using DOM We have to use `createElement` function. Inside function argument we have to pass the tag name of the element that we want to create.
   e.g. const paragraph = document.createElement("p")

<!-- Insert Element to dom -->

WE can insert that paragraph element to a parentobject.
e.g. parentObject.appentChild(paragraph)
Now we have a new paragraph element in our html.

3. What is **Event Bubbling** and how does it work?
   **Answer 3**
   Event Bubbling is a feature of DOM that bubbles up an event to the parent element till the last parent (window). It means any event happend to an element the event goes up to his parent elements. So if we have an event to an element inside an window then we also have the same event on the window.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   **Answer 4**
   Event `Delegation` is a feature to addEventListener in an efficient way. If we have many child element and we need to catch event on these child element then instead of adding event listener to all the child element individually, we can add event listener to the parent object. Because we know event bubbles up to it's parent element. So adding event listner to the parent element and using `event.target` we can get that child which is trigered on that event.

So instead of using 100 event listener we can get that 100 child by adding event listener to their parents.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   **Answer 5**

## preventDefauld()

`preventDefault()` is used to stop the default behaviour of browser when any event happens.
e.g. form auto submit. if we have a button inside form and it has a click event it automatically submit the form. So if we don't want to submit the form automatically then we use `preventDefault()`

## stopPropagation()

`stopPropagation()` this function is used to stop event bubbling. By default event bubbles up to his parent element. But if we don't want the event to bubbles up we use `stopPropagation()`. It doesn't let the event go to the parent.

## difference

. preventDefault() to stop the default action of the browser
. stopPropagation() to stop event bubbling

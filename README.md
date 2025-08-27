### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### Ans:

getElementById used for find a element by it's unique id.

getElementsByClassName used for finding all the elements with a specific class name.

querySelector used for find the first element that matches a CSS selector. This selector can be an id, class, and attributes.

querySelectorAll used for finding all the elements that match a CSS selector. This is also similar to the querySelector, it supports like id, class and attributes.


### 2. How do you create and insert a new element into the DOM?

#### Ans:

I create a element using document.createElement method. Then i just add text using innerText or attributes to it like class or id. and finally, i insert it by using appendChild method.


### 3. What is Event Bubbling and how does it work?

#### Ans:

Event bubbling is when an event occurs for an example a click event. It's starts with the main target element and eventually moves up to it's parents elements, grandparents elements, and so forth until it reaches the document.


### 4. What is Event Delegation in JavaScript? Why is it useful?

#### Ans:

Event delegation is instead of adding event listeners to many individual elements, one listener is added to their parent to handle events for all children. So, when a child element is clicked, the event bubbles up to the parent element. and the parents event listener handles it.

This is useful because it improves performance, and automatically works with new elements that are added later on.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

#### Ans:

preventDefault() method stops browsers default actions. For an example it stop from submitting.

And stopPropagation() method stops the event from bubbling up to its parent elements.
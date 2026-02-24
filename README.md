**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
1)getElementById means select one element by using id.
2)getElementsByClassName means select multiple elements by using class name (HTMLCollection).
3)querySelector means select first matching one element by using CSS selector.
3)querySelectorAll means select all matching elements by using CSS selector (NodeList).
 
**2. How do you create and insert a new element into the DOM?**
let newChild = document.createElement("div"); ------> it can be div, p, li, h1... or anynone tag.
document.body.appendChild(newDiv);
And also I can set the innerText or innerHtml on that child.

**3. What is Event Bubbling? And how does it work?**
1)Event Bubbling means when you click on a child element, the event first runs on that element, then moves up to its parent, then to grandparent until it reaches document.
2)It works:
i)You click the button
ii)Event runs on the button
iii)Then it goes to its parent
iv)Then goes up to body
v)Then to document
It keeps moving upward.
 
**4. What is Event Delegation in JavaScript? Why is it useful?**
1)Event Delegation means instead of adding addEventListener to many child elements, add one addEventListener to their parent, and handle events using event bubbling.
2)It is usefull because:
i)One event listener instead of many.
ii)Works for new elements which is added later.
iii)Less repetation.
 
**5. What is the difference between preventDefault() and stopPropagation() methods?**
preventDefault() ------> Stops browser default action.
stopPropagation() -----> Stop event moving to parent (event bubbling).

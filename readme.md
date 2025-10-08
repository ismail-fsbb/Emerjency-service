### [Live Demo](https://ismail-fsbb.github.io/Emerjency-service/)

###  1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
- **getElementById("id")**  
  - Selects a single element by its unique ID.  
  - Returns one element or `null` if not found.  

- **getElementsByClassName("class")**  
  - Selects all elements with the given class.  
  - Returns a live HTMLCollection (like an array).  

- **querySelector("selector")**  
  - Selects the **first element** that matches a CSS selector.  
  - Returns one element or `null`.  

- **querySelectorAll("selector")**  
  - Selects **all elements** that match a CSS selector.  
  - Returns a NodeList (array-like, can loop with `forEach`). 

**Example:**
```js
const  title  =  document.getElementById('main-title');
const  cards  =  document.getElementsByClassName('card');
const  firstCard  =  document.querySelector('.card');
const  allCards  =  document.querySelectorAll('.card');
```
### 2.  How  do  you  create  and  insert  a  new  element  into  the  DOM?
-  **getElementsByClassName("class")**
	-  Selects all elements with the given class.
	-  Returns a live HTMLCollection.
```js
const newDiv = document.createElement('div');
newDiv.textContent = "Hello, I am new!";
newDiv.className = "my-div";
document.body.appendChild(newDiv);
```
### 3.  What is Event Bubbling and how does it work?
Event Bubbling is when an event on an element **propagates up** through its parent elements automatically.
**Example:** button inside a div => click triggers button first, then div, then body.
```js
document.getElementById('parent').addEventListener('click', () => alert('Parent clicked'));
document.getElementById('child').addEventListener('click', () => alert('Child clicked'));
```
**Click child** => first "Child clicked", then "Parent clicked".
### 4.  What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is adding a **single event listener to a parent element** to handle events on its children.
### 5.  What is the difference between **preventDefault() and stopPropagation()** methods?
-  **preventDefault()**
	-  Stops the browser's **default behavior**
-  **stopPropagation()**
	-  Stops the event from **bubbling** up to parent elements

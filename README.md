This is the repoistry for learning react 
ALL the component name should be capitilized
# Hooks in React 
Hooks are used to give functional components an access to use the states and are used to manage side-effects in React. They let developers use state and other React features without writing a class 
useState is used to update the value of the variable so we can update value of at any 
useState returns the array with variable at 0 index and function at index 1

let [count,setCount] = useState(12);
useCallback
useEffect:- it reruns the function inside whenever the page is reloaded or the any change occurs in the dependicies
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useContext hook is a way to manage state globally helps us in avoiding prop drilling
# virtual-dom , react fibre 
https://github.com/acdlite/react-fiber-architecture
# Props
React allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component.
React does tasks in batches so for  multiple useState funtions  it performs a single task 
while passing the props always remember to check the case for the null
# ReactJS Fragments
<Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.



# JAVASCRIPT
onClick function requires a callback function 
const d = new Date(); // to get the current Date
d.getFullYear() : used to get the current year
d.getMonth()  : used to get the currrent Month

The export declaration is used to export values from a JavaScript module

In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some operation
IN ES6 and later versions of javaScript ,curly braces {} are used in import statements to selectively import named export from modules.

trim in javascript is used to remove whitespace from both end of the string

An interface in javascript is a way of defining and enforcing a set of rules of an object or a class.Interface are not in built feature of javascript.
URLSearchParams is a interface in jacascript that provide utlity methods to work with the query string of a URL 

Difference between require and import in JavaScript is that require is a feature of CommonJS, a module system for Node.js, while import is a part of ES6.

CommonJS and ES6 modules are two different ways of defining and using modules in JavaScript.
Syntax: CommonJS uses the require() function to import modules and module.exports or exports object to export modules. ES6 modules use the import and export keywords to import and export variables, functions, classes, etc.

Loading: CommonJS modules are loaded synchronously, meaning that the code execution is blocked until the module is loaded. ES6 modules are loaded asynchronously, meaning that the code execution can continue while the module is being loaded.

Compatibility: CommonJS modules are the default module system in Node.js and are supported by most JavaScript environments. ES6 modules are the standard module system in modern browsers and require a transpiler or a bundler to work in Node.js or older browsers.

Scope: CommonJS modules have a function scope, meaning that the variables and functions declared in a module are only visible within that module. ES6 modules have a file scope, meaning that the variables and functions declared in a module are visible to the whole file. 

# Redux 
redux is a state management library for javascript applications.It provides predictable state container that helps in managing the state of applications

STORE:-It is a single immutable state tree that represents the entire state of an application. Created by using the createStore function

Reducers:- It is a pure functions that specify how the applications state changes in response to an action reducer is created in createSlice which contains name,initial state and reducer

Dipatch:- It is a function used to send actions to the redux store 

Selectors:- IT is a function used to extract specific pieces of from the store 

Redux follows a unidirectional data flow,making it easier to understand data changes occur in the applications

# TypeScript
interface : in typescript it is a way to define the contract that an object should follow. It specifies names and types of properties that an object should have.
# tailwind css
leading : line height refer the height between each line
# Next js
server action in next js are asynchronous functions that run only on the server but can be invoked from server-side and client-side componenets to perform mutaions on the server
you can't use async and await in the client components in next js
# Miscellaneous
DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.env object.



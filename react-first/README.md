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



# JAVASCRIPT
onClick function requires a callback function 
const d = new Date(); // to get the current Date
d.getFullYear() : used to get the current year
d.getMonth()  : used to get the currrent Month

The export declaration is used to export values from a JavaScript module

In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some operation

# Redux 
redux is a state management library for javascript applications.It provides predictable state container that helps in managing the state of applications

STORE:-It is a single immutable state tree that represents the entire state of an application. Created by using the createStore function

Reducers:- It is a pure functions that specify how the applications state changes in response to an action reducer is created in createSlice which contains name,initial state and reducer

Dipatch:- It is a function used to send actions to the redux store 

Selectors:- IT is a function used to extract specific pieces of from the store 

Redux follows a unidirectional data flow,making it easier to understand data changes occur in the applications

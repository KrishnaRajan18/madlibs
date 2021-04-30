### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components

- What is Babel?

  - Babel is a Javascript compiler that converts newer javascript code such as JSX into a backwards compatible version of javascript that can be used by most browsers.

- What is JSX?
  - JSX stands for JavaScript XML. ... JSX makes it easier to write and add HTML in React.
- How is a Component created in React?

- What are some difference between state and props?

  - "props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.

- What does "downward data flow" refer to in React?

  - Downward data flow in React refers to the passing down of data from parent components to its children. This includes state and prop variables.

- What is a controlled component?

  - A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange . A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component

- What is an uncontrolled component?

  - A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it

- What is the purpose of the `key` prop when rendering a list of components?

  - React's key prop gives you the ability to control component instances. Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it keeps those components/DOM nodes around, even if all\* the props changed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  - Using an array index is a poor choice because it can lead to unstable behavior from the component, for instance if the array is altered by reordering it or adding/removing from it, it can impact the desired performance of the component.

- Describe useEffect. What use cases is it used for in React components?

  - useEffect is a React hook that allows the user to run "side effects" such as calling an API, starting a timer, or manually changing the DOM.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  - useRef creates a mutable reference object whose value is set to whatever is passed to it. The object persists throughout the life of the parent component and does not cause a rerender of the component if the ref value is changed

- When would you use a ref? When wouldn't you use one?

  - You would want to use a ref when making changes directly to a DOM element without causing a rerender, such as managing focus. You would not want to use refs when using class-based components.

- What is a custom hook in React? When would you want to write one?
  - A custom hook is a user-defined hook similar to useState or useEffect that can be used across multiple components.Building your own Hooks lets you extract component logic into reusable functions.

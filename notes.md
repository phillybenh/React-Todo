**Class Components**

[React.Component](https://reactjs.org/docs/react-component.html)
[React Functional Components vs. Class Components](https://www.andreasreiterer.at/react-functional-components/)
[SyntheticEvent](https://reactjs.org/docs/events.html)
[Handling Events](https://reactjs.org/docs/handling-events.html)


* Class Components in React are the same as class componens in JS Classes
    * React comes with a constructor class called Component
    * the *base component* has a bunch of built in functionality
    * extend the base react classes in the react library
    * Render function is very important
    * *Class components can hold state*

* prior to this lesson, we've used functional components for making DOM elements
* we’re going to be learning about the `React.Component` base class that allows us to use some of the methods that the React team has curated to tap into what we call the *Component Lifecycle* 
* using life cycle hooks we control how our components work and if we want to use them we need to `extend` the `React.Component` parent class
    * example: `class FooComponent extends React.Component {}`

* steps:
    1) Declare your class component by extending the `React.Component` parent class
    2) Use the constructor function to set up some state. because we’re calling `extends`, we also need to call `super()`; otherwise we won’t have access the `this`
    3) We need to render some sort of UI to the DOM. We do this by calling the life-cycle method `render`

    **Creedence Clearwater Revival (CCR): Class, Constructor, and Render/Return.**

* Basic component example:
    ```
    class FooComponent extends React.Component {
        constructor() { 
            super();
            this.state = {};
            }
        render() {
            return <div>Hello, I am Foo Component</div>;
            }
    } 
    ```

* *Shareing data between `state` and `props`*
    * whatever is set on the *state of one Component* can be shared amongst all components by *passing it down as props*
    * Remember that state is just an object that lives on the class component's constructor
    * Remember that props are read-only, and components can use props to display information to the screen
    * One other principle that is built into React is that when a component’s props are bound to the state of a parent component, the child component will re-render as well

* *respond to events triggered by user interaction and handle user input via forms in React*
    * Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
        * React events are named using camelCase, rather than lowercase
        * With JSX you pass a function as the event handler, rather than a string





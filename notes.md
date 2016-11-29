React Course Notes :

* const
This stands for 'constant' - it's a variable that we don't think will ever change.

React doesn't use var like we used to in JS. Instead we have 'const' and 'let' for variables. Keep this in mind.

=======================

* Types of components
There are 2 types of components:

  1. Functional components- basically a component that is a function, which takes something in and puts something out. There is no record keeping.

-Example
const SearchBar = () => {
  return <input />;
};

  2. Class component - used when we want a component to have internal record keeping, for it to be aware of its state.

  -Example
class SearchBar extends React.Component {
}

The 'extends React.Component' adds all the class functionality that is available from the React.Component class. This is how you make something have awareness of state.

EVERY component that is class based MUST have a RENDER function in the class!

=======================

* Handling Events in React

2 Steps:
1. Declare an event handler
2. Pass event handler to the element we want to handle events

=======================

* STATES

State is just a javascript object with values. Each class based component (smart object) has a State object attached to it.

Whenever state is changed, then the component re-renders, along with any child components.

You can only change the state with:
this.setState({ term: event.target.value})

WITHIN THE COMPONENT.

Remember that any changes will rerender the component! This is helpful for inputs. Remember that all

Remember that you can also put JS variables into the code with a simle { this.state.x } anywhere on the page.

YOU ARE DEALING WITH JS OBJECTS!

=======================

* Controlled Component
This is where the component's value is only ever changed by state, as opposed to the onChange event changing the state, AND THE COMPONENT SOLELY RELYING ON THAT TO SEE A DIFFERENCE!

=======================

* Downwards Data Flow
This is a React paradigm which decides which component is responsible for making data requests. ===> The most parent element is responsible for making data requests for the rest of the components to use.

==========================

Functional Comp props vs Class Comp props

Lecture: 23

In functional comps- props are always passed as the props argument from a parent component:

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
     { props.videos.length }
    </ul>
  );
}


When it comes to class comp, you have access to this.props whenever something is passed to the component... probably because the class has a key value set as the props is passed to it down the line... which is why it can refer to that prop as this.props instead of it being an argument that is sent as a parameter.

Make sure to refactor!

==========================

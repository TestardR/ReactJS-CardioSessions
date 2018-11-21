// 1. What are some major advantages of react ?
// a. UI Testing becomes easier
// b. Faster applicationCache
// c. JSX readability - All in One single File
// d. Easy to integrate new frameworks
// e. Server side CanvasRenderingContext2D

// 2. What is a key in react it's purpose ?
// Identifiers usually given in array, react can see if they changed with the state or components.
// That's how reacts knows, we can use id or incremented numbers, etc...

// 3. What is the single source of truth in redux ? Global store ?
// Gloal store can be used to track changes accross the entire app, all the info is inside the redux store. It makes easier to track bugs, as you have one single tree from the redux store.

// 4. Differences between statefull and stateless components ?
// Statefull
//  Can store info in memory, they have access to state, they can change it, and pass state down to stateless components as props
// Stateless
// No knowledge of past, present, future state changes that might happen. No authority to modify the state.They take the info from statefull components as props.

// 5. How to you create an invent in react ?

// class Event extends React.Component ({
//     event(e) {
//         // logic of the event
//     }

//     render() {
//         return (
//             <div onClick={this.event}>Click me to run the event</div>
//         )
//     }
// })

// 6. What is the equivalent of the following using React.createElement  ?

// const element = {
//     <h1 className="greeting">Hello World</h1>
// }

// const element = React.createElement[
//     'h1',
//     {className: "greeting"},
//     "Hello World"
// ]

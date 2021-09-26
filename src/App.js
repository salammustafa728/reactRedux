// import React, { Component } from 'react'
// import Main from './Components/Main';
// import User from './Components/User';
// export class App extends Component {
//   // constructor(){
//   //   super();
//   //   this.state={
//   //     userName: "Salam"
//   //   }
//   // }
//   // changeUserName=(newName)=>{
//   //   this.setState({
//   //     userName: newName
//   //   });
//   // }

//   render() {
//     return (
//       <div>
//         <div>
//           {/* <Main changeUserName={this.changeUserName}/>
//           <User userName={this.state.userName}/> */}
//         </div>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import {createStore} from 'redux';
// export class App extends Component {
  
// }
// const reducer = (state,action)=>{
//  switch(action.type){
//    case "ADD":
//      state = state + action.payload;
//      break;
//    case "SUBTRACT":
//      break;  
//  }
//  return state;
// };

// const store = createStore(reducer,1);
// store.subscribe(()=>{
//   console.log("store updated ", store.getState());
// })
// store.dispatch({
//   type: "ADD",
//   payload:10
// })

// export default App

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';

// function AddPersonForm(props) {
//   const [ person, setPerson ] = useState('');
    
//   function handleChange(e) {
//     setPerson(e.target.value);
//   }
    
//   function handleSubmit(e) {
//     if(person !== '') {
//       props.handleSubmit(person);
//       setPerson('');
//     }
//     e.preventDefault();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" 
//         placeholder="Add new contact" 
//         onChange={handleChange} 
//         value={person} />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function PeopleList(props) {
//   const arr = props.data;
//   const listItems = arr.map((val, index) =>
//     <li key={index}>{val}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data);

//   function addPerson(name) {
//     setContacts([...contacts, name]);
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />
//       <PeopleList data={contacts} />
//     </div>
//   );
// }
// const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

// ReactDOM.render(
//   <ContactManager data={contacts} />, 
//   document.getElementById('root')
// );
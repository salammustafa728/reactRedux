import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './Components/PeopleList';
import AddPersonForm from './Components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import Counter from './Counter';
// import './index.css';

// const initialState = {
//   count: 0
// };
// // Reducer function
// function reducer(state = initialState, action) {
//   switch(action.type) {
//     case 'INCREMENT':
//       return { count: state.count + action.num };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);
// const el = <Provider store={store}>
//           <Counter/>
//         </Provider>; 

// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// ); 
// function AddPersonForm(props){
//   const [person,setperson] = useState("");

//   function handleChange(e){
//     setperson(e.target.value);
//   }
//   function handleSubmit(e){
//     props.handleSubmit(person);
//     setperson('');
//     e.preventDefault();
//   }
//   return <form onSubmit={handleSubmit}>
//     <input
//     type="text"
//     placeholder="Add a new contact"
//     onChange={handleChange}
//     value={person}
//     />
//     <button type="submit">Add</button>
//   </form>
// }

// function PeopleList(props){
//   const arr = props.data; 
//   const listItems = arr.map((val,idx)=>
//     <li key={idx}>{val}</li>
//     );
//     return <ul>{listItems}</ul>
// }
// function ContactManager(props){
// const [contacts, setContacts]= useState(props.data);

// function addPerson(name,age){
//   setContacts([...contacts,name]);
// }

// return <div>
// <AddPersonForm handleSubmit={addPerson}
// />
// <PeopleList data={contacts}/>
// </div>
// }
// const contacts = ["Salam Mustafa ", "Farah Mustafa ", "Hend Mustafa"];



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



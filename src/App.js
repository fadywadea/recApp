// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { Component } from "react"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contacts from "./Components/Contacts/Contacts"
import Gallery from "./Components/Gallery/Gallery"
import Navbar from "./Components/Navbar/Navbar"
import Parent from "./Components/Parent/Parent"


export default class App extends Component {
  state = {

  }
  render() {
    return <>
      <Home />
      <About />
      <Contacts />
      <Gallery />
      <Navbar />
      <Parent />
    </>
  }
}
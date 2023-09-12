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


import { Component } from "react";
import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Contacts from "./Components/Contacts/Contacts";
// import Gallery from "./Components/Gallery/Gallery";
// import Navbar from "./Components/Navbar/Navbar";
import Parent from "./Components/Parent/Parent";


export default class App extends Component {
  state = {
    products: [
      { id: 7212, count: 29, code: 'apple', category: 'mobile', price: 20000, onSale: true },
      { id: 6564, count: 45, code: 'HTC', category: 'TV', price: 30000, onSale: false },
      { id: 5635, count: 13, code: 'Allow', category: 'MacBook', price: 40000, onSale: true },
      { id: 4545, count: 63, code: 'Red', category: 'Bike', price: 50000, onSale: false },
      { id: 3454, count: 35, code: 'Samsung', category: 'Car', price: 60000, onSale: true },
      { id: 2534, count: 78, code: 'HTC', category: 'Play', price: 80000, onSale: false },
      { id: 4354, count: 23, code: 'Pops', category: 'Fire', price: 90000, onSale: true },
      { id: 5434, count: 54, code: 'Laps', category: 'scooter', price: 100000, onSale: false },
    ]
    // companies: { company: 'fady wadea' }
  }
  deleteProduct = (deleteId) => {
    // Deep Copy
    let myProducts = [...this.state.products];
    // Update Copy //  filter
    myProducts = myProducts.filter((product) => product.id !== deleteId);
    //SetStat
    this.setState({ products: myProducts });
  }
  render() {
    return <>
      <Home />
      {/* <About />
      <Contacts />
      <Gallery />
      <Navbar /> */}
      <Parent delete={this.deleteProduct} dodo={this.state.products} />
    </>
  }
}
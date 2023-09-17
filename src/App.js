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


// import { Component } from "react";
// // import Home from "./Components/Home/Home";
// // import About from "./Components/About/About";
// // import Contacts from "./Components/Contacts/Contacts";
// // import Gallery from "./Components/Gallery/Gallery";
// // import Parent from "./Components/Parent/Parent";
// // import Products2 from "./Components/Products/Products";


// export default class App extends Component {
//   state = {

//     products: [
//       { id: 7212, count: 0, code: 'apple', category: 'mobile', price: 20000, onSale: true },
//       { id: 6564, count: 0, code: 'HTC', category: 'TV', price: 30000, onSale: false },
//       { id: 5635, count: 0, code: 'Allow', category: 'MacBook', price: 40000, onSale: true },
//       { id: 4545, count: 0, code: 'Red', category: 'Bike', price: 50000, onSale: false },
//       { id: 3454, count: 0, code: 'Samsung', category: 'Car', price: 60000, onSale: true },
//       { id: 2534, count: 0, code: 'HTC', category: 'Play', price: 80000, onSale: false },
//       { id: 4354, count: 0, code: 'Pops', category: 'Fire', price: 90000, onSale: true },
//       { id: 5434, count: 0, code: 'Laps', category: 'scooter', price: 100000, onSale: false },
//     ]
//     // companies: { company: 'fady wadea' }
//   }

//   deleteProduct = (deleteId) => {
//     // Deep Copy
//     let products = [...this.state.products];
//     // Update Copy //  filter
//     products = products.filter((product) => product.id !== deleteId);
//     //SetStat
//     this.setState({ products });
//   }

//   updateProduct = (productIndex, step) => {
//     let products = [...this.state.products];
//     products[productIndex].count += step;
//     this.setState({ products });
//   }

//   // minsProduct = (productIndex) => {
//   //   let products = [...this.state.products];
//   //   products[productIndex].count--;
//   //   this.setState({ products });
//   // }
//   componentDidUpdate() {
//     console.log("App componentDidUpdate");
//   }
//   render() {
//     return <>
//       {/* <Products2/> */}
//       {/* <Home /> */}
//       {/* <About />
//       <Contacts />
//       <Gallery />
//        */}
//       {/* <Parent delete={this.deleteProduct} update={this.updateProduct} dodo={this.state.products} /> */}
//       {/* mins={this.minsProduct} */}
//     </>
//   }
// }





import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Child from './Components/Child/Child'
import Contacts from './Components/Contacts/Contacts'
import Gallery from './Components/Gallery/Gallery'
import Parent from './Components/Parent/Parent'
import Products2 from './Components/Products/Products'
import Notfound from './Components/Notfound/Notfound'
import Mobile from './Components/Mobile/Mobile'
import Web from './Components/Web/Web'

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'child', element: <Child /> },
      { path: 'contacts', element: <Contacts /> },
      {
        path: 'gallery', element: <Gallery />, children: [
          { index: true, element: <Mobile /> },
          { path: 'web', element: <Web /> },
        ]
      },
      { path: 'parent', element: <Parent /> },
      { path: 'products', element: <Products2 /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
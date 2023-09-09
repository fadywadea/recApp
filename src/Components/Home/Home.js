import { Component } from "react";

export default class Home extends Component {
  state = {
    user: 'Fady Wadea',
    greeting: "How Are You?",
    darkStyle: "bg-dark text-white text-center "
  }
  welcome() {
    return `welcome ${this.state.user}`
  }
  render() {
    return <>
      <h1 className={this.state.darkStyle} >{this.welcome()}</h1>
      <h3>{this.state.greeting}</h3>
      <h2 className="text-center" > <i className="fas fa-home"></i> Home</h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
        doloribus illum aliquam consequatur
        vitae quos veritatis sapiente necessitatibus nam.</p>
    </>
  }
}
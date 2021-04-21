import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
// import { robots } from "./robots";

// Props never change, its just input we get and we never modified them, sample of props is {robots}
//State an object that describes your application
//The parent feeds  state in the child component and the child receives it as a property

// const state = {
//   robots: robots,
//   searchField: "",
// };

class App extends Component {
  //With robots.txt
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: robots,
  //     searchField: "",
  //   };
  // }

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };

    // console.log('constructor');
  }

  //Make request here

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //Simplier way
      .then((response) => response.json())

      .then((users) => this.setState({ robots: users }));

    //Complete way to do
    //   .then(response => {
    //   return response.json()
    // })

    // .then(users => {
    //     return this.setState( {robots: users});
    // })
    // this.setState( {robots: robots});
    // console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchField: event.target.value });
    // const filteredRobots = this.state.robots.filter((robots) => {
    //   return robots.name
    //     .toLowerCase()
    //     .includes(this.state.searchField.toLowerCase());
    // });
    // console.log(filteredRobots);
  };
  render() {
    const {robots, searchField} = this.state;
    //const filteredRobots = this.state.robots.filter((robot) => {
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    // console.log('render');
    //if it takes a while to load, just add loading text
    //longer way
    // if (robots.length === 0) {
    //   return <h1>Loading</h1>;
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">Robofriends</h1>
    //       <SearchBox searchChange={this.onSearchChange} />
    //       {/* <CardList robots={this.state.robots} /> */}
    //       <Scroll>
    //         <CardList robots={filteredRobots} />
    //       </Scroll>
    //     </div>
    //   );
    // }
    //SIMPLE WAY
     return !robots.length === 0 ?
       <h1>Loading</h1>:
    
       (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* <CardList robots={this.state.robots} /> */}
          <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
          </Scroll>
        </div>
      );
    
  }
}

export default App;

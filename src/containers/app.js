import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Axios from 'axios';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    getUsers();
  },[searchField]);

  const getUsers = async () => {
    try {
      const result = await Axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      setRobots(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return !robots.length ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;

// import React, { Component, useState, useEffect } from "react";
// import CardList from "../components/CardList";
// import SearchBox from "../components/SearchBox";
// import Scroll from "../components/Scroll";
// import ErrorBoundry from "../components/ErrorBoundry";

// function App(){
//  const [robots,changeRobots]= useState();
//  const [searchField,changeSearchField]= useState();

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ robots: users }));
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   };
//   render() {
//     const { robots, searchField } = this.state;
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     });
//     return !robots.length ? (
//       <h1 className="tc">Loading</h1>
//     ) : (
//       <div className="tc">
//         <h1>RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange} />
//         <Scroll>
//           <ErrorBoundry>
//             <CardList robots={filteredRobots} />
//           </ErrorBoundry>
//         </Scroll>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const { people } = this.props;

    return (
      <ol>{people.map(person => <li key={person.name}>{person.name}</li>)}</ol>
    );
  }
}


class App extends Component {

  render() {
    const people_1 = [{ name: "Tyler" }, { name: "Robert" }, { name: "Sam" }];
    const people_2 = [{ name: "Stacey" }, { name: "Erica" }, { name: "Marcy" }];
    const people_3 = [{ name: "Meghan" }, { name: "Laura" }, { name: "Joey" }];
    
    return (
      <div className="App">
        <ContactList contacts={people_1} />
        <ContactList contacts={people_2} />
        <ContactList contacts={people_3} />
      </div>
    );
  }
}

export default App;

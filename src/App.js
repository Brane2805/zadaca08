import React from 'react';
import { User } from './user';

export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
      { name: 'Anita', years: 45 },
    ],
  };

  handleButtonPress = () => {
    const { users } = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  };

  handleNameChange = event => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;
    this.setState({ users: newUsers });
  };

  handleNameChange2 = event => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[1].name = event.target.value;
    this.setState({ users: newUsers });
  };

  handleNameChange3 = event => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[2].name = event.target.value;
    this.setState({ users: newUsers });
  };

  render() {
    const { users} = this.state;

    return (
      <div>
        <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>
        <User
          name={users[0].name}
          years={users[0].years}
          onNameChange={this.handleNameChange}
        />
        <User 
          name={users[1].name}
          years={users[1].years}
          onNameChange={this.handleNameChange2}
          />
        <User 
          name={users[2].name} 
          years={users[2].years} 
          onNameChange={this.handleNameChange3}/>
          </div><br/>
          <div>
        {users.map(function(user, id){
         return (<li key={id} >{user.name} ima {user.years} godina </li>)
       })}
      </div>

      </div>
      
    );
  }
}

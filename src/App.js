import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    correct: true, 
    clicked: []
  };

  incrementCount = id => {
    this.setState({correct: true});
    const clicked = this.state.clicked;
    var count = 0;
    // check if the id clicked has already been clicked
    for(let i = 0; i < clicked.length; i++) {
      if(clicked[i] === id) {
        this.setState({correct: false});
      } else {
        count++;
      }
    }
    // logic for handling if it has not been clicked
    if (count === clicked.length) {
      this.setState({score: this.state.score + 1});
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1});
      }
      clicked.push(id);
      this.setState({clicked});
    } 
    // logic for if it has been clicked
    else {
      this.setState({score: 0});
      this.setState({clicked: []});
    }
    // shuffling pictures
    this.shuffleFriends();
  }

  shuffleFriends = () => {
    var shuffle = this.state.friends;
    // shuffle method found on stackoverflow
    var currentIndex = shuffle.length, tempValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = shuffle[currentIndex];
      shuffle[currentIndex] = shuffle[randomIndex];
      shuffle[randomIndex] = tempValue;
    }
    this.setState({friends: shuffle});
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          correct={this.state.correct}
          currentScore={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            incrementCount={this.incrementCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

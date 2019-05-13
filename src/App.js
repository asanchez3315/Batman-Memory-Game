//imports dependencies and files
import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Batman from "./Batman.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    Batman,
    clickedImage: [],
    score: 0,
  
  };

//when you click on a card it is removed from the array
  imageHandlerClick = event => {
    const currentImage = event.target.alt;
    const imageClicked =
      this.state.clickedImage.indexOf(currentImage) > -1;

//if you click on an image that has already been selected, the game resets and cards reshuffled
    if (imageClicked) {
      this.setState({
        Batman: this.state.Batman.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
        alert("Don't give up! Challenge again?");

//if you click on an available Image, your score is increased by one and cards reshuffled
    } else {
      this.setState(
        {
          Batman: this.state.Batman.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          score: this.state.score + 1
        },
//if you  correct you guess correctly 12 times, a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You are THE BATMAN");
            this.setState({
              Batman: this.state.Batman.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <NavigationBar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Batman.map(Batman => (
            <Card
              imageHandlerClick={this.imageHandlerClick}
              id={Batman.id}
              key={Batman.id}
              image={Batman.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
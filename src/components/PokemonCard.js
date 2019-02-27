import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    clicked: false
  };

  toggleImage = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    let hp = this.props.pokemon.stats.find(name => name.name === "hp").value;
    let url = !this.state.clicked ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
    return (
      <Card>
        <div onClick={() => this.toggleImage()}>
          <div className="image">
            <img src={url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} HP
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;

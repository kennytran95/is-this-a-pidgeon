import React from 'react';
import Tested from './Tested.jsx';

class BirdList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    // <img className="entry-image" src="https://i.imgur.com/lHWTPUq.jpeg" alt="bird(?)"/>
    return (
      <div>
        <h1>Pidgeon Tests</h1>
          <div className="bird-list">
            <div className="entry">
            <div className="entry-image-wrapper">
                <Tested tested={this.props.tested}/>
              </div>
              <div className="entry-text">
                <div className="entry-name">
                  <h3>Pidgeon on Rock</h3>
                </div>
                <div className="entry-category">
                  <h4>Is Pidgeon</h4>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default BirdList;
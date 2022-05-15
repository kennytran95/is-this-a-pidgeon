const mobilenet = require('@tensorflow-models/mobilenet');
import React, {useRef} from 'react';
import '@tensorflow/tfjs-backend-webgl';
import ModelLoadState from './components/ModelLoadState.jsx';
import IsPidgeon from './components/IsPidgeon.jsx';
import BirdList from './components/BirdList.jsx';
import sampleData from './sampleData.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      model: null,
      imgUrl: null
    };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    //This loads the machine learning model.
    mobilenet.load()
      .then(model => {
        this.setState({model});
      })
  }

  pageRouter(){

  }

  searchUrl(url) {
    event.preventDefault();
    let imageUrl = url.target[0].value;
    this.setState({
      imgUrl: imageUrl
    })
  }

  render () {
    return (
      <div>
        <div className="navBar">
          <div className="nav">
          <span className="title">
            <img src="https://i.imgur.com/eXPeS9m.gif" height='100px'/>
            <span className="title-text">
              <h3>Is this a Pidgeon?</h3>
            </span>
            <span className="nav-button">
            |
            </span>
            <span className="nav-button">
              Pidgeon Tester
            </span>
            <span className="nav-button">
            |
            </span>
            <span className="nav-button">
              Show Me My Birds
            </span>
          </span>
          </div>
          <ModelLoadState model={this.state.model}/>
        </div>
        <div className="content">
          <IsPidgeon model={this.state.model} imageUrl={this.state.imgUrl} searchUrl={this.searchUrl.bind(this)} />
          <BirdList />
        </div>
      </div>

    );
  }
}

export default App;
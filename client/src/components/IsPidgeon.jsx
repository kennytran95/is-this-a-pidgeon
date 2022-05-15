import React from 'react';
import Pigeons from './Pigeons.jsx';
import UrlForm from './UrlForm.jsx';

class IsPidgeon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      model: null,
      imgUrl: null,
      birdOrNaw: "This is a Pidgeon"
    };
    this.imgRef = React.createRef();
    this.isPidgeonTest = this.isPidgeonTest.bind(this);
  }

  isPidgeonTest(image) {
    //This function tests an image to see if it is a pidgeon.
    this.props.model.classify(image.current)
      .then(predictions => {
        console.log(predictions[0].className === 'partridge' ? 'This is a Pidgeon' : 'This is not a Pidgeon');
        console.log(predictions[0].className === 'partridge' ? 'Pidgeon Confidence: ' + predictions[0].probability : '');
        return (predictions[0].className === 'partridge' ? 'This is a Pidgeon' : 'This is not a Pidgeon');
        //Yes I know a partridge is not a pidgeon,
        //but I keep feeding the model Pidgeons and they keep coming out as partridges???
      })
      .catch(err => {
        console.log(err);
      })
      .then((result) => {
        this.setState({
          birdOrNaw: result
        })
      })
  }

  render(){
    return (
      <div>
          <h1>Is this a Pidgeon?</h1>
          <UrlForm imgUrl={this.state.imgUrl} searchUrl={this.props.searchUrl}/>
          <div className="img-wrapper">
            <img
              src={this.props.imageUrl || "https://i.imgur.com/ZVJCqZp.jpeg"}
              ref={this.imgRef}
              alt="bird(?)"
              crossOrigin='anonymous'
              className="img"
            />
          </div>
          {this.state.birdOrNaw}
          <button onClick={() => this.isPidgeonTest(this.imgRef)}>
            Test
          </button>
      </div>
    );
  }

}

export default IsPidgeon;
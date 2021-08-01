import React, { Component } from 'react';
import data from '../../assets/data/resumeData.json';

class HomeSection extends Component {
  render() {
    // if(data) {
    //     // var profilepic =
    //     var networks =
    // }
    return (
      <header id="home">
        <div className="row banner">
          <div className="twelve columns">
            <h1>This is Image</h1>
          </div>
          <div className="banner-text">
            <h1 className="responsive-headline">{data.main.name}</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeSection;

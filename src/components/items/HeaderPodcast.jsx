import React, { Component } from 'react';

class HeaderPodcast extends Component {
	constructor(props){
		super();
	}

  render(){
    const stateHeader = this.props['image-url'].length > 0 ||
                        this.props['title'].length > 0;

    const headerStyles = {
      height: this.props['image-url'].length > 0 ? '300px' : '85px',
      backgroundImage: `url(${this.props['image-url']})`,
    }

    const headerPodcast = stateHeader ?
      (<div className="fc-player__header" style={headerStyles}>
        <h1>{this.props['title']}</h1>
      </div>) :  '';

    return ( headerPodcast )
  }

}

export default HeaderPodcast
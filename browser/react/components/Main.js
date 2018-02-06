import React, { Component } from 'react';

import StatefulAlbums from './StatefulAlbums.jsx';
// import AllAlbums from './AllAlbums.jsx';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';
import AllArtists from './AllArtists.jsx';
import SingleArtist from './SingleArtist.jsx'

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">

            <Route exact path="/" component={StatefulAlbums} />
            <Route exact path="/albums" component={StatefulAlbums} />

            <Route exact path="/albums/:albumId" component={SingleAlbum} />
            <Route exact path="/artists" component={AllArtists} />
            <Route exact path="/artists/:artistId" component={SingleArtist} />
          </div>
          <Player />
        </div>
      </HashRouter>
    );
  }
}

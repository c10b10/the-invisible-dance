import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import css, {insertRule} from 'next/css';
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      canPlay: false,
      spinner: false
    };
  }

  addSpinner(e) {
    if (this.state.canPlay)
      return false;

    this.setState({
      spinner: true,
      canPlay: false
    });
  }

  removeSpinner(e) {
    this.setState({
      spinner: false,
      canPlay: true
    });
  }

  render() {
    return (
      <div className={style}>
        <Head>
          <title></title>
          <meta name="viewport" content="inital-scale=1.0, width=device-width" />
        </Head>
        <h2 className="title">The Invisible Dance</h2>
        <h4><em>Press play to listen.</em></h4>
        <ReactAudioPlayer
          src="http://10.0.1.3:3001/stream.mp3"
          preload="auto"
          onPlay={this.addSpinner.bind(this)}
          onCanPlay={this.removeSpinner.bind(this)}
        />
        {this.state.spinner ? <div>Loading...</div> : ''}
      </div>
    )
  }
}

insertRule("html, body { max-width: 300px; width: 300px; margin: 20px auto; padding: 0; }")
insertRule(".title { font-family: Helvetica, sans-serif; text-align: center; }")
insertRule("h4 { font-weight: 400; text-align: center; }")

const style = css({
})

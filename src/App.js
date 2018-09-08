import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import './App.css';
import General from './General.png';
import Hobbies from './Hobbies.png';
import { TEXTS } from './texts';

function Square(index) {

  let makeSquare = (x, y, w) => {
    return <rect key={`${x} ${y}`} x={x} y={y} width={w} height={w} stroke="black" fill="transparent"></rect>
  }

  let squares = [[200, 200, 100]];
  let actualSquares = [];

  for (let i = 1; i < index; i++) {
    let copy = squares.slice();
    for (let square of copy) {
      let x = square[0];
      let y = square[1];
      let size = square[2];
      let newSize = Math.floor(square[2] / 2);
      actualSquares.push(square);
      squares.shift();
      squares.push([x + newSize / 2, y - newSize, newSize]);
      squares.push([x - newSize, y + newSize / 2, newSize]);
      squares.push([x + size, y + newSize / 2, newSize]);
      squares.push([x + newSize / 2, y + size, newSize]);
    }
  }

  actualSquares = actualSquares.concat(squares);
  return (<svg width="100%" height="100%">
    {actualSquares.map(square => makeSquare(square[0], square[1], square[2]))}
  </svg>);
}

// Possible color scheme:
// Primary: #ffeb3b
// Primary-L: #ffff72
// Primary-D: #c8b900
// Secondary: #65b5f6
// Secondary-L: #9be7ff
// Secondary-D: #2286c3

class App extends Component {

  state = {
    pageHeaders: [
      "Welcome",
      "Work Experience",
      "Featured Hobby Projects",
      "Beginning (2009-2012)",
      "Python (~2012)",
      "C++ (2013-2015)",
      "Web (2015-Current)",
      "Future",
      "Hobbies"
    ],
    experiences: {},
    features: {},
    images: [
      <img src={General} className="img-fluid w-50 m-5" alt="General" />,
      null,
      null,
      Square(1),
      Square(2),
      Square(3),
      Square(4),
      Square(6),
      <img src={Hobbies} className="img-fluid w-75 m-5" alt="General" />,
    ]
  }

  toggleExp = (e, index) => {
    e.stopPropagation();
    this.setState({
      experiences: Object.assign({}, this.state.experiences, {[index]: !this.state.experiences[index]})
    });
  }

  toggleFeature = (e, index) => {
    e.stopPropagation();
    this.setState({
      features: Object.assign({}, this.state.features, {[index]: !this.state.features[index]})
    });
  }

  renderTexts = (texts, index, isTextBody) => {
    if (!isTextBody) {
      if (index === 1) {
        return texts.map((text, ind, arr) => {
          if (ind % 2 === 1) return null;
          return (
            <div className="mt-2 card" onClick={(e) => e.stopPropagation()}>
              <div className="card-body">
                <h5 className="card-title pointer" onClick={(e) => this.toggleExp(e, ind)}><i className={`fa fa-chevron-${this.state.experiences[ind] ? 'down' : 'right'}`}></i> {text}</h5>
                {this.state.experiences[ind] ? <p className="card-text">{arr[ind + 1]}</p> : null}
              </div>
            </div>
          )
        })
      }
      else if (index === 2) {
        return texts.map((text, ind, arr) => {
          if (typeof(text) !== 'string') return null;
          let links = [];
          for (let i = ind + 1; i < arr.length; i++) {
            if (typeof(arr[i]) !== 'string') {
              links.push(arr[i]);
            }
            else {
              break;
            }
          }

          return (
            <div className="mt-2 card" onClick={(e) => e.stopPropagation()}>
              <div className="card-body">
                <h5 className="card-title pointer" onClick={(e) => this.toggleFeature(e, ind)}><i className={`fa fa-chevron-${this.state.features[ind] ? 'down' : 'right'}`}></i> {text}</h5>
                {this.state.features[ind] ?
                  links.map(link => <p className="card-text">{link}</p>)
                : null}
              </div>
            </div>
          )
        });
      }
    }
    else if (index !== 1 && index !== 2) {
      return texts.map((text, ind) => <p key={ind} className="card-text">{text}</p>)
    }
    return null;
  }

  renderComponent = (header, index) => {
    return (
      <div className="row h-100" style={{backgroundColor: "#ffeb3b"}}>
        <div className="col-4 h-100">
          {this.state.images[index]}
        </div>
        <div className="col-6 p-5 h-100">
          <div className="card" onClick={(e) => e.stopPropagation()}>
            <div className="card-body">
              <h2 className="card-title">{header}</h2>
              {this.renderTexts(TEXTS[index], index, true)}
            </div>
          </div>
          {this.renderTexts(TEXTS[index], index, false)}
        </div>
      </div>
    )
  }

  renderParallax = () => {
    return (
      <Parallax ref="parallax" pages={this.state.pageHeaders.length}>
        {this.state.pageHeaders.map((header, index) => (
          <Parallax.Layer key={index} offset={index} factor={2} onClick={() => this.refs.parallax.scrollTo(index + 1)}>
            {this.renderComponent(header, index)}
          </Parallax.Layer>
        ))}
        <Parallax.Layer offset={0} speed={-1} factor={1} style={{pointerEvents: 'none'}}>
          <nav className="card nav flex-column sidemenu" style={{pointerEvents: 'initial'}}>
            {this.state.pageHeaders.map((header, index) => (
              <a key={index} href="#" className='nav-link' onClick={() => this.refs.parallax.scrollTo(index)}>
                {header}
              </a>
            ))}
          </nav>
        </Parallax.Layer>
      </Parallax>
    )
  }

  render() {
    return (
      <div>
        {this.renderParallax()}
      </div>
    );
  }
}

export default App;

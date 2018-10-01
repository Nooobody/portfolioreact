import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import './App.css';
import General from './General.png';
import { TEXTS } from './texts';

import lAngular from './logos/angular-icon-1.svg';
import lCpp from './logos/c.svg';
import lElectron from './logos/electron-4.svg';
import lGmod from './logos/garry-s-mod.svg';
import lLua from './logos/lua.svg';
import lNode from './logos/nodejs.svg';
import lPython from './logos/python-5.svg';
import lReact from './logos/react.svg';
import lRedux from './logos/redux.svg';
import lVue from './logos/vue-9.svg';
import lRor from './logos/rails-1.svg';

const MENUBREAKPOINT = 1350;
const IMAGEBREAKPOINT = 960;

function Square(index) {

  let makeSquare = (x, y, w) => {
    return <rect key={`${x} ${y}`} x={x} y={y} width={w} height={w} stroke="black" fill="transparent"></rect>
  }

  let squares = [[100, 200, 100]];
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
    <g transform="translate(0 50) scale(1.0)">
      {actualSquares.map(square => makeSquare(square[0], square[1], square[2]))}
    </g>
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
      "Beginning (2009-2011)",
      "Python (2011-2012)",
      "C++ (2012-2015)",
      "Web (2015-Current)",
      "Future",
      "Hobbies"
    ],
    experiences: {},
    features: {},
    windowWidth: window.innerWidth,
    images: [
      null,
      null,
      null,
      1,
      2,
      3,
      4,
      6,
      <img src={General} className="img-fluid w-50 m-5" alt="General" />,
    ],
    logos: [
      [
        lReact,
        lRedux,
        lVue,
        lElectron,
        lAngular,
        lNode
      ],
      null,
      null,
      [
        lGmod,
        lLua
      ],
      [
        lPython
      ],
      [
        lCpp
      ],
      [
        lReact,
        lRedux,
        lVue,
        lRor,
        lAngular,
        lNode
      ],
      null,
      null
    ]
  }

  componentDidMount() {
    let squares = this.state.images.filter(img => typeof(img) === 'number');
    this.generateSquare(squares);
    window.addEventListener("resize", this.checkResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkResize);
  }

  checkResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  generateSquare = (squares) => {
    let square = squares.shift();
    let index = this.state.images.indexOf(square);

    let newImages = this.state.images.slice();
    newImages.splice(index, 1, Square(square));
    this.setState({
      images: newImages
    }, () => {
      if (squares.length) {
        this.generateSquare(squares);
      }
    });
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

  renderLogos = (index) => {
    if (index === 7) {
      return <i className="fa fa-question m-2" style={{fontSize: this.state.windowWidth >= IMAGEBREAKPOINT ? '60px' : '30px'}}></i>
    }

    let logos = this.state.logos[index];

    if (logos) {
      return logos.map((logo, ind) => (
        <img key={ind} className="m-1 mt-3" src={logo} alt="Logo" width="auto" height={this.state.windowWidth >= IMAGEBREAKPOINT ? '50px' : '30px'} />
      ));
    }

    return null;
  }

  renderTexts = (texts, index, isTextBody) => {
    if (!isTextBody) {
      if (index === 1) {
        return texts.map((text, ind, arr) => {
          if (ind % 2 === 1) return null;
          return (
            <div key={ind} className="mt-2 card w-100" onClick={(e) => e.stopPropagation()}>
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
            <div key={ind} className="mt-2 card w-100" onClick={(e) => e.stopPropagation()}>
              <div className="card-body">
                <h5 className="card-title pointer" onClick={(e) => this.toggleFeature(e, ind)}><i className={`fa fa-chevron-${this.state.features[ind] ? 'down' : 'right'}`}></i> {text}</h5>
                {this.state.features[ind] ?
                  links.map((link, linkIndex) => <p key={linkIndex} className="card-text">{link}</p>)
                : null}
              </div>
            </div>
          )
        });
      }
    }
    else if (index !== 1 && index !== 2) {
      if (index === 8) {
        return texts.map((text, ind, arr) => {
          if (ind === arr.length - 1) {
            return <p key={ind} className="card-text text-center">{text}</p>
          }
          else {
            return <p key={ind} className="card-text">{text}</p>
          }
        });
      }
      else {
        return texts.map((text, ind) => <p key={ind} className="card-text">{text}</p>)
      }
    }
    return null;
  }

  renderComponent = (header, index) => {
    let image = this.state.images[index];
    let imageWidth = image ? 4 : 2;
    let textWidth = 8;

    if (this.state.windowWidth < MENUBREAKPOINT) {
      textWidth += 2;
    }

    if (this.state.windowWidth < IMAGEBREAKPOINT) {
      textWidth += 2;
    }
    else if (image) {
      textWidth -= 2;
    }

    return (
      <div className="row h-100" style={{backgroundColor: "#ffeb3b"}}>
        { this.state.windowWidth >= IMAGEBREAKPOINT ?
        <div className={`col-${imageWidth} h-100`}>
          {image}
        </div>
        : null }
        <div className={`col-${textWidth} p-5 h-100`}>
          <div className="card" onClick={(e) => e.stopPropagation()}>
            <div className="card-body">
              <h2 className="card-title">{header}</h2>
              {this.renderTexts(TEXTS[index], index, true)}
            </div>
          </div>
          {this.renderLogos(index)}
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
        {this.state.windowWidth >= MENUBREAKPOINT ?
        <Parallax.Layer offset={0} speed={-1} factor={1} style={{pointerEvents: 'none'}}>
          <nav className="card nav flex-column sidemenu" style={{pointerEvents: 'initial'}}>
            {this.state.pageHeaders.map((header, index) => (
              <a key={index} href="#" className='nav-link' onClick={() => this.refs.parallax.scrollTo(index)}>
                {header}
              </a>
            ))}
          </nav>
        </Parallax.Layer>
        : null }
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

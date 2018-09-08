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

class App extends Component {

  state = {
    pages: 8,
    pageHeaders: [
      "Welcome",
      "Beginning (2009-2012)",
      "Python (~2012)",
      "C++ (2013-2015)",
      "Web (2015-Current)",
      "Work Experience",
      "Future",
      "Hobbies"
    ],
    experiences: {},
    gradients: [
      "linear-gradient(#f0f0f0 95%, #dfe74d)",
      "linear-gradient(#dfe74d, #95e74d)",
      "linear-gradient(#95e74d, #4de753)",
      "linear-gradient(#4de753, #4de7b9)",
      "linear-gradient(#4de7b9, #588e7e)",
      "linear-gradient(#588e7e, #616161)",
      "linear-gradient(#616161 95%, #e2e2e2)",
      "linear-gradient(#e2e2e2, #e2e2e2)"
    ],
    images: [
      <img src={General} className="img-fluid w-75 m-5" alt="General" />,
      Square(1),
      Square(2),
      Square(3),
      Square(4),
      Square(5),
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

  renderComponent = (header, index) => {
    return (
      <div className="row h-100" style={{backgroundImage: this.state.gradients[index]}}>
        <div className="col-4 h-100">
          {this.state.images[index]}
        </div>
        <div className="col-6 p-5 h-100">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{header}</h2>
              {index !== 5 ? TEXTS[index].map((text, index) => <p key={index} className="card-text">{text}</p>) : null}
            </div>
          </div>
          {index === 5 ? TEXTS[index].map((text, index, arr) => {
            if (index % 2 === 1) return null;
            return (
              <div className="mt-2 card">
                <div className="card-body pointer" onClick={(e) => this.toggleExp(e, index)}>
                  <h5 className="card-title"><i className={`fa fa-chevron-${this.state.experiences[index] ? 'down' : 'right'}`}></i> {text}</h5>
                  {this.state.experiences[index] ? <p className="card-text">{arr[index + 1]}</p> : null}
                </div>
              </div>
            )
          }) : null}
        </div>
      </div>
    )
  }

  renderParallax = () => {
    return (
      <Parallax ref="parallax" pages={this.state.pages}>
        {this.state.pageHeaders.map((header, index) => (
          <Parallax.Layer key={index} offset={index} onClick={() => this.refs.parallax.scrollTo(index + 1)}>
            {this.renderComponent(header, index)}
          </Parallax.Layer>
        ))}
        <Parallax.Layer offset={0} speed={-1} factor={8} style={{pointerEvents: 'none'}}>
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

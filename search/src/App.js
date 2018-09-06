import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      linearAttempts : 0,
      binaryAttempts: 0
    };
  }
  linearSearch(e){
    let value=parseInt(e.target.input.value, 10);
    let array=this.state.data;
    let tries = 0;
    for (let i=0; i<array.length; i++) {
      tries ++;
      if (array[i] === value) {
        this.setState({linearAttempts: tries});
        return;
      }
    }
    return 'Not Found';
  }
  binarySearch(array, value, start, end, tries=0){
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
  
    if (start > end) {
      return 'Item not Found';
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    if (item === value) {
      this.setState({binaryAttempts: tries});
      return index;
    }
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, tries+1);
    }
    else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, tries+1);
    }
    console.log('Not Found');
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={e => {
          e.preventDefault();
          this.linearSearch(e);
        }}>
          <input name="input" ref={value => this.value = value}></input>
          <button>Linear Search</button>
        </form>
        <form onSubmit={e => {
          e.preventDefault();
          this.binarySearch(this.state.data.sort(function(a, b) {
            return a - b;
          }), parseInt(e.target.input.value, 10));
        }}>
          <input name="input" ref={value => this.value = value}></input>
          <button>Binary Search</button>
        </form>
        <p>Output</p>
        <p>Linear Tries: {this.state.linearAttempts}</p>
        <p>Binary Tries: {this.state.binaryAttempts}</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

// 크레스 컴포넌트는 변경 될 때마다 선언해둔 method를 쓴다.

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  handleClick() {
    alert(this.state.date);
  }

  tick() {
    // console.log('tick');
    this.setState({ date: new Date() });
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

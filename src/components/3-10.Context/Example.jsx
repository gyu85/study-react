import React, { Component } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemedButtonFunc from './ThemedButtonFunc';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = () => {
      this.setState(prev => ({
        theme: prev.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          {/* <ThemedButton changeTheme={this.toggleTheme} /> */}
          <ThemedButtonFunc changeTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => (
              <div
                style={{
                  height: '300px',
                  width: '300px',
                  backgroundColor: theme.background
                }}
              ></div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

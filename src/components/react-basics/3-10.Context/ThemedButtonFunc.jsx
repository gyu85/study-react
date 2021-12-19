import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedButtonFunc(props) {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
      onClick={props.changeTheme}
    >
      Func Button
    </button>
  );
}

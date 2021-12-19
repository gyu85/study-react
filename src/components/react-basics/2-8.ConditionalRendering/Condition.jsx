import React from 'react';

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome{' '}
      {/* {Boolean(props.count) && `It's ${props.count} times`} */}
      {props.count ? `It's ${props.count} times` : null}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  return props.isLoggedIn ? (
    <UserGreeting name='Mark' count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

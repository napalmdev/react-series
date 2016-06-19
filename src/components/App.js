import React from 'react';

import Contador from './Contador';

export default class App extends React.Component {

  //método orbigatório das classes que extendem React.Component
  //Identifica o que vai ser renderizado deste componente
  render() {
    return <Contador />;
  }
}

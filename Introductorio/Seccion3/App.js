import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


function Hello(props) {
  return <h2>Esta es mi {1+1} edición {props.title}</h2>; 
}

const Helloarrow = (props) => <h2>Arrow function {props.title}</h2>


class HelloES extends Component {
  render () {
    return <h2>Ecmascript 2015 {this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
      const textoSegundoBool = this.props.boolean ? 'Cierto' : 'Falso'
    return <div>
    <p>{this.props.text}</p>
    <p>{this.props.number}</p>
    <p>{textoSegundoBool}</p>
    </div>
  }
}

class TextBis extends Component {
  render () {
      //const textoSegundoBool = this.props.boolean ? 'Cierto' : 'Falso'
      const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2)

    return <div>
    <p>{this.props.objectWithInfo.key }</p>
    <p>{this.props.arrayOfNumbers}</p>
    <p>{this.props.arrayOfNumbers.join(', ') }</p>

    <p>{mappedNumbers.join(', ') }</p>
    </div>
  }
}

class TextTres extends Component {
  render () {
      const {      
        arrayOfNumbers, 
        multiply,
        objectWithInfo,
        title} = this.props;

      const mappedNumbers = arrayOfNumbers.map(multiply)


    return <div>
    {title}
    <p>{objectWithInfo.key }</p>
    <p>{arrayOfNumbers}</p>
    <p>{arrayOfNumbers.join(', ') }</p>

    <p>{mappedNumbers.join(', ') }</p>
    </div>
  }
}


class TitleDefault extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }

}
  TitleDefault.defaultProps = {
    text : 'Titulo por defecto'
  }


  class Contador extends Component {
    //state = {contador: 2}

    constructor (props) {
      super(props)
      this.state = {contador : this.props.contadorInicial}
      setInterval( 
        () => {this.setState({contador : this.state.contador+1})}
        , 1000
      )
    }

    render() {
      return <ContadorNumero numero={this.state.contador} />
    }
  }

  Contador.defaultProps = {
    contadorInicial : 1
  }

class ContadorNumero extends Component {
  render() {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Primer componente con state</p>
        <Contador />,
        <Contador contadorInicial={100}/>
        <hr />
        <TitleDefault />
        <hr />
        <TextTres 
          arrayOfNumbers={[2,3,10]}
          multiply = {(number) => number * 4}
          objectWithInfo={{key:'value', key2: 'othervalue'}}
          title = {<h1>Tomalo</h1>}
         />
        <TextBis 
          arrayOfNumbers={[2,3,10]}
          objectWithInfo={{key:'value', key2: 'othervalue'}}
         />
        <hr />
        <Text text="Texto de string" number="2" boolean={true} />

        <Hello title=' Mundo cruel!' />
        <Helloarrow title=' Mundo cruel!' />
        <HelloES title=' Mundo cruel!' />
        
        <p>
        
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

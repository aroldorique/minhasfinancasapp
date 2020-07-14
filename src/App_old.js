import React from 'react';

/*
function App() {
  return (
    <div>
      hello world!
    </div>
  );
}
*/


class App extends React.Component {

  state = {
    numero1: null,
    numero2: null,
    resultado: null
  }

  somar = () => {
    const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2)
    this.setState({resultado: resultado})
  }



  render(){
    return (
      <div>
        <label>Primeiro Número:</label>
        <input type="text" 
              value={this.state.nome} onChange={(e) => this.setState({numero1: e.target.value})}/>
        <br/>
        <label>Segundo Número:</label>
        <input type="text" 
              value={this.state.nome} onChange={(e) => this.setState({numero2: e.target.value})}/>        
        <br/>
        <button onClick={this.somar}>
          Somar</button>
        <br/>
        O nome digitado foi: {this.state.resultado}        
      </div>
    );
  }  
}

export default App;
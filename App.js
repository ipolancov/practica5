import './App.css';
import React from 'react'
class Alumno extends React.Component
{
  state={
    nombre:"ivan",apellido:"polanco",nacimiento:1986
  }

  actualizar=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  render()
  {
    return(
      <div>
        <ul>
          <li>{this.state.nombre}</li>
          <li>{this.state.apellido}</li>
          <li>{this.state.nacimiento}</li>
        </ul>
        <input value={this.state.nombre} name="nombre"
        onChange={this.actualizar}></input>
        <select name='nacimiento' onChange={this.actualizar}>
          <option>1990</option>
          <option>1989</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
        </select>
      </div>
    );
  }
}
function Persona(props)
{
  return(
    <div>
      <ul>
        <li>{props.nombre}</li>
        <li>{props.apellido}</li>
      </ul>
    
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>viñeta utilizando props</h5>
      <Persona nombre="ivan" apellido="polanco"/>
      <h5>viñeta utilizando states</h5>
      <Alumno/>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";
document.body.style.backgroundColor = "Black";

const Title = styled.h1`
  color: red;
  font-size: 3rem;
`;

const Contador = styled.section`
  margin-top: 10%;
  margin-left: 40%;
  margin-right: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10%;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 4vw;
  height: 8vh;
  font-size: 1.3rem;
  background-color: red;
  border-radius: 50%;
`;

const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class Desafio extends Component {
  state = {
    numero: 0
  };

  iniciar = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remover = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <section>
        <Contador>
          <Title>{this.state.numero}</Title>

          <BoxButtons>
            <Button onClick={this.iniciar}> + </Button>
            <Button onClick={this.remover}> - </Button>
          </BoxButtons>
        </Contador>
      </section>
    );
  }
}

export default Desafio;
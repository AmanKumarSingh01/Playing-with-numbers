import React from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import ParticlesContainer from './ParticlesContainer';
const style1={
    'margin': 'auto',
//   'width': '50%',
  'border': '3px solid green',
  'padding': '10px',
  'width': '20rem',
  'opacity':'100%',

  'backgroundImage':"linear-gradient( #A1FFCE,#faffd1)"
  
}
class Trivia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', result :''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }


      handleSubmit(event) {
          console.log(this.state.value)
          axios.get('http://numbersapi.com/'+this.state.value+'/trivia?json')
        .then(response => {
          this.setState({result : response.data.text})
          console.log(this.state.result)
        })

        .catch(error => {
          console.log(error);
        });
        event.preventDefault();
      }


      render() {
        
        return (
          <div>
              <ParticlesContainer/>
              <Card style={style1}> 
                  <Card.Header>
                      Trivia
                  </Card.Header>
                  <Card.Title> Accepted types :"Random" & "Number(1, 2 or etc)"</Card.Title>
                  <Card.Body>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                  </Card.Body>
                  <Card.Footer>
                      {this.state.result}
                  </Card.Footer>
              </Card>
          </div>
        )}
}

export default Trivia;
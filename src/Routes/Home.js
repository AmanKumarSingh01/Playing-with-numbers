import React from 'react'
import './Particles.css'
import ParticlesContainer from './ParticlesContainer';
import { Card   } from 'react-bootstrap';

const style1={
    'margin': 'auto',
//   'width': '50%',
  'border': '3px solid green',
  'padding': '10px',
  'width': '18rem',
  'opacity':'100%',

  'backgroundImage':"linear-gradient( #A1FFCE,#faffd1)"
}
class Home extends React.Component{
    render(){
        return(
            <div>
                <ParticlesContainer/>
                <Card style={style1}>
                    <Card.Body>
                        <Card.Header>Playing with numbers</Card.Header>
                        <Card.Text>
                            <strong>It tells about all the numbers between 1-9999 everything <br/>
                            The following options provided<br/>
                            1. Math <br/>
                            2. Trivia <br/>
                            3. Date <br/>
                            Come fall in love with numbers!!</strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Home;
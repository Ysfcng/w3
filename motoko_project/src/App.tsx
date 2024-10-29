import './App.css';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { record } from './declarations/backend';

function App(){
let arr=[{
  index:"",
card_title:"",
description:"Some quick example text to build on the card title and make up the bulk of the card\'s content."
}];
console.log(record)
return (
    <div className="App w-100 bg-white">
      {
arr.map((text,i)=>{
  return (
  <Card style={{ width: '10rem',display:'inline-block' }} key={arr[i].index}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{arr[i].card_title}</Card.Title>
    <Card.Text>
      {arr[i].description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
})



      }
   
  </div>
  );
}

export default App;

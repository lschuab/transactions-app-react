import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Example extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleLogin = async e => {
    e.preventDefault()
    let result = await axios.post('http://localhost:8000/sessions', this.state)
    localStorage.setItem('token', result.data.token)
  }

  
  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input 
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            onChange={e => this.handleChange(e)}  
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder" 
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
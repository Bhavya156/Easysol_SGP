import React, { Component } from 'react'
import { Form,Button,FloatingLabel} from 'react-bootstrap'
import {App} from '../App'
export default class Admin extends Component {
    render() {
        return (
            <div className="LoginFields" method="POST" action="/logininfo" >
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
  <div className="SubmitButton" ><Button variant="primary">Submit</Button></div>
          </div>
        )
    }
}

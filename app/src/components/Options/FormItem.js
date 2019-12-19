import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const FormItem = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log(`${name}, ${email}, ${message}`);

    const form = axios.post("/api/form", {
      name,
      email,
      message
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleName" style={{ textAlign: "right" }}>
          Name
        </Label>
        <Input
          type="text"
          name="name"
          id="exampleName"
          placeholder="with a placeholder"
          style={{ width: "600px", margin: "auto" }}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
          style={{ width: "600px", margin: "auto" }}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          style={{ width: "600px", margin: "auto" }}
          onChange={e => setMessage(e.target.value)}
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

export default FormItem;

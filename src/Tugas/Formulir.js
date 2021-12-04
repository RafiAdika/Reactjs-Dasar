import React from 'react'
import { Form, Row, Col, Button,} from 'react-bootstrap'

const Formulir =() => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                <h4>Tambah Data Roti</h4>
                <hr />
                </Col>
            </Row>
        <Row>
            <Col>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Roti</Form.Label>
          <Form.Control type="text" placeholder="Nama Roti" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>QTY</Form.Label>
          <Form.Control type="text" placeholder="QTY" required/>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Harga Roti</Form.Label>
          <Form.Control type="password" placeholder="Harga Roti" required/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Col>
      </Row>
      </div>
    )
}

export default Formulir
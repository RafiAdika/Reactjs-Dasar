import React from 'react'
import { Form, Row, Col, Button,} from 'react-bootstrap'

const Formulir =({roti, harga, total, handleChange, handleSubmit, id}) => {
    return (
        <div style={{borderRadius:"15px"}} className="mt-0">
            <Row>
                <Col style={{paddingTop:"10px"}}>
                <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                <hr />
                </Col>
            </Row>
        <Row>
            <Col>
        <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="roti">
          <Form.Label><b>Tambah Nama Roti</b></Form.Label>
          <Form.Control type="text" style={{backgroundColor:"silver",borderRadius:"10px"}} placeholder="Nama Roti" name="roti" value={roti} onChange={(event) => handleChange(event)} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="harga">
          <Form.Label><b>Harga</b></Form.Label>
          <Form.Control type="number" style={{backgroundColor:"silver",borderRadius:"10px"}} placeholder="Harga" name="harga" value={harga} onChange={(event) => handleChange(event)} required/>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="total">
          <Form.Label><b>Total Produk</b></Form.Label>
          <Form.Control type="number" style={{backgroundColor:"silver",borderRadius:"10px"}} placeholder="Total Produk" name="total" value={total} onChange={(event) => handleChange(event)} required/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button style={{marginLeft:"10px"}}variant="primary" type="submit">
          Tambah
        </Button>
      </Form>
      </Col>
      </Row>
      </div>
    )
}

export default Formulir
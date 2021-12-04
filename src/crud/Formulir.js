import React from 'react'
import { Form, Row, Col, Button,} from 'react-bootstrap'

const Formulir =({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                <hr />
                </Col>
            </Row>
        <Row>
            <Col>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama Buku</Form.Label>
          <Form.Control type="text" placeholder="Nama Buku" name="nama" value={nama} onChange={(event) => handleChange(event)} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="deskripsi">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control type="text" placeholder="Deskripsi" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} required/>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="harga">
          <Form.Label>Harga Buku</Form.Label>
          <Form.Control type="text" placeholder="Harga Buku" name="harga" value={harga} onChange={(event) => handleChange(event)} required/>
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
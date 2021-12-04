import React from 'react';
import { Table } from 'react-bootstrap'


const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Table striped bordered hover variant="secondary" >
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Roti</th>
      <th>Harga</th>
      <th>QTY</th>
      <th>Total Harga</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    {bukus.map((roti, index) => {
      return(
    <tr style={{backgroundColor:"silver"}}>
      <td>{index + 1}</td>
      <td>{roti.roti}</td>
      <td>{roti.harga}</td>
      <td>{roti.total}</td>
      <td>{roti.total*roti.harga}</td>
      <td>
        <button className="btn btn-success mr-1" onClick={() => editData(roti.id)}>Edit</button>
        &nbsp;
        <button className="btn btn-danger mr-1" onClick={() => hapusData(roti.id)}>Hapus</button>
        </td>
    </tr>
    );
  })}
  </tbody>
</Table>

        );
};

export default Tabel;
import React from 'react';
import { Table, Card } from 'react-bootstrap'


const roti = [
    {
        nama: 'Sari Roti',
        QTY: 100,
        harga: 4500
    },
    {
        nama: 'Paroti',
        QTY: 80,
        harga: 7000
    },
    {
        nama: 'Mr. Bread',
        QTY: 200,
        harga: 16000
    },
    {
        nama: 'BreadTalk',
        QTY: 50,
        harga: 7500
    },
    {
        nama: 'Roti Tawar Cheese',
        QTY: 120,
        harga: 26900
    },
    {
        nama: 'MyRoti',
        QTY: 90,
        harga: 14500
    },
    {
        nama: 'Roti Tawar Kupas',
        QTY: 80,
        harga: 13000
    },
    {
        nama: 'komugi',
        QTY: 300,
        harga: 50000
    },
    {
        nama: 'BreadLife',
        QTY: 80,
        harga: 60000
    },
    {
        nama: 'RotiBoy',
        QTY: 400,
        harga: 13000
    }
    
]
const total_bayar = roti.reduce((total_harga, makanan) => total_harga + makanan.harga, 0)
const total_barang = roti.reduce((total_harga, makanan) => total_harga + makanan.QTY, 0)
const total_semua = roti.reduce((total_harga, makanan) => total_harga + makanan.QTY*makanan.harga, 0)
const Tabel = () => {
    return (
        <div>
        <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Roti</th>
      <th>QTY</th>
      <th>Harga </th>
      <th>Total Harga</th>
      <th>Total Barang</th>
    </tr>
  </thead>
  {roti.map((makanan, index) =>(
  <tbody>
    <tr>
      <td>{index + 1}.</td>
      <td>{makanan.nama}</td>
      <td>{makanan.QTY}</td>
      <td>Rp {makanan.harga}</td>
      <td>Rp {makanan.harga * makanan.QTY}</td>
      <th>Jumlah Barang : {total_barang}</th>
    </tr>
    <tr>
        <td></td>
        <th colSpan="4"> Total Keseluruhan Harga Roti</th>
        <td>Rp {total_semua}</td>
    </tr>
  </tbody>
  ))}
</Table>
</div>
<div>
<Card>
  <Card.Header><h3>Harga Roti Di Bawah Rp 50.000</h3></Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-3">
      <p>
      {roti.filter((makanan) => makanan.harga < 50000).map((makanan, index) => (
                    <p>{index +1}. {makanan.nama} = Rp {makanan.harga}</p>
                ))}
      </p>
      <footer>
        <h4> Total Harga : {total_bayar}</h4>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</div>
</div>
        );
};

export default Tabel;
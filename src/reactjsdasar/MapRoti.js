import React from 'react'

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

// Reduce
const total_bayar = roti.reduce((total_harga, makanan) => total_harga + makanan.harga*makanan.QTY, 0)
const Map = () => {  
    return (
        <div>
            <h2>Toko Roti Ninjutsu</h2>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Roti</th>
                    <th>QTY</th>
                    <th>Harga</th>
                    <th>Total Harga</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                {roti.map((makanan, index) =>(
                    <p>{index + 1}.</p>
                ))}
                </td>
                        <td>
                {roti.map((makanan, index) =>(
                    <p>{makanan.nama}</p>
                ))}
                </td>
                        <td>
                {roti.map((makanan, index) =>(
                    <p>{makanan.QTY}</p>
                ))}
                </td>
                        <td>
                {roti.map((makanan, index) =>(
                    <p> Rp. {makanan.harga}</p>
                ))}
                </td>
                        <td>
                {roti.map((makanan, index) =>(
                    <p>  Rp. {makanan.harga*makanan.QTY}</p>
                ))}
                </td>
                </tr>
                </tbody>
                </table>


            <h2>Promo Roti Kurang Dari 50.000</h2>
            <ul>
                {roti.filter((makanan) => makanan.harga < 50000).map((makanan, index) => (
                    <p>{index +1}. {makanan.nama} = Rp {makanan.harga}</p>
                ))}
            </ul>
            <h3>Total Bayar : {total_bayar}</h3>
        </div>
    )
}

export default Map
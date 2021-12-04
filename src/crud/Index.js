import React from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'
 

export default class Crud extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            rotis : [],
            nama : "",
            deskripsi : "",
            harga : "",
            id : "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.id === "")
        // console.log(this.state.rotis);
        this.setState({
            rotis: [
                ...this.state.rotis,
                {
                    id: this.state.rotis.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                }
            ]
        })
     else {
        const rotiYangDiPilih = this.state.rotis
        .filter((roti) => roti.id !== this.state.id)
        .map((filterroti) => {
            return filterroti 
        })
        this.setState({
            rotis: [
                ...rotiYangDiPilih,
                {
                    id: this.state.rotis.length + 1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga,
                }
            ]
        })
    }
        this.setState({
            nama: "",
            deskripsi: "",
            harga: "0",
            id: ""
        })
    }
        editData = (id) => {
            // console.log("id: ", id)
            const rotiYangDiPilih = this.state.rotis
            .filter((roti) => roti.id === id)
            .map((filterroti) => {
                return filterroti
            })

            this.setState({
                nama : rotiYangDiPilih[0].nama,
                deskripsi : rotiYangDiPilih[0].deskripsi,
                harga : rotiYangDiPilih[0].harga,
                id : rotiYangDiPilih[0].id,
            })
        }
            hapusData = (id) => {
                const rotiBaru = this.state.rotis
                .filter((roti) => roti.id !== id)
                .map((filterroti) => {
                    return filterroti
                })

                this.setState({
                    rotis: rotiBaru
                })
            }

    render() {
        console.log(this.state.rotis);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                <Tabel rotis = {this.state.rotis} editData={this.editData} hapusData={this.hapusData}/>
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
                {/* <h2>Hallo</h2> */}
            </div>
        )
    }
}
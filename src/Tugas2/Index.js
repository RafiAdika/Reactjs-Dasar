import React from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'
import {Container, Row, Col} from 'react-bootstrap'
 

export default class Crud extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            bukus : [],
            roti : "",
            harga : "",
            total : "",
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
        alert('Sukses untuk menambahkan');
        if(this.state.id === "")
        // console.log(this.state.bukus);
        this.setState({
            bukus: [
                ...this.state.bukus,
                {
                    id: this.state.bukus.length+1,
                    roti: this.state.roti,
                    harga: this.state.harga,
                    total: this.state.total
                }
            ]
        })
        else {
            const rotiYangDiPilih = this.state.bukus
            .filter((roti) => roti.id !== this.state.id)
            .map((filterRoti) => {
                return filterRoti 
            })
            this.setState({
                bukus: [
                    ...rotiYangDiPilih,
                    {
                        id: this.state.bukus.length + 1,
                        roti: this.state.roti,
                        harga: this.state.harga,
                        total: this.state.total,
                    }
                ]
            })
        }
        this.setState({
            roti: "",
            harga: "",
            total: "",
            id: ""
        })
    }

    editData = (id) => {
        // console.log("id: ", id)
        const rotiYangDiPilih = this.state.bukus
        .filter((roti) => roti.id === id)
        .map((filterRoti) => {
            return filterRoti
        })

        this.setState({
            roti : rotiYangDiPilih[0].roti,
            harga : rotiYangDiPilih[0].harga,
            total : rotiYangDiPilih[0].total,
            id : rotiYangDiPilih[0].id,
        })
    }
        hapusData = (id) => {
            const rotiBaru = this.state.bukus
            .filter((roti) => roti.id !== id)
            .map((filterRoti) => {
                return filterRoti
            })

            this.setState({
                bukus: rotiBaru
            })
        }

    render() {
        console.log(this.state.bukus);
        return (
            <div>
                <NavbarComponent />
                <center><h1 style={{fontFamily:"sans-serif"}}>Toko Roti Hore</h1></center>
                <div className="container mt-5">
                    <Container>
                        <Row>
                <Col><div class="shadow p-3 mb-5 bg-body rounded"><Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/></div></Col>
                <Col><Tabel bukus = {this.state.bukus} editData={this.editData} hapusData={this.hapusData}/></Col>
                </Row>
                </Container>
                </div>
<footer style={{ backgroundColor:"black"}} class="page-footer font-small pt-4">
  <div class="container">
    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1" style={{color:"white",fontFamily:"Copperplate"}}>Enjoy The Website</h5>
      </li>
      {/* <li class="list-inline-item">
        <a href="#!" class="btn btn-outline-white btn-rounded">Sign up!</a>
      </li> */}
    </ul>
  </div>
  <hr style={{ color:"white"}} />
  <div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2021 Copyright:
     Tugas 2
  </div>
</footer>
                {/* <h2>Hallo</h2> */}
            </div>
        )
    }
}
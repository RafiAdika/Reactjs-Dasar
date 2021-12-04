import React from 'react'
// import OperanMobil from './OperanMobil'

export default class StatePropsMobil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobil : 'Lexus,Skyline,Mclaren'
        }
    }

    mobilBaru = (mobil_baru) => {
        this.setState({
            mobil: mobil_baru
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.mobil}</h2>
                <button onClick={() => this.mobilBaru("Skyline,Mclaren")}>Ganti Mobil</button>
                {/* <OperanMobil mobil = {this.state.mobil}/>  */}
            </div>
        )
    }
}
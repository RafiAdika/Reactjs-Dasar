import React from 'react'
import SubLifecycle from './SubLifecycle';

export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan : 'Bakso',
            data: {},
            tampilHalamanSub: false
        };
    }

    // componentsDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => console.log("Hasil: ", response.json()))
    //     .then((json) => console.log("Json: ", json))
    // }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then((response) => response.json())
    //         .then((json) => {console.log("Simpan Then 2 : ", json)
    //     })
    // }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data : json
                })
        })
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }

    render() {
        // console.log("Data : ", this.state.data)
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                {this.state.tampilHalamanSub && <SubLifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}

                <button onClick={() => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}
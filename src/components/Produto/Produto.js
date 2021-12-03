import { Component } from "react";
import styles from './Produto.module.css'
import Cards from "../Cards/Cards";

export default class Produto extends Component {
    
    constructor(props){
        super(props);
        this.state = {produtoList: []};
    }

    onCarregamentoProdutoFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8040/produto")
        .then(response => response.json(), this.onCarregamentoProdutoFalhou)
        .then(json => this.setState({ produtoList : json }), this.onCarregamentoProdutoFalhou);
    }

    render() {
        return ( 
            <section class={styles.produto}>
                {
                    this.state.produtoList.map(
                        function (Produto) {
                            return <Cards Produto={Produto} />
                        },
                    )
                }
            </section>  
            
        )
    }
}
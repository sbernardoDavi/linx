import styles from './Cards.module.css'

export default function Cards({ Produto }) {
    return(
        <div>
            <div class={styles.card}>
                <img src={Produto.imagemUrl}></img>
            </div>
            <div class={styles.container}>
                <h4><b>{Produto.nome}</b></h4>
                <p>{Produto.descricao}</p>
                <p> De: R$ {Produto.oldPrice}</p>
                <p> Por: R$ {Produto.price}</p>
                <p> Ou {Produto.parcela.numParcelas}x de R${Produto.parcela.value} </p>
                <div class={styles.comprar}>
                    <button class={styles.comprar}>  </button>
                </div>
    
            </div>
 
            <div class={styles.aindamais}>
                    <button> Ainda mais produtos aqui!</button>
                </div>
      
        </div>
        
    )
}

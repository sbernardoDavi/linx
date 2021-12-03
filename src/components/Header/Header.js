import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.auto1}>
             <header className={styles.fundo}>
                <article className={styles.textoinicial}>
                    <section className={styles.txt1}>
                        <div>
                            <p>uma seleção de produtos</p>
                            <h1>especial para você</h1>
                            </div>
                    </section>
                    <section className={styles.textoinicial3}>
                        <div>
                            <p>
                                Todos os produtos desta lista foram selecionados a partir de sua navegação. Aproveite!
                            </p>
                        </div>
                    </section>
                    <section className={styles.flex1}>
                        <div className={styles.btn1}>
                            <button className> Conheça a Linux</button>
                        </div>
                        <div className={styles.btn1}>
                            <button> Ajude o algoritimo</button>
                        </div>
                        <div className={styles.btn1}> 
                            <button>Seus produtos </button>
                        </div>
                        <div className={styles.btn1}>
                            <button>Compartilhe</button>
                        </div>  
                    </section>
                </article>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>

    )
}

export default Header
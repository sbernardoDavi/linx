import styles from './Footer.module.css'

function Footer(){
    return(
        <div>
              <div class={styles.linha}>
                    <h3 class={styles.titlelines}><span>Compartilhe a novidade</span></h3>
                </div>
                <div class={styles.novidades}>
                        <p class={styles.novidades}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                </div>
                <section class={styles.flex3}>
                        <div class={styles.nome}>
                            <form>
                                <p class={styles.amigo}>Nome do seu amigo</p>
                                <input type="text" class={styles.rname} name="rname"></input>
                            </form>
                        </div> 
                        <div class={styles.email}>
                            <form>
                                <p class={styles.p_email}>Email do seu amigo</p>
                                <input type="text" class={styles.rname} name="rname"></input>
                            </form>
                        </div> 
                </section>
                <br></br>
                <div class={styles.btn_enviar}>
                    <button class={styles.enviar_para}> Enviar agora </button>
                </div>
                <div class={styles.f_footer}>
                </div>
        </div>

    )
}

export default Footer
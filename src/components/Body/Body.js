import styles from './Body.module.css'

function Body(){
    return(
            <article className={styles.corpo}>
                <section className={styles.grid1}>
                    <div class={styles.anuncio}>
                        <div class={styles.tituloanuncio}>
                        Ajude o algoritimo a ser certeiro
                        </div>
                        <p class="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. 
                        Mauris rhoncus erat sed interdum dignissim. 
                        Suspendisse semper pretium consectetur. 
                        Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. 
                        Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        <br></br>
                        <br></br>
                        Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. 
                        Curabitur eu magna eget turpis condimentum ultrices. 
                        Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. 
                        Etiam ultricies a ante vehicula pharetra. 
                        Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. 
                        Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo. 
                        odio ante suscipit libero, at mattis augue est vel metus.iaculis ex tempus quis. 
                        </p>
                    </div>
                    <div className={styles.formulario1}>
                        <form className={styles.form}>
                            <label><b>Seu nome</b></label>
                            <input class={styles.input} type="text"></input>
                            <label><b>E-mail</b></label>
                            <input class={styles.input}type="text"></input>
                            <label><b class={styles.texto}>Cpf</b></label>
                            <input class={styles.cpf} type="text"></input>
                            <ul class={styles.genero}>
                                    <li class={styles.lista}>
                                        <input type="radio" class="sexoMasc" name="genre" value="masculino"></input>
                                        <label for="male">Masculino</label>
                                    </li>
                                    <li class={styles.lista}>
                                        <input type="radio" class="sexoFem" name="genre" value="feminino"></input>
                                        <label for="female">Feminino</label>
                                    </li>
                                </ul>
                            <button class={styles.enviar}>Enviar</button>
                        </form>
                    </div>
            </section>
            <div class={styles.linha}>
                <h3 class={styles.titlelines}> <span>Sua seleção especial</span></h3>
                <br></br>
                <br></br>
            </div>
        </article>
    )
}

export default Body
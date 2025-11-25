import s from './portfolio.module.css'


export function Portfolio(){


    return(
        <section>
            <div className={`${s.inner} ${s.portfolioBg}`}>
                <h1 className={s.header}>Portfolio</h1>
            </div>
            <div className={s.portfolioContent}>
                <p className={s.text}>Jeśli chcesz zobaczyć, jakie projekty już wykonywałam, napisz do mnie wiadomość mailową. Możesz dodatkowo wyszczególnić, co konkretnie cię interesuje - proza, poezja, praca dyplomowa?</p>
                <img className={s.photo} src={`${import.meta.env.BASE_URL}photos/folder.png`} alt="folder" />
            </div>
            
        </section>
    )
}
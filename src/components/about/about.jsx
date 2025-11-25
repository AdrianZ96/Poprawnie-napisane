import s from './about.module.css'


export function About(){


    return(
        <section className={s.bgcolor}>
            <div className={s.container}>
                <h2 className={s.title}>O mnie</h2>
                <img className={s.author} src={`${import.meta.env.BASE_URL}photos/author.jpg`} alt="Author" />
            </div>
            <div className={s.textContainer}>
                <h2 className={s.titleText}>Pasjonatka języka polskiego i literatury. Magister filologii polskiej</h2>
                <p className={s.text}>Tutaj piszę coś o sobie, ale nie mam siły na wymyślanie, więc załóżmy, że coś o archeologii, artykułach naukowych i różnorodności pozycji na rynku wydawniczym. I tak dalej....</p>
            </div>
        </section>
    )

}
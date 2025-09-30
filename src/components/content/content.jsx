import s from './content.module.css'

export function Content(){


    return (
        <section className={s.content}>
            <img className={s.photo} src={`${import.meta.env.BASE_URL}photos/laptop.jpg`} alt="laptop" />
            <article className={s.text}>Masz już napisaną książkę, ale nie wiesz, co dalej? Zdaj się na mnie i wydaj bestseller.</article>
        </section>
    )
}
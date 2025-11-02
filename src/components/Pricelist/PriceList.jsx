import s from './PriceList.module.css';
import '@fontsource/imperial-script';

export function PriceList() {

    return (
        <section className={s.priceBg}>
            <h2 className={`${s.header} ${s.inner}`}>Cennik</h2>
            <div className={s.pricePanel}>
                <p className={s.pText}>Prześlij mi próbkę swojego tekstu, a ja dokonam indywidualnej wyceny.</p>
                <p className={s.qText}>dlaczego?</p>
                <p className={s.pText}>Tekst wyceniam na podstawie ilości pracy, którą muszę włożyć w redakcję lub korektę. 
Składa się na to liczba błędów oraz stopień zaawansowania języka.</p>
            </div>
        </section>
    )
}
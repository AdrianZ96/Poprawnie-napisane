import s from './offer.module.css';
import '@fontsource/imperial-script';

export function Offer() {
  const sprite = `${import.meta.env.BASE_URL}icons/sprite.svg`

  return (
    <section>
      <div className={`${s.inner} ${s.offerBg}`}>
        <h1 className={s.header}>Oferta</h1>
      </div>
      <div className={s.offerText}>
        <ul className={s.offerList} >
          <li className={s.oList}>
            <svg className={s.icon} viewBox="0 0 32 32"><use href={`${sprite}#icon-book`} /></svg>
            <p className={s.liText}>Edycja prozy</p>
            <button className={s.offerBtn} type="button">czytaj więcej</button>
          </li>
          <li className={s.oList}> 
            <svg className={s.icon} viewBox="0 0 32 32"><use href={`${sprite}#icon-pencil`} /></svg>
            <p className={s.liText}>Edycja prac dyplomowych</p>
            <button className={s.offerBtn} type="button">czytaj więcej</button>
          </li>
          <li className={s.oList}> 
            <svg className={s.icon} viewBox="0 0 32 32" ><use href={`${sprite}#icon-pen`} /></svg>
            <p className={s.liText}>Korekta tekstów</p>
            <button className={s.offerBtn} type="button">czytaj więcej</button>
          </li>
          <li className={s.oList}> 
            <svg className={s.icon} viewBox="0 0 32 32" ><use href={`${sprite}#icon-quill`} /></svg>
            <p className={s.liText}>Przepisywanie tekstu</p>
            <button className={s.offerBtn} type="button">czytaj więcej</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

import '@fontsource/imperial-script';
import s from './header.module.css';

export function Header() {
  return (
    <div>
      <p className={`${s.title} ${s.right}`}>Poprawnie</p>
      <p className={`${s.title} ${s.left}`}>napisane</p>

      <div className={s.icons}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={s.iconLink}>
          <svg className={s.icon} viewBox="0 0 32 32">
            <use href="/icons/sprite.svg#icon-instagram" />
          </svg>
        </a>

        <a href="mailto:test@example.com" aria-label="Kontakt e-mail" className={s.iconLink}>
          <svg className={s.icon} viewBox="0 0 36 32">
            <use href="/icons/sprite.svg#icon-bubbles" />
          </svg>
        </a>

        <button type="button" aria-label="Otwórz wyszukiwarkę" className={s.iconBtn}>
          <svg className={s.icon} viewBox="0 0 32 32">
            <use href="/icons/sprite.svg#icon-menu" />
          </svg>
        </button>
      </div>
    </div>
  );
}

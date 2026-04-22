import { useLanguage } from '../../hooks';
import './LanguageToggle.css';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'vi' ? 'English' : 'Vietnamese'}`}
      title={`Switch to ${language === 'vi' ? 'English' : 'Vietnamese'}`}
    >
      <div className="language-toggle-inner">
        <span className="language-code">
          {language === 'vi' ? 'VI' : 'EN'}
        </span>
      </div>
    </button>
  );
}

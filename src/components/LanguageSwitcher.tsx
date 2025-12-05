import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full p-1 border border-border">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 h-8 text-xs font-medium transition-all ${
          language === 'en' 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-muted'
        }`}
      >
        ENG
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className={`rounded-full px-3 py-1 h-8 text-xs font-medium transition-all ${
          language === 'ru' 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-muted'
        }`}
      >
        РУС
      </Button>
    </div>
  );
};

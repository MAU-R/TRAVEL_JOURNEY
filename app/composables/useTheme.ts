// app/composables/useTheme.ts
const THEMES = ["light", "abyss", "synthwave", "business"] as const;
type Theme = typeof THEMES[number];

const STORAGE_KEY = "app-theme";

export function useTheme() {
  const current = useState<Theme>("theme", () => "light");

  const apply = (theme: Theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    current.value = theme;
  };

  const cycle = () => {
    const idx = THEMES.indexOf(current.value);
    apply(THEMES[(idx + 1) % THEMES.length]);
  };

  const init = () => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    apply(saved && THEMES.includes(saved) ? saved : "light");
  };

  return { current, cycle, init };
}

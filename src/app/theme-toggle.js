import { useTheme } from "./theme-context";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center sm:justify-end items-center my-2 pr-2">
      <p className="mr-2 text-lg">{"Don't like the color theme? Change it:"}</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}></input>
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

function DarkModeButton() {
  const [theme, setTheme] = useState(".light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex justify-end mt-3 mx-10">
      <button onClick={toggleTheme}>
        {theme === "light" ? <HiMoon /> : <HiSun />}
      </button>
    </div>
  );
}

export default DarkModeButton;

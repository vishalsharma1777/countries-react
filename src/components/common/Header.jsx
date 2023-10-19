import '../../styles/Header.css';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
function Header() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={darkMode? "headerDark headerContainer":"headerContainer"}>
        <div className={darkMode? "headerDark header":"header"}>
            <div className='heading'>Where in the world ?</div>
            <div className='themeToggle' onClick={toggleTheme}><i className="bi bi-moon-fill"></i>&nbsp;&nbsp;Dark Mode</div>
        </div>
        </div>
    );
}

export default Header;
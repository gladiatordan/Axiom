import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/layout/Header.css'

// Navigation Data Structure
const navMap = {
  About: ["Axiom Overview", "Roadmap", "Staff", "Senate", "Volunteering"],
  Policies: ["Privacy Policy", "Terms of Service", "Legal Notice", "Data Policies", "Account Policies", "Code of Conduct", "Rehabilitation System"],
  News: ["Patch Notes", "Community", "Development"],
  Game: ["Play", "Wiki", "Metrics", "Tools"], // Sub-menus would be handled by a recursive component in a real build
  Community: ["Senate", "Discord"],
};

const Header = () => {
  const { user } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        {/* Placeholder for Logo */}
        <div className={styles.logoPlaceholder}>AXIOM</div>
      </div>

      <nav className={styles.navContainer}>
        {Object.keys(navMap).map((key) => (
          <div 
            key={key} 
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            <button className={styles.navButton}>{key}</button>
            
            {/* The Dropdown */}
            <div className={`${styles.dropdown} ${activeDropdown === key ? styles.show : ''}`}>
              {navMap[key].map(subItem => (
                <div key={subItem} className={styles.dropdownItem}>{subItem}</div>
              ))}
            </div>
          </div>
        ))}

        {/* Static Buttons */}
        <div className={styles.navItem}><button className={styles.navButton}>Support</button></div>
        
        {user?.role === 'ADMIN' || user?.role === 'STAFF' ? (
           <div className={styles.navItem}><button className={`${styles.navButton} ${styles.forgeBtn}`}>Forge</button></div>
        ) : null}
      </nav>

      <div className={styles.profileSection}>
        {user ? (
            <div className={styles.profileStub}>
                <span className={styles.userRole}>{user.role}</span>
                <span className={styles.userName}>{user.username}</span>
            </div>
        ) : (
            <button className={styles.loginBtn}>LOGIN</button>
        )}
      </div>
    </header>
  );
};

export default Header;
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Header = () => {

  const { user, isAuthenticated } = useAuth();

  // Placeholder staff check - will eventually tie into Discord roles
  const isStaff = true;

  return (
    <header className="fixed-header">
      <nav>
        <Link to="/" className="logo">OMNIUM</Link>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          
          <li className="dropdown">
            <span>About</span>
            <ul className="submenu"><li><span className="placeholder">TBD</span></li></ul>
          </li>

          <li className="dropdown">
            <span>Policies</span>
            <ul className="submenu"><li><span className="placeholder">TBD</span></li></ul>
          </li>

          <li className="dropdown">
            <span>News</span>
            <ul className="submenu"><li><span className="placeholder">TBD</span></li></ul>
          </li>

          <li className="dropdown">
            <span>Game</span>
            <ul className="submenu">
              <li><Link to="/play">Play</Link></li>
              <li className="nested-dropdown">
                <span>Tools</span>
                <ul className="nested-submenu">
                  <li><Link to="/tools/skill-calculator">Skill Calculator</Link></li>
                  <li><Link to="/tools/crafterbuddy">CrafterBuddy</Link></li>
                  <li><Link to="/tools/spacebuddy">SpaceBuddy</Link></li>
                  <li><Link to="/tools/contracts">Contracts</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <span>Community</span>
            <ul className="submenu">
              <li className="nested-dropdown">
                <span>Senate</span>
                <ul className="nested-submenu">
                  <li><Link to="/senate/proposals">Senate Proposals</Link></li>
                  <li><Link to="/senate/discussion">Senate Discussion</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><Link to="/support">Support</Link></li>

		  <li>{isStaff && <Link to="/forge" className="dropdown">Forge</Link>}</li>
        </ul>

		<div className="user-actions">
		  
          {isAuthenticated ? (
            <div className="profile-group">
              <span className="user-name">{user?.name || 'Pilot'}</span>
              <Link to="/profile" className="profile-btn">Profile</Link>
            </div>
          ) : (
            <div className="auth-group">
              <Link to="/login" className="register-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
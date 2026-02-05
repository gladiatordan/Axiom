// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';

// Placeholder for the requested page containers
const Page = ({ title }) => (
  <div className="page-container">
    <h1>{title}</h1>
    <p>This is the placeholder for {title}.</p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="event-horizon">
          <Header />
          <main className="content-body">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Game Routes */}
              <Route path="/play" element={<Page title="Play" />} />
              <Route path="/tools/skill-calculator" element={<Page title="Skill Calculator" />} />
              <Route path="/tools/crafterbuddy" element={<Page title="CrafterBuddy" />} />
              <Route path="/tools/spacebuddy" element={<Page title="SpaceBuddy" />} />
              <Route path="/tools/contracts" element={<Page title="Contracts" />} />
              
              {/* Community & Senate Routes */}
              <Route path="/senate/proposals" element={<Page title="Senate Proposals" />} />
              <Route path="/senate/discussion" element={<Page title="Senate Discussion" />} />
              
              {/* Support */}
              <Route path="/support" element={<Page title="Support" />} />
              
              {/* Auth Placeholders */}
              <Route path="/login" element={<Page title="Login" />} />
              <Route path="/register" element={<Page title="Register" />} />
              <Route path="/profile" element={<Page title="User Profile" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
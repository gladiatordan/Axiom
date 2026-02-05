import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// Placeholder component for new pages
const PagePlaceholder = ({ title }) => <div className="page-container"><h1>{title}</h1><p>Content coming soon...</p></div>;

function App() {
  return (
    <Router>
      <div className="event-horizon">
        <Header />
        <main className="content-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<PagePlaceholder title="Play Now" />} />
            <Route path="/tools/skill-calculator" element={<PagePlaceholder title="Skill Calculator" />} />
            <Route path="/tools/crafterbuddy" element={<PagePlaceholder title="CrafterBuddy" />} />
            <Route path="/tools/spacebuddy" element={<PagePlaceholder title="SpaceBuddy" />} />
            <Route path="/tools/contracts" element={<PagePlaceholder title="Contracts" />} />
            <Route path="/senate/proposals" element={<PagePlaceholder title="Senate Proposals" />} />
            <Route path="/senate/discussion" element={<PagePlaceholder title="Senate Discussion" />} />
            <Route path="/support" element={<PagePlaceholder title="Support" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
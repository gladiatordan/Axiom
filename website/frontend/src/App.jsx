import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Import your components
import Header from './layout/Header';
import DatapadLoader from './components/DatapadLoader';

// --- PLACEHOLDER PAGES (Move these to /src/pages/ later) ---
const Home = () => (
  <div>
    <h1 style={{ color: 'var(--c-accent-blue)' }}>WELCOME TO AXIOM</h1>
    <p>System Online. Datapad synchronization complete.</p>
  </div>
);

const About = () => (
  <div>
    <h1>ABOUT AXIOM</h1>
    <p>Project overview and roadmap data.</p>
  </div>
);

const Login = () => (
  <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid var(--c-gunmetal)', padding: '2rem' }}>
    <h2 style={{ borderBottom: '1px solid var(--c-accent-red)' }}>AUTHENTICATION REQUIRED</h2>
    <p>Please enter your credentials.</p>
  </div>
);

// We assume Forge is a separate heavy component, but we'll stub it here
const Forge = () => (
  <div>
    <h1 style={{ color: 'var(--c-accent-red)' }}>THE FORGE</h1>
    <p>Staff tools and authorized systems only.</p>
  </div>
);
// -----------------------------------------------------------


const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* Header stays static above everything */}
      <Header />

      {/* Main Content Area */}
      <main style={{ minHeight: '80vh', padding: '2rem', position: 'relative' }}>
        
        {/* The Key is crucial here! 
            It forces the Loader to reset on every page change, 
            giving that "Loading Datapad..." feel on every click.
        */}
        <DatapadLoader key={location.pathname}>
          <Outlet />
        </DatapadLoader>
      
      </main>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        borderTop: '1px solid var(--c-gunmetal-light)', 
        color: 'var(--c-text-muted)',
        marginTop: 'auto'
      }}>
        <p>AXIOM PROJECT // V.0.1.0 // SYSTEM NORMAL</p>
      </footer>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        
        {/* You can expand these routes based on your sitemap */}
        <Route path="policies" element={<div>Policies Page</div>} />
        <Route path="news" element={<div>News Page</div>} />
        <Route path="game" element={<div>Game Page</div>} />
        <Route path="community" element={<div>Community Page</div>} />
        
        {/* Protected Route (Forge) */}
        {/* In the future, wrap this in a <RequireAuth> component */}
        <Route path="forge" element={<Forge />} />
        
        {/* 404 Catch-all */}
        <Route path="*" element={<div>404 - DATA NOT FOUND</div>} />
      </Route>
    </Routes>
  );
}

export default App;
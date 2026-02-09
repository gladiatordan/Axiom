import { useEffect, useState } from 'react';
import '../styles/components/Loader.css';

const DatapadLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Enforce minimum 1 second load time
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger fade in animation for content
      setTimeout(() => setFadeIn(true), 50);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
        <div className={styles.text}>ACCESSING DATAPAD...</div>
      </div>
    );
  }

  return (
    <div className={`${styles.content} ${fadeIn ? styles.visible : ''}`}>
      {children}
    </div>
  );
};

export default DatapadLoader;
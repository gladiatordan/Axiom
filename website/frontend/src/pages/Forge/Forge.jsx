import './styles/Forge/Forge.css';

const Forge = () => {
    // In a real app, this would use React Router nested routes
    const activeToolUrl = "https://gitea.io"; // Example default

    return (
        <div className={styles.forgeContainer}>
            <aside className={styles.forgeSidebar}>
                <h3>FORGE TOOLS</h3>
                <ul>
                    <li>Wiki (Docmost)</li>
                    <li className={styles.active}>Gitea</li>
                    <li>Metrics</li>
                    <li>Logs</li>
                    <li>Planning</li>
                    <li>Staff Support</li>
                </ul>
            </aside>
            <main className={styles.forgeViewport}>
                <div className={styles.iframeWrapper}>
                    {/* Using an iframe as requested for external tool integration */}
                    <iframe 
                        src={activeToolUrl} 
                        title="Forge Tool" 
                        className={styles.toolFrame} 
                    />
                </div>
            </main>
        </div>
    );
};
export default Forge;
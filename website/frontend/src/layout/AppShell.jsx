import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import DatapadOverlay from "./DatapadOverlay";

export default function AppShell() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const start = performance.now();

    const fakeWork = new Promise((r) => setTimeout(r, 500));

    fakeWork.then(() => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, 1000 - elapsed);

      setTimeout(() => {
        if (active) setLoading(false);
      }, remaining);
    });

    return () => {
      active = false;
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="viewport">
        <DatapadOverlay active={loading} />
        <section className="content-stage">
          <Outlet />
        </section>
      </main>
    </>
  );
}

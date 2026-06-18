import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16" style={{ background: '#05120a' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

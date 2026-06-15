import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { PlaceholderPage } from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="who-we-are" element={<About />} /> {/* backward compatibility */}
          <Route path="services" element={<Services />} />
          <Route path="what-we-do" element={<Services />} /> {/* backward compatibility */}
          <Route path="our-clients" element={<PlaceholderPage title="Our Clients" />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



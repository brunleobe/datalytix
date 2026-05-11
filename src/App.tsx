import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<PlaceholderPage title="Who We Are" />} />
          <Route path="what-we-do" element={<PlaceholderPage title="What We Do" />} />
          <Route path="our-clients" element={<PlaceholderPage title="Our Clients" />} />
          <Route path="careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



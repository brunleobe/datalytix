import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ContactAndCareers } from './pages/ContactAndCareers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<PlaceholderPage title="Who We Are" />} />
          <Route path="what-we-do" element={<PlaceholderPage title="What We Do" />} />
          <Route path="our-clients" element={<PlaceholderPage title="Our Clients" />} />
          <Route path="careers" element={<ContactAndCareers />} />
          <Route path="blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="contact-us" element={<ContactAndCareers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



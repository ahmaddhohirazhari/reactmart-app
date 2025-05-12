import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

// import About from '@/pages/About';
// import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Catch-all for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

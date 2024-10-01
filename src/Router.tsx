import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Roadmap from './routes/Roadmap';
import Changelog from './routes/Changelog';
import Blog from './routes/Blog';
import Auth from './routes/Auth';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import DetailsPage from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<DetailsPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

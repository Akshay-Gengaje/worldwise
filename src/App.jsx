import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import PageLayout from "./layout/PageLayout";
import Login from "./pages/Login";
import AppLayout from "./layout/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./context/CitiesContext";

const App = () => {
  return (
    <PageLayout>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate to="cities" replace />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="list" element={<p>List</p>} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </PageLayout>
  );
};

export default App;

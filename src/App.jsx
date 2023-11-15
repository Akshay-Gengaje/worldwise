import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";

import Form from "./components/Form";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import { lazy } from "react";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./pages/ProtectedRoute";
import FullPageSpinner from "./components/FullPageSpinner";

// import Product from "./pages/Product";
// import Home from "./pages/Home";
// import Pricing from "./pages/Pricing";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AppLayout = lazy(() => import("./layout/AppLayout"));
const PageLayout = lazy(() => import("./layout/PageLayout"));

const App = () => {
  return (
    <AuthProvider>
      <PageLayout>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<FullPageSpinner />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to="cities" replace />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="list" element={<p>List</p>} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </PageLayout>
    </AuthProvider>
  );
};

export default App;

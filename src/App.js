import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Notfound from "./Components/NotFound/Notfound";
import Services from "./Components/Services/Services";
import SignIn from "./Components/SignIn/SignIn";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BookService from "./Components/BookService/BookService";
import Booking from "./Components/Booking/Booking";
import DeleteBooking from "./Components/DeleteBooking/DeleteBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/service"
              element={
                <PrivateRoute>
                  <Services />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/bookservice" element={<BookService />} />
            <Route path="/delete" element={<DeleteBooking />} />
            <Route path="/booking/:bookId" element={<Booking />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

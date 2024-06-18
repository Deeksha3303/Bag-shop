import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./components/SingleProduct"; // Adjust the path as needed
import BookPage from "./components/BookPage"; // Create this component
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Promotions from './components/Promotions';
import Products from './components/Products';
import Footer from './components/Footer';
import AppDrawer from './components/AppDrawer';
import SearchBox from './components/Search';
import { UIprovider } from './context/contextUI';
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "E-bag shop";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
          <UIprovider>
            <AppBar />
            <Banner />
            <Promotions />
            <div>
              <Typography variant="h4" padding={"4px"} display="flex" alignItems="center" justifyContent={"center"}> Our Products</Typography>
            </div>
            <Products />
            <Footer />
            <AppDrawer />
            <SearchBox />
          </UIprovider>
        </Container>
        <Switch>
          <Route path="/" exact component={HomePage} /> {/* Your home page component */}
          <Route path="/book" component={BookPage} /> {/* The page to navigate to */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

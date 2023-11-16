
import './styles/style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CreateRegistrant from './components/CreateRegistrant';
import LoginRegistrant from './components/LoginRegistrant';
import Main from './components/Main'

function App() {
  return (
    <div class="container mt-3">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateRegistrant/>}/>
          <Route path="/create-registrant" element={<CreateRegistrant/>}/>
          <Route path="/login-registrant" element={<LoginRegistrant/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

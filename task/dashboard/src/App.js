import './App.css';
import Notifications from './Notifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';

const App = () => {
    return (
        <>
            <Notifications />
            <div className='app'>
                <Header />
                <Login />
                <Footer />
            </div>
        </>
        
    )
}

export default App;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import Home from './app/home';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Home />
    </StrictMode>,
)

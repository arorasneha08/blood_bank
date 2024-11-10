import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { News } from './News.jsx'
import "../styles/news.css"
import { FAQs } from './FAQs.jsx'
import { Events } from './Events.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <News/> */}
    {/* <FAQs/> */}
    {/* <Events/> */}

  </StrictMode>,
)

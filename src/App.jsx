import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import Navigation from './components/Navigation'

export default function App(){
    return(
        <div>
                            <Navigation />

{/*             
            <BrowserRouter>
                App
                <Routes>
                    <Route path='/' element={Home} />
                </Routes>
            </BrowserRouter> */}
            App
        </div>
    )
}
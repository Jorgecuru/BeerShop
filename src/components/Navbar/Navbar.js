import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const Navbar = ({color}) => {
     return(
        <div 
            style={{
             background:color
         }} 
            className='centrado'>
            <div>
                <Link to='/'>
                     <h1> Cerveza Godua</h1>
                </Link>
                
            </div>

            <div>
                <Link to='/category/CERVEZAS SUAVES' className="Option">Cervezas Suaves</Link>
              <Link to='/category/CERVEZAS ROJAS' className="Option">Cervezas Rojas</Link>
              <Link to='/category/CERVEZAS AMARGAS' className="Option">Cervezas Amargas</Link>
              <Link to='/category/CERVEZAS FUERTES' className="Option">Cervezas Fuertes</Link>
            </div>
            
            <div> 
                <CartWidget />
            </div>

          

            
        </div>


    )
}

export default Navbar
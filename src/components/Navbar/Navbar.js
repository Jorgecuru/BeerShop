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
                <Link to='/category/CERVEZAS SUAVES' className="Option">Blonde Ale</Link>
              <Link to='/category/CERVEZAS ROJAS' className="Option">Amber Ale</Link>
              <Link to='/category/CERVEZAS AMARGAS' className="Option">IPA</Link>
            </div>
            
            <div> 
                <CartWidget />
            </div>

          

            
        </div>


    )
}

export default Navbar
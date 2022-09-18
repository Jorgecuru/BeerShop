import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ({color}) => {
     return(
        <div 
            style={{
             background:color
         }} 
            className='centrado'>
            <div>
                <h1> Cerveza Godua</h1>
            </div>

            <div>
                <button>BLONDE </button>
                <button>AMBER ALE</button>
                <button>IPA</button>
                <button>APA</button>
                <button>BARLEY WINE</button>
            </div>
            
            <div> 
                <CartWidget />
            </div>

          

            
        </div>


    )
}

export default Navbar
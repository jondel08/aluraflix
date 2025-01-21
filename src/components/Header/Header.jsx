import './Header.css'
import Boton from '../Boton/Boton'

const Header = () => {
   return (
      <>
         <div className='header'>
            <div>
               <img className='logo' src='./logoAlura.png' alt='Logo Alura' />
            </div>
            <div className='btn-container'>
               <Boton name="Home" />
               <Boton name="Nuevo vídeo" />
            </div>
         </div>
      </>
   )
}


export default Header;
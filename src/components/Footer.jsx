import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-content">
          <div className='footer-logo'>
            <img src="/logo.png" alt="" />
          </div>
          <div className="footer-contact">
            <h3>Contacto</h3>
            <p>+54 9 11 1234 5678</p>
            <p>tienda@email.com</p>
            <p>Calle Ficticia 742, Barrio del Sol, Buenos Aires, Argentina</p>
          </div>
          <div className="footer-links">
            <h3>Información</h3>
            <Link to="/contacto">Contacto</Link>
            <Link to="/productos">Productos</Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
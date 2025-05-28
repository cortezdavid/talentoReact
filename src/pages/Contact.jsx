import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFillGeoAltFill } from "react-icons/bs";
import '../styles/contact.css'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <section>
        <h2>Contacto</h2>
        <div className="contact-section">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="phone" id="phone" />
              </div>
              <button type='submit' className="submit">enviar</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <BsFillGeoAltFill style={{ fontSize: "40px", marginRight: "20px" }} />
              <div>
                <h5>Ubicación</h5>
                <p>Calle Ficticia 742, Barrio del Sol, Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="contact-info-item">
              <BsFillTelephoneFill style={{ fontSize: "40px", marginRight: "20px" }} />
              <div>
                <h5>Teléfono</h5>
                <p>+54 9 11 1234 5678</p>
              </div>
            </div>
            <div className="contact-info-item">
              <BsFillEnvelopeFill style={{ fontSize: "40px", marginRight: "20px" }} />
              <div>
                <h5>Email</h5>
                <p>tienda@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
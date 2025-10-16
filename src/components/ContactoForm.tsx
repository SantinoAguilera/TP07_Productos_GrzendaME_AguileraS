import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6" style={{ marginTop: '50px' }}>
          <h2 className="text-center mb-4">Contacto</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Tu correo" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows={4} placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
          </form>
          <button className="btn btn-secondary w-100">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
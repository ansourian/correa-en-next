"use client"
import React from "react"

export default function ContactForm() {

  return (
    <form
      action="/send.php"
      method="POST"
      className="form-contact"
    >

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="form-style form-control"
          placeholder="Indique su nombre"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          className="form-style form-control"
          placeholder="Indique su apellido"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-style form-control"
          placeholder="nombre@ejemplo.com"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          id="mensaje"
          rows="3"
          className="form-style form-control"
          required
        ></textarea>
      </div>

      <div className="div-button-send col-12">
        <button className="button-index" type="submit">
          ENVIAR
        </button>
      </div>

    </form>
  )
}

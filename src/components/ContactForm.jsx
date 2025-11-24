"use client"
import React from "react"

export default function ContactForm() {
  const nextUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/gracias`
      : "/gracias"

  return (
    <form
      action="https://formsubmit.co/info@calzadoscorrea.com.ar"
      method="POST"
      className="form-contact"
    >
      {/* Anti-spam */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Redirect post envío */}
      <input type="hidden" name="_next" value={nextUrl} />

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="Nombre"
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
          name="Apellido"
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
          name="Email"
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
          name="Mensaje"
          id="mensaje"
          rows="3"
          className="form-style form-control"
          required
        ></textarea>
      </div>

      <div className="div-button-send col-12">
        <button
          className="button-index"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  )
}

// "use client"

// import { useState } from "react";

// export default function ContactForm() {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [email, setEmail] = useState("");
//   const [mensaje, setMensaje] = useState("");
//   const [estado, setEstado] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/enviar-correo", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ nombre, apellido, email, mensaje }),
//     });

//     if (response.ok) {
//       setEstado("Correo enviado correctamente!");
//       setNombre("");
//       setApellido("");
//       setEmail("");
//       setMensaje("");
//     } else {
//       setEstado("Error al enviar el correo.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           type="text"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//           placeholder="Nombre"
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           value={apellido}
//           onChange={(e) => setApellido(e.target.value)}
//           placeholder="Apellido"
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Correo electrónico"
//           required
//         />
//       </div>
//       <div>
//         <textarea
//           value={mensaje}
//           onChange={(e) => setMensaje(e.target.value)}
//           placeholder="Escribí tu mensaje"
//           required
//         />
//       </div>
//       <button type="submit">Enviar</button>
//       {estado && <p>{estado}</p>}
//     </form>
//   );
// }

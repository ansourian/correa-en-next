"use client";

import { preguntas } from "@/data/data-preguntas";
import Accordion from 'react-bootstrap/Accordion';

export default function CardPreguntas({ params }) {
  return (
    <Accordion className="container-accordion" >
      {preguntas.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index} className='card-frecuentes'>
          <Accordion.Header>{item.pregunta}</Accordion.Header>
          <Accordion.Body>{item.respuesta}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

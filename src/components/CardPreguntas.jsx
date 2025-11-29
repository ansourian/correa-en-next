"use client"

import { preguntas } from "@/data/data-preguntas"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Accordion from "react-bootstrap/Accordion"

export default function CardPreguntas() {
  const searchParams = useSearchParams()
  const openAnchor = searchParams.get("open")
  const [activeKey, setActiveKey] = useState(null)

  useEffect(() => {
    if (openAnchor) {
      const index = preguntas.findIndex((p) => p.anchor === openAnchor)

      if (index !== -1) {
        setActiveKey(index.toString())

        // pequeño scroll para dejarlo visible
        setTimeout(() => {
          const el = document.getElementById(`faq-${openAnchor}`)
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 300)
      }
    }
  }, [openAnchor])
  return (
    <Accordion
      className="container-accordion"
      activeKey={activeKey}
      onSelect={(k) => setActiveKey(k)}
    >
      {preguntas.map((item, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={index}
          id={item.anchor ? `faq-${item.anchor}` : undefined}
          className="card-frecuentes"
        >
          <Accordion.Header>{item.pregunta}</Accordion.Header>
          <Accordion.Body>{item.respuesta}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

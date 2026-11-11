"use client"

import { preguntas } from "@/data/data-preguntas"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Accordion from "react-bootstrap/Accordion"

export default function AccordionPreguntas() {
  const searchParams = useSearchParams()
  const openAnchor = searchParams.get("open")
  const [activeKey, setActiveKey] = useState(null)
  const [highlightedKey, setHighlightedKey] = useState(null)

  useEffect(() => {
    setHighlightedKey(null)
    if (openAnchor) {
      const index = preguntas.findIndex((p) => p.anchor === openAnchor)

      if (index !== -1) {
        setActiveKey(index.toString())
        setHighlightedKey(index.toString())

        // pequeño scroll para dejarlo visible
        setTimeout(() => {
          const el = document.getElementById(`faq-${openAnchor}`)
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 300)
      }
    }
  }, [openAnchor])

  const handleSelect = (key) => {
    setActiveKey(key)
    setHighlightedKey(null)
  }

  return (
    <Accordion
      className="faq-accordion"
      activeKey={activeKey}
      onSelect={handleSelect}
    >
      {preguntas.map((item, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={index}
          id={item.anchor ? `faq-${item.anchor}` : undefined}
          className="faq-item"
        >
          <Accordion.Header
            className={highlightedKey === index.toString() ? "faq-highlighted" : undefined}
          >
            {item.pregunta}
          </Accordion.Header>
          <Accordion.Body className="faq-body">{item.respuesta}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

"use client"

import { preguntas } from "@/data/data-preguntas"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import styles from "./AccordionPreguntas.module.css"

export default function AccordionPreguntas() {
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
      className={styles.accordion}
      activeKey={activeKey}
      onSelect={(k) => setActiveKey(k)}
    >
      {preguntas.map((item, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={index}
          id={item.anchor ? `faq-${item.anchor}` : undefined}
          className={styles.item}
        >
          <Accordion.Header>{item.pregunta}</Accordion.Header>
          <Accordion.Body className={styles.body}>{item.respuesta}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

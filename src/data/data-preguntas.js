export const preguntas = [
  {
    pregunta: "¿Cómo realizo una compra?",
    respuesta: (
      <>
        <div>
          Para realizar una compra, lo ideal siempre es acercarse al local en
          Mario Bravo 750, CABA.
        </div>
        <div>
          Por el momento, no se pueden realizar comprás a través de la web, pero
          si usted ya es cliente, podemos tener sus datos en nuestros registros.
          De esta forma, puede contactarse con nuestros ascesores para consultar
          valores o información sobre envios nacionales/internacionales.
        </div>
      </>
    ),
  },
  {
    pregunta:
      "¿Cuál es la diferencia entre Ready to Wear, Made to Order y Bespoke?",
    respuesta: (
      <>
        <div>
          La diferencia principal entre estos tres modelos de calzado radica en
          el nivel de personalización y la forma en que se fabrican:
          <h3>Ready to Wear:</h3>
          <p>
            Estos son zapatos fabricados en serie y disponibles en tallas
            estándar para su compra inmediata.
          </p>
          <h3>Made To Order:</h3>
          <p>
            Se producen según las preferencias del cliente, seleccionando una
            combinación de características, entre ellas modelos, materiales de
            distintas texturas y colores, en función de lograr un estílo
            personalizado. Estos calzados serán confeccionados exclusivamente en
            hormas estándar, es decir, no son hechos a la medida exacta.
          </p>
          <h3>Bespoke:</h3>
          <p>
            Estos son zapatos totalmente personalizados y diseñados
            específicamente para un cliente individual. Cada aspecto, desde la
            talla hasta el diseño y los detalles, se adapta completamente a las
            preferencias del cliente, ofreciendo el nivel mas alto de servicio,
            personalización y artesanía.
          </p>
        </div>
      </>
    ),
  },
  {
    pregunta: "¿Cómo se mi talle?",
    respuesta: (
      <>
        <div>
          <p>
            En Correa trabajamos de forma estándar del talle 39 al 45 con
            medidas que varían cada medio punto y cuentan con distintos anchos
            de horma por cada uno. Es por ello que recomendamos acercarse al
            local para asegurar un calce perfecto.
          </p>
          <p>
            En caso de no estar dentro de estos parámetros, se puede
            confeccionar un calzado adaptado a sus necesidades.
          </p>
          <p>
            No es necesario coordinar una cita ya que nuestro local está siempre
            atendido por zapateros experimentados, pero si ud. considera
            necesario pactar una cita con nosotros, es posible.
          </p>
          <h3>
            Para mejorar su experiencia en Calzados Correa le brindamos las
            siguientes recomendaciones:
          </h3>
          <ul>
            <li>
              La primer visita requiere una atención mas extensa. Se estima un
              mínimo de 50 minutos por cliente, ya que probaremos distintos
              modelos hasta dar con su medio punto indicado. También será tenido
              en cuenta los gustos del cliente y sus distintas necesidades, por lo
              que un servicio de personalización, sumado de un lustrado de
              cortesía, es comunmente llevado a cabo antes de la entrega final.
            </li>
            <li>
              Si Ud. ya es cliente, tenga en cuenta que nuestras atenciones
              suelen ser de igual modo personalizadas, por lo que venir con poco
              tiempo no es recomendable. No obstante, lo recibiremos cordialmente.
            </li>
            <li>
              Si Ud. busca realizar un calzado hecho a la orden (Made To Order)
              o un exclusivo de medida (Bespoke), le recomendamos comunicarse
              previamente al (5411) 4861-7344 o coordinar una cita para una fecha
              y horario específico.
            </li>
            <li>
              Traer medias de vestir finas o las que fuera a utilizar con
              nuestro calzado determinado.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    pregunta: "¿Cómo puedo realizar un mantenimiento de mi calzado?",
    anchor: "mantenimiento-del-calzado",
    respuesta: (
      <>
        <div>
          El mantenimiento regular de los zapatos es crucial para prolongar su
          vida útil y mantener su apariencia. En el siguiente link le dejamos
          algunos pasos generales para realizar el mantenimiento de calzado por
          su cuenta:
          <a
            href="/mantenimiento"
            className="faq-link"
          >
            Métodos para un tratamiento adecuado del calzado
          </a>
        </div>
      </>
    ),
  },
  {
    pregunta: "¿Realizan reparaciones o renovaciones de zapatos?",
    anchor: "reparaciones",
    respuesta: (
      <div>
        Sí, realizamos reparaciones o renovaciones solamente de los zapatos que
        se confeccionan en nuestro taller.
      </div>
    ),
  },
  {
    pregunta: "¿Tienen información de contacto?",
    respuesta: (
      <>
        <div>
          <div>Dirección: Mario Bravo 750</div>
          <div>Mail: info@calzadoscorrea.com.ar</div>
          <div>Teléfono: (5411) 4861-7344</div>
          <div>Instagram:</div>
          <p>
            <a
              href="https://www.instagram.com/calzadoscorrea"
              target="_blank"
            >
              @calzadoscorrea
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    pregunta: "¿Qué horario de atención al público tiene el local?",
    anchor: "horarios",
    respuesta: (
      <div>
        Lunes a Viernes de 9hs a 13hs y de 15hs a 19hs / Sábados de 9hs a 13hs
      </div>
    ),
  },
  {
    pregunta: "¿Cuáles son los medios de pago disponibles?",
    anchor: "medios-de-pago",
    respuesta: (
      <>
        <div className="faq-payments">
          <div>Actualmente, aceptamos:</div>
          <div>
            Efectivo / Transferencia Bancaria: Puede realizar su pago en
            efectivo o a través de una transferencia bancaria en nuestro local.
          </div>
          <div className="faq-payment-logos">
            <img
              src="/images/iconos/visa.svg"
              alt="Visa"
              style={{ width: "70px", height: "auto" }}
            />
            <img
              src="/images/iconos/mastercard.svg"
              alt="Mastercard"
              style={{ width: "45px", height: "auto" }}
            />
            (Tanto crédito como débito)
          </div>
          <div>
            <div>Otras opciones:</div>
          </div>
          <div className="faq-payment-logos">
            <img
              src="/images/iconos/mercado-pago.svg"
              alt="Mercado Pago"
              style={{ width: "70px", height: "auto" }}
            />
          </div>
        </div>
      </>
    ),
  },
]

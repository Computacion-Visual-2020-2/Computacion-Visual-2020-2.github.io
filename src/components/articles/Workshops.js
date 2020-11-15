import React from 'react'
import { Accordion } from 'react-light-accordion'
import { Link } from 'gatsby'

const Workshops = () => (
  <div>
    <p>
      En esta sección encontrará todos los talleres y trabajos de la asignatura.
    </p>

    <Accordion>
      <h3 style={{ marginTop: 20 }}>Taller 1</h3>
      <Link to="/image-analysis">Taller de imágenes</Link>
    </Accordion>

    <Accordion>
      <h3 style={{ marginTop: 20 }}>Taller 2</h3>
      <Link to="/visual-illusions">Ilusiones visuales</Link>
    </Accordion>

    <Accordion>
      <h3 style={{ marginTop: 20 }}>Taller 3</h3>
      <Link to="/light-shaders">Light shaders</Link>
    </Accordion>
  </div>
)

export default Workshops

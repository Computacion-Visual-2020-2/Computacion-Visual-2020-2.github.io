import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import fabiotovar from "../images/fabiotovar.png"
import vale from "../images/valentinacastano.jpg"

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="valentina-castano"
          className={`${this.props.article === 'valentina-castano' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Valentina Castaño</h2>
          <span className="image main">
            <img src={vale} alt="" />
          </span>
          <p>
            Mi nombre es Laura Valentina Castaño, soy estudiante de último año de ingeniería
            de sistemas y computación, de la Universidad Nacional de Colombia. Mi objetivo
            profesional está enfocado en la innovación, el análisis y la creación de proyectos
            con enfoque en transformación digital. Para lograrlo trabajo en mis habilidades
            para el desarrollo de software, procesamiento de datos e implementación de tecnologías disruptivas.
            Soy una persona optimista, disciplinada y apasionada por lo que hace.
          </p>
          <p>
            Tuve la oportunidad de trabajar un año como practicante en Sodexo Colombia, en el ára de innovación
            & digital, desarrollando e implementando una metodología de innovación y estructurando el proceso
            de vigilancia tecnológica. Actualmente trabajo con un proyecto de extension de la universidad,
            desarrollando como Full-Stack un dashboard para el hospital universitario.
            Soy certificada scrum master :)
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="fabio-tovar"
          className={`${this.props.article === 'fabio-tovar' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Fabio Steven Tovar Ramos</h2>
          <span className="image main">
            <img src={fabiotovar} alt="" />
          </span>
          <p>
            Mi nombre es Fabio Steven Tovar Ramos, soy estudiante de último semestre de Ingeniería de Sistemas y Computación.
            Tengo aproximadamente 3 años de experiencia trabajando especialmente en el desarrollo de software para web, 
            móviles y del lado del back-end soportando varios procesos, y actualmente me encuentro trabajando como Full Stack Engineer en BunnyStudio.
          </p>
          <p>
            Me considero una persona muy autodidácta, y dados mis intereses he estado estudiando temas como Inteligencia Artificial, Internet de las Cosas,
            Ingeniería de Sofware y Arquitectura de Software. Considero que es una cualidad que todas las personas deberían tener especialmente en campos
            como éste, donde las cosas cambian tan rápidamente. 
          </p>
          <p>
            Encuentro muy interesante la Computación Visual y tengo altas expectativas de esta materia. Desde que este campo de
            estudio surgió los avances han sido muy importantes y en aproximadamente 60 o 70 años de estudio solamente, la humanidad
            ha logrado resultados muy satisfactorios, por lo tanto considero que es un área a la cuál se debería prestar especial
            atención y que está ligada a otras áreas de mi interés.
          </p>
          {close}
        </article>
     
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

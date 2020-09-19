import React from "react";
import Convolution from "./Convolution";

export default [
    { id: "convolution", title: "Convolution", body: () => <Convolution /> },
    { 
        id: "valentina-castano", 
        title: "Valentina Castaño", 
        type: "team", 
        description: { 
            img: "valentinacastano.jpg", 
            paragraphs: [
                `Mi nombre es Laura Valentina Castaño, soy estudiante de último año de ingeniería
                de sistemas y computación, de la Universidad Nacional de Colombia. Mi objetivo
                profesional está enfocado en la innovación, el análisis y la creación de proyectos
                con enfoque en transformación digital. Para lograrlo trabajo en mis habilidades
                para el desarrollo de software, procesamiento de datos e implementación de tecnologías disruptivas.
                Soy una persona optimista, disciplinada y apasionada por lo que hace.`,
                `Tuve la oportunidad de trabajar un año como practicante en Sodexo Colombia, en el área de innovación
                & digital, desarrollando e implementando una metodología de innovación y estructurando el proceso
                de vigilancia tecnológica. Actualmente trabajo con un proyecto de extension de la universidad,
                desarrollando como Full-Stack un dashboard para el hospital universitario.
                Soy certificada scrum master :)`
            ],
            github: "https://github.com/Valentinacs12"
        }
    },
    {
        id: 'julio-ovalle',
        title: "Julio Ovalle",
        type: "team",
        description: {
            img: "julio.jpg",
            paragraphs: [
                `Mi nombre es Julio César Ovalle Lara , soy estudiante de último año de ingeniería
                de sistemas y computación, de la Universidad Nacional de Colombia. Me apasiona el
                desarrollo de software, en especial el desarrollo orientado a resolver problemas
                a traves de sistemas inteligentes. Se me da muy bien el trabajo en equipo y me fascina
                aprender nuevas cosas todos los dias. Si hay algo que no sepa lo voy a aprender!`,
                `A lo largo de mi vida academica he tenido la oportunidad de trabajar en varios
                proyectos que me han enriquecido profesionalmente. En el año 2018 como proyecto final
                de una asignatura de la carrera desarrolle una investigacion sobre machine learning
                aplicado a la prediccion de ataques de epilepsia, como fruto de esa investigacion surgio
                un paper el cual recientemente obtuvo aceptacion para publicacion. Durante el año 2020
                he tenido la oortunidad de desempeñarme como desarrollador Full-Stack haciendo aplicaciones
                a medida para empresas. Actualmente trabajo para la compañia RMP Services dando
                soporte a empresas en el uso y mantenimiento de un servidor para transferencia de archivos.`
            ],
            github: "https://github.com/jcovallel/"
        }
    },
    {
        id: 'fabio-tovar',
        title: "Fabio Steven Tovar Ramos",
        type: "team",
        description: {
            img: "fabiotovar.png",
            paragraphs: [
                `Mi nombre es Fabio Steven Tovar Ramos, soy estudiante de último semestre de Ingeniería de Sistemas y Computación.
                Tengo aproximadamente 3 años de experiencia trabajando especialmente en el desarrollo de software para web, 
                móviles y del lado del back-end soportando varios procesos, y actualmente me encuentro trabajando como Full Stack Engineer en BunnyStudio.`,
                `Me considero una persona muy autodidácta, y dados mis intereses he estado estudiando temas como Inteligencia Artificial, Internet de las Cosas,
                Ingeniería de Sofware y Arquitectura de Software. Considero que es una cualidad que todas las personas deberían tener especialmente en campos
                como éste, donde las cosas cambian tan rápidamente.`,
                `Encuentro muy interesante la Computación Visual y tengo altas expectativas de esta materia. Desde que este campo de
                estudio surgió los avances han sido muy importantes y en aproximadamente 60 o 70 años de estudio solamente, la humanidad
                ha logrado resultados muy satisfactorios, por lo tanto considero que es un área a la cuál se debería prestar especial
                atención y que está ligada a otras áreas de mi interés.`
            ],
            github: "https://github.com/fstovarr/"
        }
    },
    {
        id: 'brandon-avilan',
        title: 'Brandon Sneyder Avilán Rodríguez',
        type: "team",
        description: {
            img: "brandonavilan.jpg",
            paragraphs: [
                `Mi nombre es Brandon Sneyder Avilán Rodríguez, soy estudiante de último semestre de Ingeniería de Sistemas y Computación.
                Actualmente cuento con mas de un año de experiencia en desarrollo web, me encuentro laborando como desarrollador Front End 
                en Slabcode S.A. Me gusta mucho la ingeniería de software, como el diseño UI y UX, considero que soy una persona comprometida,
                a la cuál le gusta trabajar en equipo.`,
                `El proyecto más importante hasta ahora, es un proyecto de biometria para el registro y la validación de funcionarios y 
                beneficiarios de la Policia Nacional, en el cual estuve a cargo del desarrollo del backend del mismo, como tambien del
                administrador de dispositivos biometricos, para que estos puedan ser usados con peticiones http.`
            ],
            github: 'https://github.com/BrandonAvilanR'
        }
    }
]
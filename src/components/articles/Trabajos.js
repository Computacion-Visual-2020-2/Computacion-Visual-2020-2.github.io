import React, { useState, useEffect } from 'react'
import {loadableP5 as P5Wrapper} from '../../sketches/lodable';
import convolution from '../../sketches/convolution'
import Slider from 'react-rangeslider'
import { Accordion, AccordionItem } from 'react-light-accordion';
//import 'react-light-accordion/demo/css/index.css';
import DemoInforme from '../../sketches/Demo-Informe/Demo-Informe'

function Trabajos() {
    const [demo1, setDemo1] = useState(false)
    const [demo2, setDemo2] = useState(false)
    const [demo3, setDemo3] = useState(false)
    const [demo4, setDemo4] = useState(false)
    const [informe1, setInfo1] = useState(false)
    const [informe2, setInfo2] = useState(false)
    const [informe3, setInfo3] = useState(false)
    const [informe4, setInfo4] = useState(false)

    const switchDemo = (e) => {
        switch (e.target.id) {
            case "1":{
                setDemo1(!demo1);
            }break;
            case "2":{
                setDemo2(!demo2);
            }break;
            case "3":{
                setDemo3(!demo3);
            }break;
            case "4":{
                setDemo4(!demo4);
            }break;
        }
    }

    const switchInfo = (e) => {
        switch (e.target.id) {
            case "1":{
                setInfo1(!informe1);
            }break;
            case "2":{
                setInfo2(!informe2);
            }break;
            case "3":{
                setInfo3(!informe3);
            }break;
            case "4":{
                setInfo4(!informe4);
            }break;
        }
    }

    return (
        <div>
            <p>En esta seccion encontrara todo los talleres y trabajos de la asignatura.</p>
            <h3>Taller 1</h3>
            <Accordion atomic={true}>

                <AccordionItem title="Escala de grises: promedio rgb y luma">
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchInfo} id="1"> Informe </a></li>
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchDemo} id="1"> Demo </a></li>
                </AccordionItem>

                <AccordionItem title="Máscaras de convolución">
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchInfo} id="2"> Informe </a></li>
                    {
                        informe2 &&
                        <DemoInforme text={'ejemplo 1'}/>
                    }
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchDemo} id="2"> Demo </a></li>
                    {
                        demo2 &&
                        <DemoInforme text={'titulo'} imagen={"https://sites.google.com/site/mate02trucha/_/rsrc/1472875957853/config/google_.jpg"}/>
                    }
                </AccordionItem>

                <AccordionItem title="Histograma y Segmentación">
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchInfo} id="1"> Informe </a></li>
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchDemo} id="1"> Demo </a></li>
                </AccordionItem>

                <AccordionItem title="Medición de la eficiencia computacional (Video)">
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchInfo} id="1"> Informe </a></li>
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchDemo} id="1"> Demo </a></li>
                </AccordionItem>

            </Accordion>
        </div>
    )

}

const DummyContent = () => (
    <p style={{ padding: '18px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
);

export default Trabajos

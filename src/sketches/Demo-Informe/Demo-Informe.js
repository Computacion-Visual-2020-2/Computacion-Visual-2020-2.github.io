import React, { useEffect, useState } from 'react'
import './Demo-Informe.scss'

export default function DemoInforme({text,imagen}) {

    return (
        <div className="inform">
            <h1 className="inform__title">{text}</h1>
            <img src={imagen}/>
        </div>
    )
}

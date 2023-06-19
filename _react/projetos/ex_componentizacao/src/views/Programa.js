import {useEffect} from 'react'
import DocenteQualis from "./componente/DocenteQualis";
import Filtro from "./componente/Filtro";
import GraficoProducao from "./componente/GraficoProducao";
import Header from "./componente/Header";
import Indicadores from "./componente/Indicadores";
import Navbar from "./componente/Navbar";

export default function Programa() {

    useEffect( () => {
        document.body.classList.add('hold-transition', 'layout-top-nav')        
        }

    )

    return (
        
        <div className="wrapper">
            <Navbar titulo="SPPG"/>
            <div class="content-wrapper">
                <Header titulo="Programa"/>

                <div class="content">      
                    <div class="container">
                        <div class="container-fluid">
                            <Filtro/>
                            <Indicadores/>

                            <GraficoProducao />
                            <DocenteQualis />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );

}
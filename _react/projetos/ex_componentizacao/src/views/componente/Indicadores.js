export default function Indicadores() {
    return (
        <>
        <h5 class="mb-2">Indicadores Capes</h5>
        <div class="row">
            <Infobox nome="Total Produções" valor="220" bg="gray" icon="fa-copy" />
            <Infobox nome="I Geral" valor="17,43" bg="info" icon="fa-envelope" />
            <Infobox nome="I Restrito" valor="16,45" bg="success" icon="fa-flag" />
            <Infobox nome="I Não Restrito" valor="0,99" bg="warning" icon="fa-copy" />
        </div>
        </>

    );
}

function Infobox({nome, valor, bg, icon}) {
    return (        
        <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
                <span class={"info-box-icon bg-" + bg}>
                    <i class={"far " + icon }></i></span>
                <div class="info-box-content">
                <span class="info-box-text">{nome}</span>
                <span class="info-box-number">{valor}</span>
                </div>        
            </div>
        </div>        
    );
}
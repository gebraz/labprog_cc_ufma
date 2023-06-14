export default function Indicadores() {

    return (
        <>
        <h5 className="mb-2">Indicadores Capes</h5>
        <div className="row">
            <InfoBox titulo="Total Produções" valor="220" bg="bg-gray" icon="fa-copy" /> 
            <InfoBox titulo="I Geral" valor="17,43" bg="bg-info" icon="fa-envelope" /> 
            <InfoBox titulo="I Restrito" valor="16,45" bg="bg-success" icon="fa-flag" /> 
            <InfoBox titulo="I Não Restrito" valor="0,99" bg="bg-warning" icon="fa-copy" /> 
        </div>
        </>
    );
}

function InfoBox({titulo, valor, bg, icon}){
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box">
                <span className={"info-box-icon "+ bg}><i className={"far " + icon}></i></span>
                <div className="info-box-content">
                    <span className="info-box-text">{titulo}</span>
                    <span className="info-box-number">{valor}</span>
                </div>                
            </div>            
        </div> 
    );
}
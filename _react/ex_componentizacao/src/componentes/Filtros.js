export default function Filtros() {
    return (
        <>
        <h5 className="mb-2">Filtros</h5>
        <form action="#">
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                <label>Programa:</label>
                                <select className="form-control" style={{width: '100%'}}>
                                    <option selected>PPGCC</option>
                                    <option>DCCMAPI</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label>Ano inicial:</label>
                                <input className="form-control" value="2019"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label>Ano Final:</label>
                                <input className="form-control" value="2023"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}
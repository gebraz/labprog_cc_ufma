const producao = [
    {id: 1, titulo:'Artigo 1'},
    {id: 2, titulo:'Artigo 2'},
    {id: 3, titulo:'Artigo 3'},
 ];

 export default function Listas() {
    const lstItens = producao.map (producao =>
        <li key={producao.id}>
            {producao.titulo}
        </li>        
        )
    return (
        <ul>{lstItens}</ul>
    );
 }
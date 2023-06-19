const producao = [
    {id: 1, titulo:'Artigo 1'},
    {id: 2, titulo:'Artigo 2'},
    {id: 3, titulo:'Artigo 3'},
 ];

 export default function Tabela() {
    const lstItens = producao.map (producao =>
        <tr>
            <td>{producao.id}</td>
            <td>{producao.titulo}</td>
        </tr>
        )
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Título</th>
            </tr>
            {lstItens}
        </table>        
    );
 }
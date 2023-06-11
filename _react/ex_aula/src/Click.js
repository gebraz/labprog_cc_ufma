const producao = [
    {id: 1, titulo:'Artigo 1'},
    {id: 2, titulo:'Artigo 2'},
    {id: 3, titulo:'Artigo 3'},
 ];

 export default function Click() {
    function handleClick(indice) {
        alert('Você clicou no ID=' + indice);
    }

    const lstItens = producao.map (producao =>
        <tr>
            <td>{producao.id}</td>
            <td>{producao.titulo}</td>
            <td> 
                <button onClick={ () => handleClick(producao.id)}>Ação</button>
            </td>
        </tr>
        )
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Click</th>
            </tr>
            {lstItens}
        </table>        
    );
 }
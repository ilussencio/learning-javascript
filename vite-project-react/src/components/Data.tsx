
function Data(){
    const nome: string = 'Joao';
    const cliente = {
        nome,
        email: 'Joao@gmail.com'
    }
    const a: number = 10;
    const b: number = 20;

    function add(a: number , b: number): number{
        return a + b
    }

    return (<>
        <h3>Nome: {cliente.nome}</h3>
        <h3>Email: {cliente.email}</h3>
        <h3>A soma de {a} + {b} = {add(a,b)}</h3>
    </>)
}

export default Data;
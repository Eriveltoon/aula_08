import Tipo from "./tipo";

function Navbar(props){
    let controle = props.controle;
    let pokemon = props.pokemon;

    return (
        <>
        <div className='card mx-auto mt-5 bg-dark-subtle' style={{height: "500px",width: "370px"}}>
            <div className='mx-auto pt-5'>
                <button class="btn btn-primary" onClick={controle.Reduzir}>Voltar</button>
                <button class="btn btn-primary ms-3" onClick={controle.Adicionar}>Próximo</button>
            </div>
            
            <div className='pt-3'>
                <div style={{width: "368px"}}>
                <img className="rounded mx-auto d-block" style={{height: "150px",width: "150px"}} src={pokemon.sprites.front_default}/>
                </div>
                <p className='text-center text-uppercase'>{pokemon.name}</p>
            </div>
            <div className='pt-3'>
                <p className='text-center text-uppercase'>{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
        </>
    )
}

export default Navbar;
const isValid = (objeto) => {
    let number = 0;
    let altura = objeto['altura']
    let peso = objeto['peso']
    let resultado = objeto['peso'] / (objeto['altura'] * objeto['altura']);
    if (resultado < 18.5){
        number = 1
    }else if ((resultado >= 18.5) && (resultado <= 24.9)){
        number = 2
    }else if ((resultado >= 25) && (resultado <= 29.9)){
        number = 3
    }else if ((resultado >= 30) && (resultado <= 34.9)){
        number = 4
    }else if ((resultado >= 35) && (resultado <= 39.9)){
        number = 5
    }else if ((resultado >= 18.5)){
        number = 6
    }else {
        number = 7
    };
    
    return {
        altura,
        peso,
        resultado,
        number,
    }
};



export default isValid

// menos do que 18.5
// entre 18.5 e 24,9
// entre 25 e 29.9
// entre 30 e 34.9
// entre 35 e 39.9
// main de 40
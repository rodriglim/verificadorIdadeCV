function $displayImg($display) {
    document.querySelector('.circle-img').style.display = $display;
}

function $enviarImg($img) {
    document.getElementById('img-id').src = $img;
}

function $retornarAnoAtual() {
    let $anoAtual = new Date();
    return $anoAtual.getFullYear();
}

function $verificarCamposVazios() {
    let $datNascInput = document.getElementById('dataNasID').value;
    let $sexoInput = document.querySelector('input[type=radio][name=sexo]:checked');
    let $estaValido;

    if ($datNascInput == '' || $sexoInput == null) {
        $estaValido = false;
    } else {
        $estaValido = true;
    }

    return $estaValido;
}

function $retornarIdade() {
    let $dataNasc = document.getElementById('dataNasID').value;
    let $idade;

    if ($dataNasc <= $retornarAnoAtual()) {
        $idade = ($retornarAnoAtual() - $dataNasc);
    } else {
        $idade = false;
    }

    return $idade;
}

function $retornarGenero() {
    let $genero = document.getElementById('masculino').checked;
    return $genero ? 'Masculino' : 'Feminino';
}

function $fotoEnvio() {
    let $img;

    if ($retornarGenero() == 'Masculino') {
        if ($retornarIdade() < 4) {
            $img = 'img/bebeMenino.jpg';
        } else if ($retornarIdade() < 12) {
            $img = 'img/criancaMenino.jpg';
        } else if ($retornarIdade() < 18) {
            $img = 'img/jovemGaroto.jpg';
        } else if ($retornarIdade() < 54) {
            $img = 'img/adultoHomem.jpg';
        } else {
            $img = 'img/idoso.jpg';
        }
    } else {
        if ($retornarIdade() < 4) {
            $img = 'img/bebeMenina.jpg';
        } else if ($retornarIdade() < 12) {
            $img = 'img/criancaMenina.jpg';
        } else if ($retornarIdade() < 18) {
            $img = 'img/jovemGarota.jpg';
        } else if ($retornarIdade() < 54) {
            $img = 'img/adultoMulher.jpg';
        } else {
            $img = 'img/idosa.jpg';
        }
    }

    return $img;
}

function $enviar() {
    if ($verificarCamposVazios()) {
        if ($retornarIdade() && $retornarIdade() < 120) {
            $displayImg('block');
            $enviarImg($fotoEnvio());
            document.getElementById('result').innerHTML = `Você é ${$retornarGenero()} e tem ${$retornarIdade()} ano(s)!`

        } else {
            alert('Ano Inválido');
            $displayImg('none');
            document.getElementById('result').innerHTML = `Preencha os campos para verificar`;


        }
    } else {
        alert('Campo(s) Vazio(s)!');
        $displayImg('none');
        document.getElementById('result').innerHTML = `Preencha os campos para verificar`;


    }
}
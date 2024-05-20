import React, { useState } from 'react';
import axios from 'axios';

function Form(){

    const [campos, setCampos] = useState({
        txtNome: '',
        txtEmail: '',
        txtPassword: ''
    });

    const [ret, setRet] = useState('');

    const handleInputChange = (event) => {
        if(event === undefined){
            console.log('evento undefined');
        }else{
            campos[event.target.name] = event.target.value;
            console.log(event.target.name)
            setCampos(campos);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(campos);
        axios.post('http://localhost:5000//api/say_name5', campos).then(response => {
            setRet(response.data.response);
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>
 
                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange} />
                        </label>
                        <br/>
                        <label>Email  :
                            <input type="email" name="txtEmail" id="txtEmail" onChange={handleInputChange} />
                        </label>
                        <br/>
                        <label>Senha:
                            <input type="password" name="txtPassword" id="txtPassword" onChange={handleInputChange} />
                        </label>
                    </div>
                    <div><p>Status: {ret}</p></div>
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>
    )
}
export default Form;
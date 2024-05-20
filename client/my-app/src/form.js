import React, { useState } from 'react';
import axios from 'axios';

function Form(){

    const [campos, setCampos] = useState({
        txtName: '',
        txtAddress: '',
        txtTelephone: ''
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
                            <input type="text" name="txtName" id="txtName" onChange={handleInputChange} />
                        </label>
                        <br/>
                        <label>Endereço:
                            <input type="text" name="txtAddress" id="txtAddress" onChange={handleInputChange} />
                        </label>
                        <br/>
                        <label>Telefone:
                            <input type="text" name="txtTelephone" id="txtTelephone" onChange={handleInputChange} />
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
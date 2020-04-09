import React,{useState} from 'react';
import api from '../service/api';
import './styles.css'
import { useHistory } from 'react-router-dom'



export default function Login() {
    const [email, setEmail ] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();
        const credenciais = btoa(JSON.stringify({"username":email, "password":senha}))
        sessionStorage.setItem("credenciais", credenciais)



        api.get('/auth/token', {
        
        }).then((response => {
            sessionStorage.setItem("usuario", JSON.stringify(response.data))
            history.push("/cadastroproduto")
            window.location.reload()

        
        })).catch((error) => {
            if (401 === error.response.status){
                return alert("Usuário ou senha não conferem");
        }
            alert("Erro não esperado");
        });
    }

    

return (
    <div className="logon-container">
        <div className="content">
        <section className="form">

            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>

                <input 
                placeholder="Email" 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                />
                <input 
                placeholder="Senha" 
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)} 
                />

                    <button className="button" type="submit">Entrar</button>

                </form>
            </section>
            </div>
        </div>
    )
}
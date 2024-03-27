function Login(){
    return <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
        <div className=" h-60 ">
            <div className="p-10 bg-primary-300 text-white text-center font-bold text-3xl rounded-tl-xl rounded-tr-xl">
                <h3>LOGIN</h3>
            </div>

            <div className="flex flex-col gap-3 px-10 py-5 bg-primary-100 w-96">
                <div className="flex flex-col">
                    <label label="email" className="text-md">E-mail</label>
                    <input id="email" type="email" placeHolder="Digite seu e-mail" className="text-md  p-2 rounded" />
                </div>
                
                <div className="flex flex-col">
                    <label label="senha" className="text-md">Senha</label>
                    <input id="password" placeholder="Digite sua senha" type="password" className="p-2 rounded"/>
                </div>

                <div className="text-sm text-gray-900 hover:text-gray-500">
                    <a href="#">Esqueci minha senha</a>
                </div>

                <div className="w-full flex justify-center">
                    <button className="w-full p-3 bg-secondary-300 hover:bg-secondary-100 text-white hover:text-gray-700 font-bold rounded">Enviar</button>
                </div>
            </div>

            <div className="flex justify-center text-sm text-white p-4 bg-primary-300 rounded-bl-xl rounded-br-xl ">
                Não e registrado? <a href="#" className="hover:text-gray-500"> Criar um nova conta</a>
            </div>

            
        </div>
    </div>
}

export default Login;
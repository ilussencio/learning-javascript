const fs = require('fs');
const path = require('path');

//Criar diretorio
// fs.mkdir(path.join(__dirname, '/test'), {}, (error) => {
//     if (error){
//         return console.log('Error: ', error)
//     }

//     console.log('Diretorio criado com sucesso!')
// });

//CRIANDO UM ARQUIVO
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'hello node!', (error) => {
    if (error)
        return console.log('Error', error)

    console.log('Arquivo criado com sucesso!');

    // ADICIONAR A UM ARQUIVO
    fs.appendFile(
        path.join(__dirname, '/test', 'test.txt'),
        'hello world!',
        (error) => {
            if (error)
                return console.log("error", error)
            console.log('Arquivo alterado com sucesso!')
        }
    );

    //LER UM ARQUIVO
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if (error)
            return console.log("Error", error)
        console.log(data)
    })
});





const campoUsuario = document.getElementById("userInput")
const botaoBuscar = document.getElementById("searchBtn")
const areaResultado = document.getElementById("resultArea")

async function buscarUsuario() {
    const usuario = campoUsuario.value.trim();

    if (usuario === "") {
        areaResultado.innerHTML = "<p style='color: red;'>Por favor, digite um nome!</p>";
        return;
    }

    areaResultado.innerHTML = "<p>Buscando...</p>";
    
    console.log(usuario);

    try {
        // Correção da URL: usando ://github.com dentro de crases com ${}
        const resposta = await fetch(`https://api.github.com/users/${usuario}`);
        
        if (!resposta.ok) {
            throw new Error("Usuário não encontrado");
        }

        const dados = await resposta.json();

        // Limpa a mensagem de "Buscando..."
        areaResultado.innerHTML = '';

        areaResultado.innerHTML = `
            <img
                src="${dados.avatar_url}"
                alt="Foto de ${dados.login}"
                width="150"
            >

            <p><strong>Usuário:</strong> ${dados.login}</p> 
            <p><strong>Nome:</strong> ${dados.name || 'Não informado'}</p>
            <p><strong>Seguidores:</strong> ${dados.followers}</p>
            <p><strong>Repositórios:</strong> ${dados.public_repos}</p>
        `;         

    } catch (erro) {
        // Adicionado o catch para capturar erros e não travar o código
        areaResultado.innerHTML = `<p style='color: red;'>Erro: ${erro.message}</p>`;
    }
}

botaoBuscar.addEventListener('click', buscarUsuario);


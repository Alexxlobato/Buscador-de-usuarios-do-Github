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
        const resposta = await fetch(`https://api.github.com/users/${usuario}`);
        
        if (!resposta.ok) {
            throw new Error("Usuário não encontrado");
        }

        const dados = await resposta.json();

        // Limpa a mensagem de "Buscando..."
        areaResultado.innerHTML = '';

        areaResultado.innerHTML = `
            <a href="${dados.html_url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
            <img
                src="${dados.avatar_url}"
                alt="Foto de ${dados.login}"
                width="150"
                height="150"
                style="border-radius: 50%; object-fit: cover; border: 3px solid #7159c1; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
            >
            </a>

            <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">

            <p><strong>Usuário:</strong> ${dados.login}</p> 
            <p><strong>Nome:</strong> ${dados.name || 'Não informado'}</p>
            <p><strong>Localização:</strong> ${dados?.location ?? 'Não informada'}</p>
            <p><strong>Seguidores:</strong> ${dados.followers}</p>
            <p><strong>Repositórios:</strong> ${dados.public_repos}</p>
        `;         

    } catch (erro) {
        areaResultado.innerHTML = `<p style='color: red;'>Erro: ${erro.message}</p>`;
    }
}

// Eventos de clique e teclado (ambos do lado de fora da função)
botaoBuscar.addEventListener('click', buscarUsuario);

campoUsuario.addEventListener("keypress", function(evento){
    if (evento.key === "Enter") {
        buscarUsuario();
    }
});


const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Cadastro
document.getElementById('formCadastro')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o usuário já existe
    const usuarioExistente = usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario);
    if (usuarioExistente) {
        alert('Usuário já existe!');
        return;
    }

    usuarios.push({ nomeCompleto, nomeUsuario, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});

// Login
document.getElementById('formLogin')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeUsuario = document.getElementById('nomeUsuarioLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    const usuario = usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario && usuario.senha === senha);
    if (usuario) {
        alert(`Login realizado com sucesso! Bem-vindo, ${usuario.nomeCompleto}!`);
        const newLocal = window.location.href = 'PaginaInicial.html';
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }
});

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Cadastro
document.getElementById('formCadastro')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o usuário já existe
    const usuarioExistente = usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario);
    if (usuarioExistente) {
        alert('Este usuário já existe!');
        return;
    }
    usuarios.push({ nomeCompleto, nomeUsuario, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
    const newLocal = window.location.href = 'PaginaLogin.html';
});

// Login
document.getElementById('formLogin')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if (usuario) {
        alert(`Login realizado com sucesso! Bem-vindo, ${usuario.nomeCompleto}!`);
        const newLocal = window.location.href = 'PaginaVitrine.html';
    } else {
        alert('E-mail ou senha incorretos!');
    }
});

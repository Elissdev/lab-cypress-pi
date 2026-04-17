describe('Teste de Login', () => {
  beforeEach(() => {
    // Visitar a página de login local
    cy.visit('./index.html');
  });

  it('Deve fazer login com credenciais fictícias', () => {
    // Preencher o campo de e-mail
    cy.get('#email').should('be.enabled').clear()
      .type('usuario@exemplo.com')
      .should('have.value', 'usuario@exemplo.com');

    // Preencher o campo de senha
    cy.get('#password').should('be.enabled').clear()
      .type('minhaSenha123')
      .should('have.value', 'minhaSenha123');

    // Marcar checkbox "Lembrar-me" (opcional)
    cy.get('#remember').check();

    // Clicar no botão de Entrar
    cy.get('button[type="submit"]')
      .contains('Entrar')
      .click();

    // Verificar se o alerta de sucesso é exibido
    // Como a página exibe um alerta nativo, precisamos interceptar
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Login realizado com sucesso! Redirecionando...');
    });
  });

  it('Deve mostrar erro ao tentar login sem preencher campos', () => {
    // Clicar no botão sem preencher nada
    cy.get('button[type="submit"]').click();

    // Verificar se o alerta de erro é exibido
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Por favor, preencha todos os campos.');
    });
  });

  it('Deve mostrar erro ao usar e-mail inválido', () => {
    cy.get('#email').should('be.enabled').clear().type('email-invalido');
    cy.get('#password').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Por favor, insira um e-mail válido.');
    });
  });

  it('Deve alternar visibilidade da senha', () => {
    // Inicialmente o campo deve ser do tipo password
    cy.get('#password').should('have.attr', 'type', 'password');
    
    // Clicar no ícone de olho
    cy.get('#togglePassword').click();
    
    // Agora o campo deve ser do tipo text
    cy.get('#password').should('have.attr', 'type', 'text');
    
    // Clicar novamente para esconder
    cy.get('#togglePassword').click();
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('Deve acessar link de "Esqueceu a senha?"', () => {
    cy.get('.forgot a')
      .should('have.attr', 'href', '#')
      .and('have.text', 'Esqueceu a senha?');
  });

  it('Deve verificar elementos da página', () => {
    // Verificar título da página
    cy.title().should('eq', 'Login Moderno');
    
    // Verificar logo e texto
    cy.get('.logo h1').should('contain', 'Bem-vindo de volta');
    cy.get('.logo p').should('contain', 'Entre na sua conta para continuar');
    
    // Verificar campos do formulário
    cy.get('#email').should('have.attr', 'placeholder', 'seu@email.com');
    cy.get('#password').should('have.attr', 'placeholder', 'Digite sua senha');
    
    // Verificar botão de login
    cy.get('button[type="submit"]')
      .should('contain', 'Entrar')
      .and('be.visible');
    
    // Verificar link de cadastro
    cy.get('.signup a').should('contain', 'Cadastre-se agora');
  });
});

describe('Testes de Responsividade', () => {
  beforeEach(() => {
    // Visitar a página de login local
    cy.visit('./index.html');
  });

  it('Deve exibir corretamente os elementos em resolução de iPhone X', () => {
    // Definir viewport para iPhone X (375x812)
    cy.viewport('iphone-x');

    // Verificar se elementos principais estão visíveis
    cy.get('.login-card').should('be.visible');
    cy.get('.logo h1').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    // Verificar estilos responsivos para telas pequenas (< 480px)
    cy.get('.login-card').should('have.css', 'padding', '30px 25px');
    cy.get('.logo h1').should('have.css', 'font-size', '24px');
    cy.get('#email').should('have.css', 'padding', '14px 16px 14px 46px');
    cy.get('#password').should('have.css', 'padding', '14px 16px 14px 46px');

    // Verificar se o formulário continua funcional
    cy.get('#email').should('be.enabled').clear().type('teste@mobile.com');
    cy.get('#password').should('be.enabled').clear().type('senhaMobile');
    cy.get('#email').should('have.value', 'teste@mobile.com');
    cy.get('#password').should('have.value', 'senhaMobile');

    // Verificar se elementos de layout responsivo estão presentes
    cy.get('.container').should('exist');
  });

  it('Deve exibir corretamente os elementos em resolução de MacBook 15', () => {
    // Definir viewport para MacBook 15 (1440x900)
    cy.viewport('macbook-15');

    // Verificar se elementos principais estão visíveis
    cy.get('.login-card').should('be.visible');
    cy.get('.logo h1').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    // Verificar estilos para desktop (largura máxima do container)
    cy.get('.container').should('have.css', 'max-width', '420px');
    // Verificar padding padrão para telas maiores
    cy.get('.login-card').should('have.css', 'padding', '40px 35px');
    cy.get('.logo h1').should('not.have.css', 'font-size', '24px'); // Não deve ter o tamanho mobile

    // Testar funcionalidade completa
    cy.get('#email').should('be.enabled').clear().type('teste@desktop.com');
    cy.get('#password').should('be.enabled').clear().type('senhaDesktop');
    cy.get('#remember').check();
    cy.get('#remember').should('be.checked');

    // Verificar botões sociais também
    cy.get('.social-btn.google').should('be.visible');
    cy.get('.social-btn.facebook').should('be.visible');
    cy.get('.social-btn.twitter').should('be.visible');
  });

  it('Deve adaptar layout para diferentes tamanhos de tela', () => {
    // Testar várias resoluções comuns (usando apenas presets válidos do Cypress)
    const resolutions = [
      { name: 'iPhone XR', viewport: 'iphone-xr' },
      { name: 'iPhone X', viewport: 'iphone-x' },
      { name: 'iPhone SE2', viewport: 'iphone-se2' },
      { name: 'iPhone 8', viewport: 'iphone-8' },
      { name: 'iPad Mini', viewport: 'ipad-mini' },
      { name: 'iPad', viewport: 'ipad-2' },
      { name: 'MacBook 13', viewport: 'macbook-13' },
      { name: 'MacBook 15', viewport: 'macbook-15' },
      { name: 'MacBook 16', viewport: 'macbook-16' },
    ];

    resolutions.forEach((resolution) => {
      cy.viewport(resolution.viewport);
      cy.log(`Testando responsividade em: ${resolution.name} (${resolution.viewport})`);
      
      // Verificar elementos essenciais
      cy.get('.login-card').should('be.visible');
      cy.get('#email').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
      
      // Verificar que os campos são clicáveis/interativos
      cy.get('#email').click().should('be.focused');
      cy.get('#password').click().should('be.focused');
    });
  });

  it('Deve manter funcionalidade em modo retrato e paisagem', () => {
    // Testar iPhone X em modo retrato e paisagem
    cy.viewport('iphone-x', 'portrait');
    cy.get('.login-card').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
    
    cy.viewport('iphone-x', 'landscape');
    cy.get('.login-card').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    // Verificar se o formulário continua funcional em landscape
    cy.get('#email').should('be.enabled').clear().type('landscape@test.com');
    cy.get('#password').should('be.enabled').clear().type('landscape123');
    cy.get('#email').should('have.value', 'landscape@test.com');
    cy.get('#password').should('have.value', 'landscape123');
  });
});
# Discord Bot - Javascript

###### 📡 Simples bot para discord feito em `javascript` por @DMVMarcio na lib [discord.js](https://discord.js.org/#/docs).

# Como criar um bot?

###### 🔨 Você deverá acessar o [discord develpers](https://discordapp.com/developers/applications/me), logar em sua conta e criar uma nova aplicação clicando em `Create an aplication` e em seguida colocar um nome e foto para seu bot. <h6> Após isso deverá ir na aba `bot` ao lado e clicar em `Add Bot`.

Você pode alterar as opções do bot acessando o arquivo: `config.json`

PARÂMETRO | RESULTADO
------------ | -------------
TOKEN | Token de seu bot
PREFIX | Prefixo desejado para o bot
DONO | Você colocará seu id

# Como consigo o token do bot?

Você deverá ir na aba **bot** ao lado e clicar em `Click to Reveal Token` ao lado da foto.<h6>⚠**AVISO:** Não divulgue seu **token** à nenhuma pessoa, ele é usado para o **login** na conta do bot, ou seja, poderão fazer **tudo** que quiserem no bot, caso isso ocorra você pode **trocar** o token clicando no botão `Regenerate` abaixo do token.

# Como adquiro meu id?

Você deverá ir nas **configurações** de seu **discord**, depois acessar a aba **aparencia** e ativar o **Modo desenvolvedor**, após isso feche as configurações, **clique** com o botão **direito** do mouse em você na lista de **usuários** do servidor ou em algum **chat** e clique **Copiar ID**.

# Como iniciar o bot?

Primeiramente, você precisará **baixar** o __[node.js](https://nodejs.org/)__ `versão recomendada`, após instalado, reinicie seu computador e depois execute o arquivo `continue.bat`, ele instalará todos os modulos precisos para seu bot poder ser ligado, após instalado, será criado um arquivo chamado `terminal.bat`, ele será utilizado para ligar seu bot, basta **abri-lo** e digitar o seguinte comando: `node .`, após isso poderá deletar o `continue.bat`.

# Como adiciono meu bot ao servidor?

💬 Você pode adquirir o convite acessando **[Discord Permissions Calculator](https://discordapi.com/permissions.html#2146958591)**, configure as permissões desejadas, coloque o `client id` de seu bot abaixo e acesse o link dado pelo site.

# Como troco o jogando do bot?

Acesse o arquivo `index.js` e procure por **var jogando = `${client.user.username} - ${client.guilds.size} servidores`**, basta alterar a mensagem escrita depois do `=`.

# Como criar novos comandos?

👾 Você apenas precisa criar um arquivo na pasta comandos: `NomeDoComando.js`, dentro deste arquivo você colocará o código do comando,  para editar o arquivo, recomendo usar [Visual Studio Code](https://code.visualstudio.com/), existem alguns comandos de **exemplo** na pasta. Se você tiver dúvidas poderá **consultar** algumas **comunidades** de programação no discord: **[LabNegro](https://discord.gg/XzHdjaD)** etc...

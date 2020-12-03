# hardmob-promocoes-app
Aplicativo desenvolvido em React Native para consulta a API de listagem das promoções do fórum hardmob.

# 1 - Build
## 1.0 - Instale o nodejs
choco install nodejs
## 1.1 - Instale o Android Studio
choco install androidstudio
## 1.2 - Instale o Android SDK
choco install android-sdk
## 1.3 - Configure a variável de ambiente ANDROID_HOME
Abra o Painel de Controle do Windows
Clique em Contas de Usuários, então clique em Contas de Usuários novamente
Clique em Alterar as variáveis do meu ambiente
Clique em Novo... insira o nome da variável ANDROID_HOME e o valor dela sendo sua pasta do sdk(padrão do chocolatey: "C:\Android\android-sdk")
## 1.4 - Inclua Plataform-tools para a variável de ambiente PATH
Abra o Painel de Controle do Windows
Clique em Contas de Usuários, então clique em Contas de Usuários novamente
Clique em Alterar as variáveis do meu ambiente
Selecione a variável PATH, em seguida clique em editar
Clique na primeira linha em branco disponível, e insira o caminho para a pasta plataform-tools dentro da pasta do sdk(padrão do chocolatey: "C:\Android\android-sdk\platform-tools")
## 1.5 - Conecte um dispositivo Android ao computador via USB
Plugue o cabo USB no computador e no dispositivo Android
No dispositivo Android vá até configurações -> Sobre o Telefone ou Sistema e clique diversas vezes em Número da Versão, até que a mensagem você é um desenvolvedor apareça
Volte até as configurações -> Sobre o Telefone ou Sistema -> Avançado -> Opções do desenvolvedor ative a opção Depuração USB
No computador abra o terminal e digite adb devices (Verifique no dispositivo Android se o mesmo solicitou autorização e aceite)
Veja a lista de dispotivos disponíveis
## 1.6 - Executando o aplicativo no dispositivo
Execute o comando '''npx react-native run-android'''
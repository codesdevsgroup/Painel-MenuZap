# Painel MenuZap

Este é o repositório do painel administrativo do sistema MenuZap. Este painel é destinado ao uso de **clientes lojistas** e **revendedores**, permitindo a gestão completa de cardápios, pedidos e configurações da plataforma.

## Visão Geral

O Painel MenuZap oferece uma interface centralizada para que os usuários possam:

-   Gerenciar produtos e categorias do cardápio.
-   Acompanhar e gerenciar pedidos em tempo real.
-   Configurar informações da loja, como horários de funcionamento e taxas de entrega.
-   Visualizar relatórios de vendas e desempenho.
-   (Revendedores) Gerenciar as contas de seus clientes.

## Tecnologias Utilizadas

-   **Framework:** Angular
-   **Estilização:** Bootstrap & Angular Material
-   **Notificações:** Notyf

## Primeiros Passos

### Pré-requisitos

-   Node.js e npm
-   Angular CLI

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/codesdevsgroup/Painel-MenuZap.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd Painel-MenuZap
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor local, execute o comando:

```bash
ng serve
```

Acesse `http://localhost:4200/` em seu navegador. A aplicação será recarregada automaticamente ao salvar qualquer alteração nos arquivos.

## Notificações

Este projeto utiliza a biblioteca [Notyf](https://github.com/caroso1222/notyf) para exibir notificações. A configuração padrão pode ser encontrada em `src/app/services/notification.service.ts`.

### Exemplo de Uso

```typescript
import { NotificationService } from './services/notification.service';

// ...

constructor(private notificationService: NotificationService) {}

// ...

this.notificationService.success('Operação realizada com sucesso!');
this.notificationService.error('Ocorreu um erro.');
```

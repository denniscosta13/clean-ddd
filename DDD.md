# DDD (Domain-driven Design)

Design orientado a dominio - não tem nada a ver com desenhar ou organizar o código.

Clean Architecture e DDD são coisas diferentes

## Domínio

Podemos entender como uma área de entendimento, fazem parte do mesmo contexto.

- Domain Experts
    - Conversa: entender o que o usuário do software utiliza, precisa ou não
- Linguagem ubíqua
    - Linguagem em comum entre as pessoas envolvidas no projeto
    - Quais as nomenclaturas dadas as coisas?
        - Por exemplo, na Banpar falamos de **Sacado** e **Cedente**

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

## Código

### Domain

Pasta dentro de src, que abrir a camada mais interna do software, desconectada de qualquer coisa das camadas externas.

Entidades: tudo que é factível a aplicação
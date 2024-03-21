/*
    - Query params -> meusite.com/users?name=raphael&age=19     // FILTROS
    - Route params -> /users/2      // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body -> { "name": "Raphael", "age":19 }

    - GET          -> Busca informação no back-end
    - POST         -> Cria informação no back-end
    - PUT / PATCH  -> Alterar/Atualizar informações no back-end
    - DELETE       -> Deletar informações no back-end

    - Middleware  -> INTERCEPTADOR -> Tem o poder de parar ou alterar dados da requisição
*/

const express = require("express") // importei o express no projeto
const uuid = require("uuid") // importei o uuid (id) no projeto

const porta = 3000 // coloquei uma variável para a porta
const app = express() // para facilitar coloquei o express dentro do variável 'app'
app.use(express.json()) // avisar para o express que é para usar por padrão o '.json' em vez de 'xml' e etc...

const users = [] // nunca vamos utilizar variável, foi somente para métodos didáticos (se o servidor for reiniciado, os dados são perdidos)

const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if(index < 0) {
        return response.status(404).json({ message: "User not found"})
    }

    request.userIndex = index
    request.userId = id

    next() // continua o fluxo natural da aplicação (as rotas)
}

const checkDelete = (request, response, next) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if(index < 0) {
        return response.status(404).json({ message: "User not found"})
    }

    request.userIndex = index
    request.userId = id

    next() // continua o fluxo natural da aplicação (as rotas)
}

app.get("/order", (request, response) => {
    return response.json(users)
})

app.post("/order", (request, response) => {
    const { requests, clienteName, price, status } = request.body

    const order = { id: uuid.v4(), requests: requests, clienteName: clienteName, price: price, status: "Novo pedido" }

    users.push(order)

    return response.status(201).json(order)
})

app.put("/order/:id", checkUserId, (request, response) => {
    const { requests, clienteName, price } = request.body;
    const index = request.userIndex;

    // Verifica se foram fornecidos novos valores para requests, clienteName e price
    if (requests !== undefined) {
        users[index].requests = requests;
    }
    if (clienteName !== undefined) {
        users[index].clienteName = clienteName;
    }
    if (price !== undefined) {
        users[index].price = price;
    }

    // Atualiza o status para "Em preparação"
    users[index].status = "Em preparação"

    const updatedOrder = users[index];

    return response.json(updatedOrder);
})

app.delete("/order/:id", checkDelete, (request, response) => { 
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()
})

app.get("/order/:id", checkUserId, (request, response) => {
    const index = request.userIndex;
    const atualizar = users[index]
    
    return response.json(atualizar)
})

app.patch("/order/:id", checkUserId, (request, response) => {
    const { requests, clienteName, price } = request.body;
    const index = request.userIndex;

    // Verifica se foram fornecidos novos valores para requests, clienteName e price
    if (requests !== undefined) {
        users[index].requests = requests;
    }
    if (clienteName !== undefined) {
        users[index].clienteName = clienteName;
    }
    if (price !== undefined) {
        users[index].price = price;
    }

    // Atualiza o status para "Pedido pronto"
    users[index].status = "Pedido pronto"

    const updatedOrder = users[index];

    return response.json(updatedOrder);
});

app.listen(porta, () => {
    console.log(`🚀 Servidor online na porta ${porta}`)
}) // avisa qual porta a aplicação vai rodar (documentação do express)

/*
    http://localhost:3000/order

    para parar o servidor usa o 'ctrl + c'

    npm run dev - o servidor começa a rodar ('dev' é o nome dado em 'package.json')
*/
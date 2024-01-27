async function listProducts() {
    const products = await fetch("http://localhost:3000/product")
    const productsJson = await products.json()
    const table = document.querySelector("#table-products")
    productsJson.forEach(element => {
        const price = element.preco
        const preco = price.toString().replace(".", ",")
        table.insertAdjacentHTML("beforeend",`
        <tr>
            <td><img src="${element.url}" alt="${element.nome}"></td>
            <td>
                <h2>${element.nome}</h2>
                <br>
                <br>
                ${element.descricao}
            </td>
            <td>R$${preco}</td>
            <td id="td-quantity">
                <label for="input-quantity">Quantidade</label>
                <input type="number" name="input-quantity" id="input-quantity">
            </td>
        </tr>`
        )
    });
}
listProducts()
function getAllProducts(done) {
    $.get('/api/products', function (data) {
        done(data);
    })
}

function createProductCard(product) {
    return $(`<div class="card col-3 m-2">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${product.manufacturer}</h6>
                <p class="card-text">${product.price}</p>
                <button class="btn btn-primary">BUY</button>
            </div>
        </div>`)
}

$(function () {

    let shoppingList = $('#shopping-list');
    getAllProducts(function (data) {
        shoppingList.empty();
        for (product of data) {
            //Create a new card element
            shoppingList.append(createProductCard(product))
        }
    })
})
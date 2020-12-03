import json
import requests

from loginController import login_user
from constant import BASE_URL


class Product:
    def __init__(self):
        self.token = login_user()
        self.base_url = BASE_URL

    def addProduct(self, item):
        response = requests.post(BASE_URL+'product/addNewProduct', json.dumps(item), headers={
            "Content-Type": "application/json",
            "token": self.token
        })

        print(response.text)
        print(response.status_code)

    def getProducts(self):
        response  = requests.get(BASE_URL+'product/getAllProduct', headers={
            "Content-Type": "application/json",
            "token": self.token
        })

        print(response.status_code)
        print(response.text)

    def getProductByCategory(self):
        pass

    def deleteProduct(self):
        pass

# product object
product = Product()

productItem = {
    "title": "Algo book",
    "description": "This book is really good too as well",
    "product_image": "https://picsum.photos/200/300",
    "product_category": "5fc88fe88ba3f5a22265a5b4"
}

# product.addProduct(productItem)

product.getProducts()

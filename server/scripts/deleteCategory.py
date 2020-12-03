from constant import BASE_URL
import requests
import json

from loginController import login_user


response = requests.delete(BASE_URL+'category/deleteCategory/5fc4f87c58360e00e05e0ed8', headers={
    "Content-Type": "application/json",
    "token": login_user()
})

print(response.text)

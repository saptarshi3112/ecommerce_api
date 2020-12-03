from constant import BASE_URL

import requests
import json

from loginController import login_user


response = requests.get(BASE_URL+'category/getAllCategory', headers={
    "Content-Type": "application/json",
    "token": login_user()
})

print(response.text)

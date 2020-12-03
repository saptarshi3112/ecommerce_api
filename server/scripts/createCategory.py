from constant import BASE_URL
import requests
import json

from loginController import login_user


response = requests.post(BASE_URL+'category/addNewCategory', json.dumps({
    "name": "Beauty"
}), headers={
    "Content-Type": "application/json",
    "token": login_user()
})

print(response.text)

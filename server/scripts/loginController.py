import requests
import json

from constant import BASE_URL


def login_user():
    response = requests.post(BASE_URL+'/user/login', json.dumps({
        "email": "sapt@yopmail.com",
        "password": "ubuntu"
    }), headers={
        "Content-Type": "application/json"
    })

    result = json.loads(response.text)
    token = result['userDetails']['token']
    return token


if __name__ == "__main__":
    login_user()

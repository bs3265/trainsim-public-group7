import requests

baseUrl = "https://localhost:8000"

def test_get_user_status_code_200():
    response = requests.get(baseUrl, verify=False)
    assert response.status_code == 200;
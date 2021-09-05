import requests

baseUrl = "https://localhost:8000"

def test_get_stops_status_code_200():
    response = requests.get(baseUrl+"/api/stops", verify=False)
    assert response.status_code == 200;
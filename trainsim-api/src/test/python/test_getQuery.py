import requests

baseUrl = "https://localhost:8000"

def test_get_itinerary_status_code_200():
    data = {"source":"2:90004","target":"2:90404","departDate":"2021-09-05T19:42:58.977Z","returnDate":"null","travelers":1}
    headers = {"Content-Type":"application/json"}
    response = requests.post(baseUrl+"/api/query", headers=headers, data=data, verify=False)
    assert response.status_code == 200;
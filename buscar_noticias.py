import requests
import json

# sua chave da API
API_KEY = "0687886634164f7ab741ad31890fbbb6"

# URL da requisição
url = f"https://newsapi.org/v2/everything?q=basquete OR NBA OR NBB&language=pt&sortBy=publishedAt&apiKey={API_KEY}"

# faz a requisição
resposta = requests.get(url)

# transforma em dicionário Python
dados = resposta.json()

# salva num arquivo JSON
with open("noticias.json", "w", encoding="utf-8") as arquivo:
    json.dump(dados, arquivo, ensure_ascii=False, indent=4)

print("Notícias salvas com sucesso!")
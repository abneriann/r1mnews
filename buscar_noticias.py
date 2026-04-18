import requests
import json

API_KEY = "0687886634164f7ab741ad31890fbbb6"

url = f"https://newsapi.org/v2/everything?q=basquete OR NBA OR NBB OR Corinthians OR Flamengo OR Lakers OR Celtics&language=pt&sortBy=publishedAt&pageSize=100&apiKey={API_KEY}"

resposta = requests.get(url)

dados = resposta.json()

with open("noticias.json", "w", encoding="utf-8") as arquivo:
    json.dump(dados, arquivo, ensure_ascii=False, indent=4)

print("Notícias salvas com sucesso!")
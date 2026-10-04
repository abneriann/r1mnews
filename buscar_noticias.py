import json
import os

import requests

API_KEY = os.getenv("NEWS_API_KEY")

if not API_KEY:
    raise RuntimeError(
        "Defina a variável de ambiente NEWS_API_KEY antes de atualizar as notícias."
    )

url = (
    "https://newsapi.org/v2/everything"
    "?q=basquete OR NBA OR NBB"
    "&sortBy=publishedAt"
    "&pageSize=100"
    f"&apiKey={API_KEY}"
)

resposta = requests.get(url, timeout=30)
resposta.raise_for_status()

artigos = resposta.json().get("articles", [])
dados = {"articles": artigos}

with open("noticias.json", "w", encoding="utf-8") as arquivo:
    json.dump(dados, arquivo, ensure_ascii=False, indent=4)

print("Notícias atualizadas com sucesso!")

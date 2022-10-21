![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![PyCharm](https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

# Financial Chat Django using React
| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | Chat Django
| :label: Tecnologias | python, django rest, postgresql, react

Two people Chat using Django + React
![image](https://user-images.githubusercontent.com/13515555/197201562-e9ce8ca9-d7a1-436d-a831-d22ff6b4d0ed.png#vitrinedev)


Play along !

<img src="https://www.django-rest-framework.org/img/logo.png#vitrinedev" alt="Django Rest Framework">
<img src="https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-react_2127.png#vitrinedev">

<h1> Install </h1>
<a href="https://www.python.org/downloads/" target="_blank">Python</a> latest

<a href="https://nodejs.org/en/">Node.js</a> latest

# Where is React ?

React is going to bee your frontend ! Just enter <a href="localhost:8000">localhost:8000</a> or <a href="127.0.0.1:8000">127.0.0.1:8000</a>

And see the magic happens !

Enjoy your Financial Control !

<h2>Dependencies</h2>

```sh
pip install -r requirements.txt
```

<h1> Config </h1>
<ol>
  <li>Create an `.env` file in the same folder where `migrate.py` is.</li>
  <li>In your terminal with venv, execute `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'` generating a new secret key</li>
  <li>Insert the new secret key in `.env` file like this: `SECRET_KEY = oahsdodjifodjfodjfpadjpajsdpojsd` .</li>
  <li>Insert the database URL in the `.env` file like this: `DATABASE_URL = your_db://your_db:password@localhost/my_db`.</li>
  <li>Run `python manage.py migrate` and create the tables</li>
</ol>

<h1>Running</h1>

```sh
python manage.py runserver
```

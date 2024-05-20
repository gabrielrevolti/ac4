#pip install mysql-connector-python

from flask import Flask, request, jsonify
from mysql import connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = connector.connect(user="root", password="root", database="teste")


@app.route('/api/say_name5', methods=['GET', 'POST'])
def say_name5():

    json = request.get_json()
    nome = json['txtNome']
    if nome:
        c = db.cursor()
        query = """ insert into teste(userName) values ("%s");"""%(nome)
        c.execute(query)
        db.commit()
        c.close()
        print(nome)
        return jsonify(first_name=nome)
    else:
        return jsonify(first_name="Erro")



if __name__ == "__main__":
    app.run(debug=True, port=5000)
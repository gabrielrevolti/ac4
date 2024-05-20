from flask import Flask, request, jsonify
from mysql import connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = connector.connect(user="root", password="root", database="Users")


@app.route('/api/say_name5', methods=['GET', 'POST'])
def say_name5():

    json = request.get_json()
    nome = json['txtNome']
    email = json['txtEmail']
    password = json['txtPassword']
    if nome:
        c = db.cursor()
        query = """ insert into Users(userName, userEmail, userPassword) values ("%s", "%s", "%s");"""%(nome, email, password)
        c.execute(query)
        db.commit()
        c.close()
        print(nome)
        return jsonify(response="ok")
    else:
        return jsonify(response="Erro")



if __name__ == "__main__":
    app.run(debug=True, port=5000)
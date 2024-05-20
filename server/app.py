from flask import Flask, request, jsonify
from mysql import connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = connector.connect(user="root", password="impacta2024", database="Users")


@app.route('/api/say_name5', methods=['GET', 'POST'])
def say_name5():

    json = request.get_json()
    name = json['txtName']
    address = json['txtAddress']
    telephone = json['txtTelephone']
    if name:
        c = db.cursor()
        query = """ insert into Users(userName, userAddress, userTelephone) values ("%s", "%s", "%s");"""%(name, address, telephone)
        c.execute(query)
        db.commit()
        c.close()
        print(name)
        return jsonify(response="ok")
    else:
        return jsonify(response="Erro")



if __name__ == "__main__":
    app.run(debug=True, port=5000)
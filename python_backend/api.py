from flask import json
from flask_pymongo import PyMongo
import flask

app = flask.Flask(__name__)
app.config[
    "MONGO_URI"] = "mongodb+srv://user:user@cluster0.w25yn.mongodb.net/travel?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route("/", methods=['GET'])
def home():
    return "Server PY"


@app.route("/countries", methods=['GET'])
def get_countries():
    countries = mongo.db.countries.find()
    data = []
    for country in countries:
        item = {
            "name": country["name"],
            "description": country["description"],
            "imageUrl": country["imageUrl"],
            "bigPhoto": country["bigPhoto"],
            "information": country["information"]
        }
        data.append(item)
    return json.dumps(data, ensure_ascii=False).encode('utf8')


if __name__ == '__main__':
    app.run(port=2000)
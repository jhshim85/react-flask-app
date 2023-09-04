from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/members')
def members():
  return {
    "members": [
      {"name": {'lastName': 'Doe', 'firstName': 'John'}, "age": "25"}, 
      {"name": {'lastName': 'Smith', 'firstName': 'Mike'}, "age": "33"},
      {"name": {'lastName': 'Buck', 'firstName': 'Jane'}, "age": "15"},
      {"name": {'lastName': 'Clark', 'firstName': 'Marcus'}, "age": "18"},
      {"name": {'lastName': 'Hammond', 'firstName': 'Lora'}, "age": "42"}]}

if __name__ == "__main__":
  app.run(debug=True)
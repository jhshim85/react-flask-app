from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/members')
def members():
  return {"members": ["Member1", "Member2", "Member3", "Member4", "Member5"]}

if __name__ == "__main__":
  app.run(debug=True)
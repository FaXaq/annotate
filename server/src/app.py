from flask import Flask
from flask import jsonify
from constants import PATH_SERVER_ROOT
from os import path
from flask_cors import CORS

app = Flask("annotate")
CORS(app)

ssl_context = (path.join(PATH_SERVER_ROOT, 'server.crt'), path.join(PATH_SERVER_ROOT, 'server.key'))

@app.route('/', methods=['GET', 'POST'])
def welcome():
    return jsonify({
        'hello': 'annotate !'
    })

def main():
    from services.webpage import blueprints as webpageBlueprints
    app.register_blueprint(webpageBlueprints.bp)
    app.run(host='0.0.0.0', port=105, debug=True, ssl_context=ssl_context)

if __name__ == '__main__':
    main()
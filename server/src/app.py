from flask import Flask
from flask import jsonify

app = Flask("annotate")

@app.route('/', methods=['GET', 'POST'])
def welcome():
    return jsonify({
        'hello': 'annotate !'
    })

def main():
    from services.webpage import blueprints as webpageBlueprints
    app.register_blueprint(webpageBlueprints.bp)
    app.run(host='0.0.0.0', port=105)

if __name__ == '__main__':
    main()
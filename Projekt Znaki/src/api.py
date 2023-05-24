from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'Brak pliku w żądaniu', 400

    file = request.files['file']
    if file.filename == '':
        return 'Nieprawidłowa nazwa pliku', 400

    if file and allowed_file(file.filename):
        # Przyjmujemy tylko pliki PNG
        filename = 'plik.png'
        file.save('/home/wszleku/ProjektZnaki/git/rozpoznawanie-znakow-drogowych/znakiDrogowe/znaki-drogowe-5/ProjektFrontEnd/src/image/' + filename)
        print("Plik został przesłany poprawnie")
        return 'Plik został przesłany poprawnie', 200
    else:
        return 'Nieprawidłowy format pliku', 400

def allowed_file(filename):
    # Sprawdzamy rozszerzenie pliku
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'png'

if __name__ == '__main__':
    app.run(debug=True)

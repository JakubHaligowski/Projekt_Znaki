from flask import Flask, request, render_template
from flask_cors import CORS

from PIL import ImageTk, Image
import numpy

from keras.models import load_model
model = load_model('model_RTSR.h5')

classes = { 1:'Ograniczenie prędkości do 20km/h',
    2:'Ograniczenie prędkości do 30km/h',
    3:'Ograniczenie prędkości do 50km/h',
    4:'Ograniczenie prędkości do 60km/h',
    5:'Ograniczenie prędkości do 70km/h',
    6:'Ograniczenie prędkości do 80km/h',
    7:'Koniec ograniczenia prędkości do 80km/h',
    8:'Ograniczenie prędkości do 100km/h',
    9:'Ograniczenie prędkości do 120km/h',
    10:'Zakaz wyprzedzania',
    11:'Zakaz wyprzedzania pojazdów powyżej 3,5 tony',
    12:'Pierwszeństwo na skrzyżowaniu',
    13:'Droga z pierwszeństwem',
    14:'Ustąp pierwszeństwa',
    15:'Stop',
    16:'Zakaz wjazdu',
    17:'Zakaz wjazdu pojazdów o masie powyżej 3,5 tony',
    18:'Skrzyżowanie z drogą podporządkowaną występującą po prawej stronie',
    19:'Inne niebezpieczeństwo',
    20:'Niebezpieczny zakręt w lewo',
    21:'Niebezpieczny zakręt w prawo',
    22:'Niebezpieczne zakręty, pierwszy w prawo',
    23:'Nierówna droga',
    24:'Śliska droga',
    25:'Zwężenie drogi z prawej strony',
    26:'Prace drogowe',
    27:'Sygnalizacja świetlna',
    28:'Przejście dla pieszych',
    29:'Przejście dla dzieci',
    30:'Przejście dla rowerów',
    31:'Uważaj na lód/śnieg',
    32:'Przejście dzikich zwierząt',
    33:'Koniec ograniczenia prędkości + zakazu wyprzedzania',
    34:'Skręć w prawo',
    35:'Skręć w lewo',
    36:'Nakaz jazdy prosto',
    37:'Nakza jazdy prosto lub w prawo',
    38:'Nakaz jazdy w prosto lub w lewo',
    39:'Trzymaj się prawej strony',
    40:'Trzymaj się lewej strony',
    41:'Obowiązkowy objazd',
    42:'Koniec zakazu wyprzedzania',
    43:'Koniec zakazu wyprzedzania pojazdów o masie powyżej 3,5 tony'}


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
        file.save('./../znaki/src/image/' + filename)
        print("Plik został przesłany poprawnie")
        return 'Plik został przesłany poprawnie', 200
    else:
        return 'Nieprawidłowy format pliku', 400

def allowed_file(filename):
    # Sprawdzamy rozszerzenie pliku
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'png'

def predict(file_path):
    image = Image.open(file_path)
    image = image.resize((30,30))
    image = numpy.expand_dims(image, axis=0)
    image = numpy.array(image)
    pred = model.predict_classes([image])[0]
    sign = classes[pred+1]
    print(sign)

if __name__ == '__main__':
    app.run(debug=True)

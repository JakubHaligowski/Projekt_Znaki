import React, { useState } from 'react';
import styles from './FileUpload.css'
import jakWyciacZdjecie from '../jakWyciacZdjecie.png'
import logo from '../logoreeai.svg'

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });
        console.log(response.status)
        if (response.ok) {
          console.log('Plik został przesłany poprawnie');
          window.location.assign("http://"+window.location.host+'/new');
        } else {
          console.error('Wystąpił błąd podczas przesyłania pliku');
        }
        // window.location.assign("http://"+window.location.host+'/new');
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    }
  };

  return (
    <div className='fullbody'>
      <div className='header'>
        <img src={logo} alt='Logo' className='logo'/>
        <h1 className='headerText'>REEAI - Rozpoznaj znak drogowy</h1>
      </div>
      
      <div className='body'>
        <div className='body2'>
          <h2>Przesyłanie pliku PNG</h2>
          <form className='formButtons' onSubmit={handleSubmit}>
            <input className='inputButton' type="file" name="file" onChange={handleFileChange} />
            <button type="submit">Prześlij plik</button>
          </form>
          <h4>Poniżej wyświetli się nazwa znaku<br></br>jaką rozpoznał model:</h4>
        </div>


        <div className='body2'>
          <h3>Jak powinien wyglądać przesłany plik?</h3>
          <img src={jakWyciacZdjecie} alt='Jak wyciac zdjecie?' className='imgJakWyciacZdj' /> 
        </div>
      </div>
    </div>
  );
}

export default FileUpload;

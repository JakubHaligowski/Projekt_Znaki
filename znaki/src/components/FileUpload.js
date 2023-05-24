import React, { useState } from 'react';

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
    <div>
      <h1>Przesyłanie pliku PNG</h1>
      <form className='formButtons' onSubmit={handleSubmit}>
        <input className='inputButton' type="file" name="file" onChange={handleFileChange} />
        <button type="submit">Prześlij plik</button>
      </form>
    </div>
  );
}

export default FileUpload;

// @ts-nocheck
import * as React from 'react';

const UploadFile = () => {
  const [uploadFile, setUploadFile] = React.useState();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!uploadFile) {
      return;
    }

    const formdata = new FormData();
    formdata.append("stuff", uploadFile[0]);
    
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("/uploadUsers?stuff", requestOptions)
      .then(response => response.text())
      .then(result => {
        alert('Все успешно, на сервере начался процесс обновления Базы Данных');
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };

  const handleSetUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFile(e.target.files);
  };

  console.log('uploadFile', uploadFile);

  return (
    <div
      className="container-fluid"
      style={{background: 'black'}}
    >
      <p> Import Description </p>
      <form onSubmit={handleSubmit}>
        <div className="UploadForm__input">
          <label>
            <input
              type="file"
              onChange={handleSetUploadFile}
            />
          </label>
          <div style={{color: 'black' }}>
            {!!uploadFile && uploadFile[0].name}
          </div>
          <br />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export {
    UploadFile
};
import React, { useState } from 'react'
import axios from 'axios'
import MessageBox from '../Components/MessageBox'
import { storage } from '../firebase'

function CreateProduct() {

  const [img, setImg] = useState(null)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [message,setMessage] = useState(false)
  const [progress,setProgress] = useState(0);



  const showPreview = (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");

      preview.src = src;
      preview.style.display = "block";
      setImg(event.target.files[0])
    }
  }

  console.log(img)

  const prepareData = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`product/${img.name}`).put(img);

    uploadTask.on(
      "state_changed",
      snapshot => { 
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
         setProgress(progress)
       },
      error => {
        console.log(error)
      },
      () => {
        storage.ref('product').child(img.name).getDownloadURL().then(url => sendData(url))
      }
    )



  }

  const sendData = async (url) => {
    const newData = {
      title,
      price,
      desc,
      img: url
    }
    await axios.post('https://e-com-777f7.firebaseio.com/products.json', newData)
    setDesc('');
    setTitle('');
    setPrice('');
    setImg(null);
    setMessage(true)
    let preview = document.getElementById("file-ip-1-preview");

    preview.style.display = 'none';
  }


  return (
    
    <div className="createPage">
      {message ? <MessageBox message={'Товар добавлен'} clss={'success'}/> : ''}

      <div className="createPage-cont">

      <div className="createPage-img">

<div class="center">
  <div class="form-input">
    <div class="preview">
      <img id="file-ip-1-preview" alt="" />
    </div>
    <label htmlFor="file-ip-1">Выбрать картинку</label>
    <input type="file" id="file-ip-1" accept="image/*" onChange={showPreview} />

  </div>
</div>

</div>
<div className="createPage-text">
<form action="">
  <input type="text" placeholder="Название товара" value={title} onChange={e => setTitle(e.target.value)} />
  <input type="text" placeholder="Описание товара" value={desc} onChange={e => setDesc(e.target.value)} />
  <input type="number" placeholder="Цена товара" value={price} onChange={e => setPrice(e.target.value)} />
  <progress  value={progress} max="100" />

  <button type="submit" onClick={prepareData}>Добавить</button>
</form>
</div>

      </div>


    </div>

  )
}

export default CreateProduct

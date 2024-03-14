import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import {useState} from 'react'
import CropEasy from "../crop/cropEasy";


export const Private = () => {


  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState("");
  const [openCrop, setOpenCrop] = useState(false);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };


  return (
    <section>
      <h2>Private page</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        // style={{ display: 'none' }}
        id="image-upload-input"
      />
      {file && <img src={photoURL} height={'300px'} />}
      <label htmlFor="image-upload-input">
        <button type="button">Choose Image</button>
      </label>
      <button onClick={handleSignOut}>Sign Out</button>


      {openCrop && <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />}

    </section>
  );
};
import ImageUplode from './ImageUplode';
import ImagePreview from './ImagePreview';
import { useState } from 'react';
import { enhancedImageAPI } from '../utiles/enhanceImageAPI.js';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL.image);
    } catch (error) {
      alert("Sorry, we have an issue with the system or the image extension.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImageUplode UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage ? enhancedImage : null}
      />
    </>
  );
};

export default Home;

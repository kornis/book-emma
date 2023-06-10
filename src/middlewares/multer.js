import cloudinary from "cloudinary"
import { CloudinaryStorage } from 'multer-storage-cloudinary'
console.log("yo segundo")

import multer from 'multer';

 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    public_id: (req, file) => 'emma',
  },
});
 
const parser = multer({ storage: storage });
export default parser
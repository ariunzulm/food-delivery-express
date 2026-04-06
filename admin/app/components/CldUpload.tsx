"use client";
import { CldUploadWidget } from "next-cloudinary";

const present = "909fb3f8-0082-4c5e-8766-d4aed777e67d";

const CldUpload = () => {
  <CldUploadWidget uploadPreset={present}>
    {({ open }) => {
      return <button onClick={() => open()}>Upload an Image</button>;
    }}
  </CldUploadWidget>;
};
export default CldUpload;

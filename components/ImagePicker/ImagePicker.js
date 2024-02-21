"use client";
import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();

  const handlePickClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? (
            <p>No Image Picked</p>
          ) : (
            <Image src={pickedImage} alt="user picked image" fill />
          )}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={styles.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

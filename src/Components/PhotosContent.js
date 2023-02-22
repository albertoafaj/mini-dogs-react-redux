import React from 'react'
import { useSelector } from 'react-redux'
import styles from './PhotosContent.module.css'

const PhotosContent = () => {

  const { list } = useSelector(state => state.photos);
  // console.log(list);
  return (
    <ul className={styles.list}>
      {list.map((photo) => (
        <li className={`${styles.item} anime`} key={photo.id}>
          <img className={styles.img} src={photo.src} alt={photo.title} />
          <h2 className={styles.title}>{photo.title}</h2>
          <span className={styles.access}>{photo.acessos}</span>
        </li>))}
    </ul>
  )
}

export default PhotosContent
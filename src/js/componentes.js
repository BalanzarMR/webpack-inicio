import '../CSS/componentes.css'
import webpacklogo from '../assets/img/webpack-logo.png'

export const saludar = (nombre)=>{

  const img = document.createElement('img');
  img.src = webpacklogo;
  document.body.append(img)
}
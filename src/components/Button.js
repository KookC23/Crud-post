import React from 'react'; 
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({  
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
  
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

/*const STYLES: Estilos que se pueden aplicar al botón.
const SIZES: Tamaños de los botones.
checkButtonStyle: Esto verifica si los estilos y tamaños proporcionados están dentro de las opciones definidas.
checkButtonSize: si la primera condicion no se encuentra, asigna el primer estilo/tamaño de la lista como predeterminado.

*/
import IconsSprite from '../../assets/sprite.svg';

import s from './Icon.module.css';

const Icon = ({
  id,
  className = '#',
  size = '20',
  fill = 'none',
  stroke = '#101828',
}) => {
  return (
    <svg
      className={s[className]}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${IconsSprite}#icon-${id}`} />
    </svg>
  );
};

export default Icon;

//size -> width and heigth

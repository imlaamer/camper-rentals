import { useDispatch, useSelector } from 'react-redux';
import CardItem from './CardItem/CardItem';
import s from './Cards.module.css';
import {
  getAdverts,
  selectAllAdverts,
} from '../../redux/adverts/advertsSelectors';
import { useEffect } from 'react';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';
import Icon from '../Icon/Icon';

const Cards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts())
      .unwrap()
      .then(() => console.log('Success'))
      .catch(
        () => console.eror('Error')
        // toast.error('Something went wrong. Please try again later!')
      );
  }, [dispatch]);

  const adverts = useSelector(selectAllAdverts);
  console.log(adverts);

  //   const all = useSelector(getAdverts);
  //   console.log(all);

  return (
    <ul className={s.cardsList}>
      {adverts?.map((advert) => (
        <CardItem key={advert.id} advert={advert} />
      ))}

      <Icon id={'bed'} />
      <Icon id={'water'} />
      <Icon id={'toilet'} fill="#101828" stroke="none" />

      <Icon id={'schedule'} />
      <Icon id={'route'} fill="#101828" stroke="none" />
      <Icon id={'radio'} />
      <Icon id={'plate'} />
      <Icon id={'people'} fill="#101828" stroke="none" />
      <Icon id={'microwave'} />
      <Icon id={'map-pin'} />
      <Icon id={'heart'} />

      <Icon id={'gas'} fill="#101828" stroke="none" />
      <Icon id={'fuel'} fill="#101828" stroke="none" />
      <Icon id={'freezer'} />

      <Icon id={'conditioner'} />
      <Icon id={'cd'} />
      <Icon id={'star'} />
      <Icon id={'cross'} />
      <Icon id={'gearbox'} size="32" />
      <Icon id={'food'} size="32" stroke="#101828" />
      {/* <Icon id={'food-2'} size="32" stroke="#101828" /> */}

      <Icon id={'shower'} size="32" />
      <Icon id={'ac'} fill="#101828" stroke="none" size="32" />
      <Icon id={'alcove'} size="40" fill="#101828" stroke="none" />
      <Icon id={'fully'} size="40" fill="#101828" stroke="none" />
      <Icon id={'van'} size="40" fill="#101828" stroke="none" />
    </ul>
  );
};

export default Cards;

//map

// <Icon id={'bed'} />
//             <Icon id={'water'} />
//             <Icon id={'toilet'} fill="#101828" stroke="none" />

//             <Icon id={'schedule'} />
//             <Icon id={'route'} fill="#101828" stroke="none" />
//             <Icon id={'radio'} />
//             <Icon id={'plate'} />
//             <Icon id={'people'} fill="#101828" stroke="none" />
//             <Icon id={'microwave'} />
//             <Icon id={'map-pin'} />
//             <Icon id={'heart'} />

//             <Icon id={'gas'} fill="#101828" stroke="none" />
//             <Icon id={'fuel'} fill="#101828" stroke="none" />
//             <Icon id={'freezer'} />

//             <Icon id={'conditioner'} />
//             <Icon id={'cd'} />
//             <Icon id={'star'} />
//             <Icon id={'cross'} />
//             <Icon id={'gearbox'} size="32" />
//             <Icon id={'food'} size="32" stroke="#101828" />
//             {/* <Icon id={'food-2'} size="32" stroke="#101828" /> */}

//             <Icon id={'shower'} size="32" />
//             <Icon id={'ac'} fill="#101828" stroke="none" size="32" />
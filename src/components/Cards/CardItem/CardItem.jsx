import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import Services from '../Services/Services';
import CardModalDetails from './CardModalDetails/CardModalDetails';

import {
  formatPrice,
  countReviews,
  formatLocation,
} from '../../../helpers/format-card-info';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/adverts/advertsSlice';
import { selectFavorites } from '../../../redux/adverts/advertsSelectors';

import s from './CardItem.module.css';

const CardItem = ({ advert, isFavoritesPage }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllFeatures, setIsAllFeatures] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    if (isFavoritesPage) {
      return setIsFavorite(true);
    }
    const isAdvertInFavorites = favorites?.some(
      (favorite) => favorite._id === advert._id
    );
    setIsFavorite(isAdvertInFavorites);
  }, [favorites, advert, isFavoritesPage]);

  const { name, price, rating, location, description, gallery, reviews } =
    advert;

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsAllFeatures(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAllFeatures(false);
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
    if (!isFavorite) {
      dispatch(addToFavorites(advert));
    } else {
      dispatch(removeFromFavorites(advert._id));
    }
  };

  const formatedPrice = formatPrice(price);
  const countedReviews = countReviews(reviews);
  // const formatedLocation = formatLocation(location);

  return (
    <>
      <li className={s.cardsItem}>
        <div className={s.imageContainer}>
          <img src={gallery[0]} alt={name} />
        </div>

        <div className={s.cardInfo}>
          <div className={s.titlePriceIconBox}>
            <h2 className={s.cardTitle}>{name}</h2>
            <div className={s.priceHeartBox}>
              <p className={s.priceText}>{formatedPrice}</p>
              <button
                type="button"
                className={s.favoriteBtn}
                onClick={handleToggleFavorite}
              >
                <Icon
                  id={'heart'}
                  size="24"
                  fill={isFavorite ? '#E44848' : 'none'}
                  stroke={isFavorite ? '#E44848' : '#101828'}
                />
              </button>
            </div>
          </div>

          <div className={s.iconsReviewsLocationBox}>
            <Icon id={'star'} size="20" fill="#ffc531" stroke="ffc531" />
            <p className={s.reviewsText}>
              {rating}({countedReviews} Reviews)
            </p>
            <Icon id={'map-pin'} size="16" />
            <p className={s.locationText}>{location}</p>
          </div>

          <p className={s.detailsText}>{description}</p>
          <Services advert={advert} isAllFeatures={isAllFeatures} />
          <Button className="showMoreCardBtn" onClick={handleOpenModal}>
            Show more
          </Button>
        </div>
      </li>

      {isModalOpen && (
        <Modal className="card-modal" onClose={handleCloseModal}>
          <CardModalDetails
            advert={advert}
            onClose={handleCloseModal}
            isAllFeatures={isAllFeatures}
          />
        </Modal>
      )}
    </>
  );
};

export default CardItem;

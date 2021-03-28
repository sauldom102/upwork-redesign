import AsyncStorage from '@react-native-async-storage/async-storage';

const LIKED_JOB_OFFERS = 'liked-job-offers';

export const getLikedJobOffers = async () => {
  const res = await AsyncStorage.getItem(LIKED_JOB_OFFERS);
  return res ? (JSON.parse(res) as string[]) : [];
};

export const toggleJobOfferLike = async (offerId: string) => {
  const likedJobOffers = await getLikedJobOffers();
  const liked = likedJobOffers.includes(offerId);
  let newLikedJobOffers = likedJobOffers;

  newLikedJobOffers = likedJobOffers.filter((o) => o !== offerId);

  if (!liked) {
    newLikedJobOffers = [...newLikedJobOffers, offerId];
  }

  await AsyncStorage.setItem(
    LIKED_JOB_OFFERS,
    JSON.stringify(newLikedJobOffers),
  );
  return newLikedJobOffers;
};

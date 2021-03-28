import { useCallback, useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getLikedJobOffers, toggleJobOfferLike } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { navigate, canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id },
  } = useRoute<Props['route']>();

  const [liked, setLiked] = useState(false);

  const handleInit = useCallback(async () => {
    const likes = await getLikedJobOffers();
    setLiked(likes.includes(id));
  }, [id]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const handlePressFave = useCallback(async () => {
    const newLikes = await toggleJobOfferLike(id);
    setLiked(newLikes.includes(id));
  }, [id]);

  const handlePressGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressSubmitProposal = useCallback(() => {
    navigate('SubmitProposal');
  }, [navigate]);

  return {
    handlePressGoBack,
    handlePressSubmitProposal,
    liked,
    handlePressFave,
  };
};

export default useConnect;

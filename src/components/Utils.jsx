import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

const useCustomNavigate = () => {
  const nav = useNavigate();

  const goBack = () => {
    nav(-1);
  };

  return { goBack };
};

export { useScrollToTop, useCustomNavigate };

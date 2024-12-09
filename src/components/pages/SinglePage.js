import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import setContent from '../../utils/setContent';
import './singleComicLayout/singleComicLayout.scss';

// Хотелось бы вынести функцию по загрузке данных как отдельный аргумент
// Но тогда мы потеряем связь со стэйтами загрузки и ошибки
// А если вынесем их все в App.js - то они будут одни на все страницы

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { getComic, getCharacter, clearError, process, setPropcess } =
    useMarvelService();

  useEffect(() => {
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case 'comic':
        getComic(id)
          .then(onDataLoaded)
          .then(() => setPropcess('confirmed'))
          .catch(() => setData(null));
        break;
      case 'character':
        getCharacter(id)
          .then(onDataLoaded)
          .then(() => setPropcess('confirmed'))
          .catch(() => setData(null));
        break;
      default:
        console.warn(`Unsupported dataType: ${dataType}`);
        break;
    }
  };

  const onDataLoaded = data => {
    setData(data);
  };

  // const errorMessage = error ? <ErrorMessage /> : null;
  // const spinner = loading ? <Spinner /> : null;
  // const content = !(loading || error || !data) ? (
  //   <Component data={data} />
  // ) : null;

  return (
    <>
      <AppBanner />
      {setContent(process, Component, data)}
    </>
  );
};

export default SinglePage;

import { ColorRing } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#475467', '#FFC531', '#F7F7F7', '#F2F4F7', '#E44848']}
      />
    </LoaderDiv>
  );
};

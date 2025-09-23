import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { SkeletonContainer } from './Skeleton.styled';

const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  const { darkTheme } = useContext(GlobalContext);

  return (
    <SkeletonContainer
      className={darkTheme ? 'dark' : ''}
      style={{ width, height, borderRadius }}
    />
  );
};

export default Skeleton;

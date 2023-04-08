import React from 'react';
import Title from './components/Title';
import logo from './logo192.png';
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';

const LikePhotoApp = () => {
  // let like = true;
  const [like, setLike] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className='container text-center'>
      <Title text={'Like Photo App'} />
      <Title text={`Likes ${count}`} classes={'subtitle'} />

      <div
        className='card card-dark m-auto shadow-sm'
        style={{ width: 300, cursor: 'pointer' }}
      >
        <div className='card-header fs-xl'>
          <AiFillSmile className='mr-10' />
          <small>DogyDog</small>
        </div>
        <img
          src={logo}
          alt='img'
          style={{ height: 'fit-content' }}
          onDoubleClick={toggleLike}
        />
        <div
          className='card-footer fs-xl d-flex'
          style={{ justifyContent: 'space-between', height: 50 }}
        >
          <AiOutlineComment style={{ height: 50, width: 50 }} />
          {like ? (
            <AiFillHeart
              className='text-danger'
              style={{ height: 50, width: 50 }}
              onClick={toggleLike}
            />
          ) : (
            <AiOutlineHeart
              onClick={toggleLike}
              style={{ height: 50, width: 50 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikePhotoApp;
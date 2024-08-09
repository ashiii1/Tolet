
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <>
    <div className='bg-gray-200 shadow-1 p-5 rounded-lg  w-full max-w-[552px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={house.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-600 rounded-full text-white px-3 inline-block'>
          {house.type}
    
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-green-600 mb-4'>
        $ {house.price}
      </div>
    </div>
    </>
  );
};

export default House;

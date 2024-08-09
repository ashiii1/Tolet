
// // import link
// // import logo

// const Header = () => {
//   return (
//     <header className='py-6 mb-12 border-b'>
//       <div className='container mx-auto flex justify-between items-center'>
// {/*       
//         <div className='flex items-center gap-6'>
//           <Link className='hover:text-violet-900 transition' to='/'>
//             Log in
//           </Link>
//           <Link
//             className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
//             to='/'
//           >
//             Sign up
//           </Link>
//         </div> */}
//       </div>
//     </header>
//   );
// };

// export default Header;
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg">
      <h1 className="text-xl font-bold"></h1>
      {/* <Link to="/post" className="btn bg-green-600 text-white px-4 py-2 rounded-lg">
        Post House
      </Link> */}
    </header>
  );
};

export default Header;

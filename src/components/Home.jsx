import Profile from './Profile';
import UserList from './UserList';

const Home = () => {
    return (
        <div className='flex lg:flex-row  flex-col-reverse   justify-around   w-[100%] p-[4rem]'>
            <div className='container '><UserList /></div>
            <div className='container ml-2'><Profile /></div>
        </div>
    )
}

export default Home;
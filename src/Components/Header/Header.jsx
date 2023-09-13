import profile from  '../../assets/Atik.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 pb-1 '>
             <h1 className='text-3xl'>Knowledge cafe</h1>
             <img src={profile} className='w-12 rounded-full' alt="" />
        </header>
    );
};

export default Header;
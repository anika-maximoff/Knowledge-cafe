import profile from '../assets/images/profile.png'

const Header = () => {
    return (
         <div className='flex justify-between border-b-2'>
            <h3 className="text-3xl font-bold">Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </div>
      
          
        
    );
};

export default Header;
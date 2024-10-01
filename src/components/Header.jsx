import backgrounds from '../assets/backgrounds.png'

const Header = () => {
    return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
        <div>
            <div className="font-bold text-4xl">
                SAKSHI NAYAK</div>
            <div className="text-2xl"> Student</div>
            <img className='rounded-full w-24'src={backgrounds} alt=""/> 
            </div>
        
        
    </header>;

}
export default Header; 
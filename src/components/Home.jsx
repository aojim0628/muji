import Navigation from './Navigation';
import Nav from './Nav';
import Banner from './Banner'
import News from './News';
import ProductList from './ProductList';
import SeeMoreBtn from './SeeMoreBtn';
import Footer from './Footer';

function Home() {
    return (
        <>
            <div className="flex items-center justify-center w-full overflow-x-hidden">
                <Navigation />
                <div className="h-26" />
            </div>

            <div className='w-[84%] mx-auto'>
                <div>
                    <Banner />
                </div>

                <div className='mt-16'>
                    <News />
                </div>

                <div className='mt-16'>
                    <ProductList />
                </div>

                <div className='mt-16 flex justify-center'>
                    <SeeMoreBtn />
                </div>
            </div>

            <div className='mt-16'>
                <Footer />
            </div>
        </>
    );
}

export default Home;
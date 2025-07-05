import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import HomeImage from '../components/HomeImage';
import Slogan from '../components/Slogan';
import TextBelowSLogan from '../components/TextBelowSlogan';
import BtnBelowSlogan from '../components/BtnBelowSlogan';
import Trust from '../components/Trust';
import Testimonials from '../components/Testimonials';
import SearchResults from '../components/SearchResults';
import { useNavigate,useOutletContext } from 'react-router-dom';
import FaqList from '../components/FaqList';
import axios from 'axios';

function Home() {
  const [meals, setMeals] = useState([]);
  const { scrollToFooter } = useOutletContext();
  const navigate = useNavigate()
  const [id,setId] = useState();
  const handleSearch = async (query) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error('Search error:', err);
      setMeals([]);
    }
  };

//   api calling when item is clicked
useEffect(()=>{
        async function getMealData() {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            console.log(res.data.meals);
            navigate('/item-description', { state: { mealData: res.data.meals } });
        }
        if(id){
        getMealData();
        }
    },[id,navigate])

  useEffect(() => {
  if (meals.length > 0) {
    const scrollToResults = () => {
      const el = document.getElementById('results');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    // Small delay to ensure render completion
    setTimeout(scrollToResults, 100);
  }
}, [meals]);

  return (
    <div className="w-full scroll-smooth">
      
      <section id='hero' className="relative w-full overflow-hidden">
        <div className='scroll-smooth'>
          <NavBar onSearch={handleSearch} scrollToFooter={scrollToFooter}/>
        </div>

        <div className="md:grid grid-cols-[2fr_1fr] text-center">
          <HomeImage />
          <div className='my-auto md:space-y-4'>
          <Slogan />
        <TextBelowSLogan />
        <div className='pt-4 space-y-1 place-items-start'>
            <div className='hidden md:block'>
            <Trust />
            </div>
         <BtnBelowSlogan />
         </div>
        </div>
        </div>
      </section>

      <section id='testimonials' className='md:pt-4'>
        <Testimonials />
      </section>

      {/* Search Results Section */}
      {meals.length > 0 && (
      <section id='results' className='bg-[#fff5cf]'>
        <SearchResults meals={meals} setId = {setId} />
      </section>
      )}

  <section className="flex justify-center items-center py-8 bg-[#fff5cf]">
  <div className="py-4 text-center px-4">
    <h2 className="font-bold text-2xl mb-2">Frequently Asked Questions</h2>
    <p className="font-semibold text-md mb-4">Find answers to common questions about our platform</p>
    <FaqList />
  </div>
</section>


    </div>
  );
}
export default Home;

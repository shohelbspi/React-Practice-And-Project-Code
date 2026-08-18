import { useNewsContext } from '../context/NewsContext';
import Wrapper from './Wrapper'

function Category({className}) {

    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    const {setNews, fetchNews } = useNewsContext();

   async function handleCategoryClick(e){
    const cat = e.target.value
       const data = await fetchNews(`/everything?q=${cat}`)
       setNews(data.articles);
       
    }

    return (
       <div className={`${className}`}>
            <Wrapper>
                <div className={`max-w-full flex gap-6 w-fit m-auto overflow-x-auto px-4 scrollbar-none mt-2`}>
                    {
                        categories.map(function (category) {
                            return (
                                <button onClick={handleCategoryClick} className="btn btn-accent" value={category} key={category}>{category.toUpperCase()}</button>
                            )
                        })
                    }
                </div>
            </Wrapper>
       </div>
    )
}

export default Category

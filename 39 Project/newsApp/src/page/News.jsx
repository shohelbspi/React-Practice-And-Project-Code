import Wrapper from '../components/Wrapper';
import { useEffect } from 'react';
import { useNewsContext } from '../context/NewsContext';
import Loader from '../components/Loader';

function News() {
    const { news, setNews, fetchNews,loading} = useNewsContext();

    useEffect(function () {
        (async () => {
            const data = await fetchNews();
            setNews(data.articles);
        })();
    }, []);


    if (loading) return <Loader/>

    return (
        <Wrapper>
            <div className='grid grid-cols-4 gap-6 mt-6'>
                {
                    news?.map(function (details, index) {
                        if (!details?.urlToImage) return null;

                        return (
                            <NewsCard key={index} details={details} />
                        );
                    })
                }
            </div>
        </Wrapper>
    );
}

function NewsCard({ details }) {
    return (
        <div className="card bg-red-100 shadow-sm">
            <figure className="w-full aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                    src={details?.urlToImage}
                    alt={details?.title || "News Image"}
                    className="w-full  object-contain p-2"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{details?.title}</h2>
                <p className='line-clamp-3'>{details?.description}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => window.open(details.url, "_blank")}
                        className="btn btn-primary"
                    >
                        Read More
                    </button>
                </div>
            </div>

        </div>
    );
}

export default News;
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";

export default function Home() {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = import.meta.env.VITE_API_KEY;
    const [searchParams, setSearchParams] = useSearchParams();

    const categoryFilter = searchParams.get('category');


    useEffect(() => {
        setIsLoading(true);

        let endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        if (categoryFilter) {
            endpoint += `&category=${categoryFilter}`;
        }

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                const filteredNews = data.articles.filter(n => n.title !== '[Removed]');
                const newsWithId = filteredNews.map(news => ({
                    ...news,
                    id: uuidv4()
                }));
                setNewsData(newsWithId);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setIsLoading(false);
            });
    }, [categoryFilter]);

    if (isLoading) {
        return (
            <div className="h-[560px] flex items-center justify-center">
                <div className="text-center text-4xl">Loading...</div>
            </div>
        );
    }

    const newsCards = newsData.map(news => {
        const randomIndex = Math.floor(Math.random() * 6)
        const randomImage = `/news${randomIndex}.png`

        return (
            <div key={news.id} className="relative w-full bg-slate-100 p-6 drop-shadow-xl hover:outline outline-slate-400 rounded-lg transition-all">
                <img
                    src={news.urlToImage || randomImage}
                    alt={`Image of ${news.title}`}
                    className="w-full object-contain rounded-lg drop-shadow-xl"
                />
                <h2 className="font-semibold text-xl mt-6">{news.title}</h2>
                <p className="mt-4">{news.description}</p>
                <Link
                    to={'news/' + news.id}
                    state={news}
                    className="bg-slate-600 text-white py-2 px-4 rounded-lg mt-4 inline-block"
                >
                    See details
                </Link>
            </div>
        )
    })

    return (
        <>
            <Filter />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                {newsCards}
            </div>
        </>
    )
}

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
        const randomIndex = Math.ceil(Math.random() * 5)
        const randomImage = `/news${randomIndex}.png`

        return (
            <div
                key={news.id}
                className="w-full bg-slate-100 drop-shadow-xl hover:scale-105 hover:outline outline-slate-400 rounded-lg transition-all duration-300"
            >
                <Link
                    to={'news/' + news.id}
                    state={news}
                    className="p-6 rounded-lg inline-block h-full"
                >
                    <img
                        src={news.urlToImage || randomImage}
                        alt={`Image of ${news.title}`}
                        className="w-full max-h-40 object-cover rounded-lg drop-shadow-xl aspect-video"
                    />
                    <h2 className="font-semibold text-xl mt-6 line-clamp-3">
                        {news.title}
                    </h2>
                    <p className="mt-8 line-clamp-4">
                        {news.description}
                    </p>
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

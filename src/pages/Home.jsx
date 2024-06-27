import { useEffect, useState } from "react"
import { everything } from "../../data";
import News from "../components/News";


export default function Home() {
    const [newsData, setNewsData] = useState(null);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                const filterdNews = data.articles.filter(n => n.title != '[Removed]')
                setNewsData(filterdNews)
            })
    }, [])


    return (
        <>
            {
                newsData &&
                <div className="flex gap-10 mt-10">
                    <div className="w-4/6">
                        <div className="w-full">
                            <img
                                src={newsData[1].urlToImage || '/news5.png'}
                                alt={`Image of ${newsData[1].title}`}
                                className="w-full object-contain rounded-lg shadow-lg shadow-gray-500"
                            />
                            <h2 className="font-semibold text-4xl mt-6">{newsData[1].title}</h2>
                            <p className="mt-4 text-lg">{newsData[1].description}</p>
                            <p className="mt-4 text-lg">{newsData[1].content}</p>
                        </div>
                    </div>
                    <div className="w-2/6">
                        {
                            newsData.map((n, index) => <News news={n} key={index} />)
                        }
                    </div>
                </div>
            }
        </>
    )
}
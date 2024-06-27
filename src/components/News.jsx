import timeSince from "../calculateTime";

export default function News({ news }) {
    const randomIndex = Math.ceil(Math.random() * 5)
    const defaultImage = `/news${randomIndex}.png`

    return (
        <div className="flex items-start overflow-hidden h-24 mb-4">
            <img
                src={news.urlToImage || defaultImage}
                alt={`Image of ${news.title}`}
                className="min-w-40 min-h-24 w-40 h-24 mr-2 object-cover rounded-lg shadow-lg shadow-gray-500"
            />
            <div className="flex flex-col justify-evenly h-full">
                <h2 className="text-ellipsis font-semibold text-sm">{news.title}</h2>
                <p className="text-ellipsis text-xs">
                    <span className="after:content-['•'] after:mx-1 before:text-md">{news.source.name}</span>
                    <span>{news.author}</span>
                </p>
                <p className="text-ellipsis text-xs">{timeSince(news.publishedAt)}</p>
            </div>
        </div>
    )
}
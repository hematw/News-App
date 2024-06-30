import { useLocation } from "react-router-dom";

export default function News() {
    const { state } = useLocation()

    const newsContent = state.content ? state.content.slice(0, state.content.indexOf('[')) : '';

    return (
        <>
            <div className="w-4/6 m-auto py-16">
                <div className="w-full">
                    <img
                        src={state.urlToImage || '/news5.png'}
                        alt={`Image of ${state.title}`}
                        className="w-full h-96 object-cover rounded-lg shadow-lg shadow-gray-500"
                    />
                    <h2 className="font-semibold text-4xl mt-6">{state.title}</h2>
                    <p className="mt-10 text-lg">{state.description}</p>
                    <p className="mt-6 text-lg">
                        {newsContent}
                        {
                            <a
                                href={state.url}
                                className="text-orange-400 underline hover:text-orange-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See more
                            </a>
                        }
                    </p>
                </div>
            </div>
        </>
    );
}

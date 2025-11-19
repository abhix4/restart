export default async function Quotes(){
    const data = await fetch("https://dummyjson.com/quotes").then(res => res.json())
    console.log(data)
    return (
        <div className="flex flex-col justify-center items-center max-w-3xl m-auto py-6 border border-black/10 my-6 rounded-md">
            <h1 className="font-medium mb-4 underline underline-offset-3">Quotes Page</h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    data.quotes.map((quote: {id: number, quote: string, author: string}) => (
                        <div key={quote.id} className="border border-black/10 px-3 py-2 rounded-md flex flex-col justify-between hover:shadow-sm transition-all">
                            <h2 className="text-black/80">{quote.quote}</h2>
                            <p className="text-black/60 text-sm italic ml-auto">- {quote.author}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
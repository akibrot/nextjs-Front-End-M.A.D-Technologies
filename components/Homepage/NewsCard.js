function NewsCard({ data }) {
    return (
        <div className="box w-[390px] h-[300px]  flex flex-col m-[0,auto] overflow-hidden">
            <div className="img flex-[8]   " >
                <div className='h-[10px] w-[100%] '>
                <img src={data.image}  height={10}/>
                </div>
            </div>

            <div className="title flex-[2] cursor-pointer bg-white pt-3 font-[roboto condenced] font-bold hover:text-[#810102]">
                <p>{data.description.slice(0,100)}</p>
            </div>
        </div>

    )
}

export default NewsCard
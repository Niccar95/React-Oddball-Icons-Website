import newsData from "../data/news.json";

const News = () => {
  return (
    <section className="flex flex-1 flex-col gap-8 justify-center items-center pt-12 pb-12 pl-4 pr-4">
      <ul>
        {newsData.map((item) => (
          <li key={item.id} className="border-b border-gray-200 pb-4">
            <p className="text-gray-500 text-sm">{item.date}</p>
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;

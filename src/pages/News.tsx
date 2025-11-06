import newsData from "../data/news.json";
import * as Icons from "react-oddball-icons";

const iconMap = Icons as Record<string, React.ComponentType>;

const News = () => {
  return (
    <section className="flex flex-1 flex-col gap-8 justify-center items-center pt-12 pb-12 pl-4 pr-4">
      <ul>
        {[...newsData].reverse().map((item) => (
          <li key={item.id} className="border-b border-gray-200 pb-4 mb-8">
            <p className="text-gray-500 text-sm">{item.date}</p>
            <h2 className="font-semibold">
              {item.title}{" "}
              {item.version && (
                <span className="text-gray-500">({item.version})</span>
              )}
            </h2>
            <p>{item.description}</p>
            {item.icons && (
              <div className="flex gap-2 mt-4 flex-wrap">
                {item.icons.map((iconName: string) => {
                  const IconComponent = iconMap[iconName];
                  return IconComponent ? (
                    <div
                      key={iconName}
                      className="rounded-md p-1 border border-neutral-200 bg-gradient-to-br from-white to-neutral-50"
                    >
                      <IconComponent />
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;

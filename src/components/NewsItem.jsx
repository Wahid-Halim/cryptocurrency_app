import moment from "moment";

const NewItem = ({ news }) => {
  const { title, description, urlToImage, source, publishedAt, url } = news;

  const handleClickNewsCard = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="flex flex-col justify-between  bg-slate-50 shadow-md transition hover:shadow-2xl space-y-3 p-3"
      onClick={handleClickNewsCard}
    >
      <div className="flex justify-between items-center mb-4 gap-4">
        <h2 className="font-medium font-roboto text-[14px]">{title}</h2>
        <img src={urlToImage} alt="news image" className="w-[130px]" />
      </div>

      <div>
        <p className="text-[12px] font-roboto">{description}</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <p className="text-gray-500 text-[10px] mt-3 ">{source.name}</p>
        <p className="text-gray-500 text-[10px] mt-3">
          {moment(publishedAt).startOf("ss").fromNow()}
        </p>
      </div>
    </div>
  );
};

export default NewItem;

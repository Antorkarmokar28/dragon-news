import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="container mx-auto flex bg-base-300 p-4">
      <p className="bg-secondary text-base-100 font-bold p-4">Latest</p>
      <Marquee>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          inventore saepe iure? Ad, possimus fugiat perspiciatis est quos,
          voluptatibus ea totam, ab error iusto debitis alias quae non repellat
          optio.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;

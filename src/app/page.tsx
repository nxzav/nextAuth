import Image from 'next/image';

export default function Home() {
  return (
    <div className="container w-11/12 mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome!</h1>
      <img className='w-full md:w-1/2 mx-auto'
        src="https://steamuserimages-a.akamaihd.net/ugc/932681036352143005/58B5728ACD00D23A52D8C8339BF9B8DF74F2D263/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="media"
      />
    </div>
  );
}

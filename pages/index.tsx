import axios from "axios";
import { Video } from '@/types';
import VideoCard from '@/components/VideoCard';
import NoResults from '@/components/NoResults';

interface Iprops {
    videos: Video[];
}

const Home = ({ videos }: Iprops )=> {
  return (
    <>
      <div className='flex flex-col gap-10 videos h-full'>
          {videos.length ?
              videos.map((video: Video) => (
                <VideoCard key={video._id} post={video} />
            )) :
            <NoResults text={'No Videos'}/>
          }
      </div>

    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/post');

  return {
    props: {
      videos: data
    },
  };
}

export default Home;

import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import Spinner from '../components/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';
import { useNavigate } from 'react-router';

export default function Slider() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, 'listings');
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({ id: doc.id, data: doc.data });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (listings.length === 0) {
    return <></>;
  }

  return (
    listings && (
      <>
        <Swiper
					slidesPerView={1}
					navigation
					pagination={{type: 'progressbar'}}
					effect='fade'
					modules={[EffectFade]}
					autoplay={{delay: 3000 }}
				>
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                className='w-full h-[300px] overflow-hidden'
                style={{
                  background: `url(${data.imgUrls[0]}), center, no-repeat`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}

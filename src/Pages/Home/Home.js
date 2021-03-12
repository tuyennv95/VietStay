import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../../Components/Header/Header';
// import RangeDate from '../../Components/RangeDate/RangeDate';
import Slider from '../../Components/Slider/Slider';
import FooterHome from '../../Components/FooterHome/FooterHome';
import CategoryHome from '../../Components/CategoryHome/CategoryHome';
import IntroAbout from '../../Components/IntroAbout/IntroAbout';
import SliderPlaceHotCity from '../../Components/SliderPlaceHotCity/SliderPlaceHotCity';
import SliderHotCity from '../../Components/SliderHotCity/SliderHotCity';
import Footer from '../../Components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  '@global': {

    margin: 0,
    padding: 0,
    listStyle: 'none',

    a: {
      textDecoration: 'none',
    }
  },
  slider: {
    marginTop: '130px',
  },
}))
export default function Home() {
  const classes = useStyles();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const SaiGon = [

    {
      img: 'image/saigon_trungtam.jpg',
      href: '',
      title: 'Gần trung tâm',
      description: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh'
    },
    {
      img: 'image/saigon_capdoi.jpg',
      href: '',
      title: 'Dành cho cặp đôi',
      description: 'Tận hưởng không gian lãng mạn và ngọt ngào giữa Sài Gòn hoa lệ.'
    },
    {
      img: 'image/saigon_giatot.jpg',
      href: '',
      title: 'Giá tốt chọn ngay!',
      description: 'Trải nghiệm không gian homestay tiện nghi với mức giá không thể tốt hơn.'
    },
    {
      img: 'image/saigon_view.jpg',
      href: '',
      title: 'Triệu view sống ảo',
      description: 'Top homestay triệu view sống ảo bạn không thể bỏ lỡ tại Sài Gòn.'
    },
    {
      img: 'image/saigon_beboi_bbq.jpg',
      href: '',
      title: 'Bể bơi & BBQ',
      description: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.'
    },
    {
      img: 'image/saigon_uudai.jpg',
      href: '',
      title: 'Siêu giảm giá!',
      description: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.'
    },
    {
      img: 'image/saigon_thang.jpg',
      href: '',
      title: 'Ở lâu giảm sâu!',
      description: 'Top homestay phù hợp cho nhu cầu đi công tác khi bạn cần - Ở càng lâu, giá càng tốt!'
    },
  
  ]
  const VungTau = [
    {
      img: 'image/vungtau_capdoi.jpg',
      href: '',
      title: 'Cho cặp đôi',
      description: 'Trải qua kỳ nghỉ lãng mạn và đáng nhớ với gợi ý chỗ ở cực đẹp chỉ dành cho hai người'
    },
    {
      img: 'image/vungtau_nhomban.jpg',
      href: '',
      title: 'Cho nhóm bạn',
      description: 'Chỗ ở tiện nghi, rộng rãi cho nhóm bạn và gia đình ở thành phố biến.'
    },
    {
      img: 'image/vungtau_uudai.jpg',
      href: '',
      title: 'Giá ưu đãi',
      description: 'Top Homestay có thiết kế đẹp, giá siêu ưu đãi.'
    },
    {
      img: 'image/vungtau_ganbaisau.jpg',
      href: '',
      title: 'Gần Bãi Sau',
      description: 'Chỗ ở gần bãi Sau giá siêu ưu đãi dành tặng bạn.'
    },
    {
      img: 'image/vungtau_ganbaitruoc.jpg',
      href: '',
      title: 'Gần Bãi Trước',
      description: 'Chỗ ở view biển, gần bãi Trước với giá ưu đãi cho chuyến du lịch thêm hoàn hảo.'
    },
    {
      img: 'image/vungtau_giare.jpg',
      href: '',
      title: 'Giá dưới 1 triệu',
      description: 'Chỉ từ dưới 1 triệu/đêm cho một chỗ ở lý tưởng trung tâm Vũng Tàu.'
    },
  
  ]
  const HaNoi = [
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_7_1584602449.jpg',
      href: '/categorycity/ha-noi.gia-uu-dai',
      title: 'Giá cực đã!',
      description: 'Top nhà đẹp "giá yêu" - tất cả dưới 600k/đêm, cho bạn thoả sức lựa chọn.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_5_1584602414.jpg',
      href: '/categorycity/ha-noi.gan-pho-co',
      title: 'Khu vực phố cổ!',
      description: 'Khu vực quận Hoàn Kiếm, tiện lợi cho hành khách di chuyển các khu phố cổ.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_6_1584602432.jpg',
      href: '/categorycity/ha-noi.cap-doi',
      title: 'Lãng mạn cho cặp đôi',
      description: 'Hâm nóng tình cảm với chỗ ở lãng mạn bạn không thể bỏ lỡ'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1584602349.jpg',
      href: '',
      title: 'Top nhà đẹp!',
      description: 'Những căn homestay xinh xắn vạn người mê ở Hà Nội.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_4_1584602393.jpg',
      href: '',
      title: 'Siêu ưu đãi!',
      description: 'Top homestay giảm đến 50% từ các chủ nhà uy tín trên Luxstay!'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_3_1584602374.jpg',
      href: '',
      title: 'Gần Hồ Tây!',
      description: 'Chỗ ở xinh xắn view hồ Tây lộng gió đang có giá tốt. Đừng bỏ lỡ!'
    },
    
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1584602331.jpg',
      href: '',
      title: 'Một mình vẫn vui',
      description: 'Trải nghiệm chuyến du lịch 1 mình và cùng tận hưởng những trải nghiệm thú vị.'
    },
  ]
  const DaLat = [
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_5_1584679229.jpg',
      href: '',
      title: 'Nhà đẹp giá tốt',
      description: 'Top chỗ giá hấp dẫn, chỉ dưới 500k/đêm cho bạn thoả thích lựa chọn'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_4_1584678704.jpg',
      href: '',
      title: 'Top homestay đẹp',
      description: 'Top homestay đẹp lịm tim khắp Đà Lạt cho bạn tha hồ check-in.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_3_1584678654.jpg',
      href: '',
      title: 'Trung tâm Đà Lạt',
      description: 'Tiện lợi di chuyển khắp Đà Lạt một cách dễ dàng với các chỗ ở gần Trung tâm.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_6_1584679656.jpg',
      href: '',
      title: 'Biệt thự đẹp',
      description: 'Khám phá những căn biệt thự đẹp giữa khung cảnh mộng mơ của Đà Lạt.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1584678582.jpg',
      href: '',
      title: 'Kì nghỉ lãng mạn',
      description: 'Trải nghiệm kỳ nghỉ lãng mạn chỉ dành riêng cho hai người. '
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1584678546.jpg',
      href: '',
      title: 'Cho nhóm bạn',
      description: 'Trải qua kỳ nghỉ đáng nhớ cùng gợi ý chỗ ở cho nhóm đông người cực thú vị'
    },
  
  ]
  
  return (
    <Container>
      <Header />
      <div className={classes.slider}>
      <Slider/>
      </div>
      <CategoryHome />
      <SliderHotCity />
      <SliderPlaceHotCity
        title={'Hà Nội'}
        des={'Khám phá từng góc phố Hà Nội cùng Top chỗ ở siêu ưu đãi.'}
        city={HaNoi} />
      <SliderPlaceHotCity
        title={'Sài Gòn'}
        des={'Top chỗ ở sạch đep, giá tốt tại TP.Hồ Chí Minh cho chuyến du lịch và công tác của bạn.'}
        city={SaiGon} />
      <SliderPlaceHotCity
        title={'Vũng Tàu'}
        des={'Đổi gió cùng bạn bè hoặc người thân tại thành phố biển Vũng Tàu xinh đẹp'}
        city={VungTau} />
      
      <SliderPlaceHotCity
        title={'Đà Lạt'}
        des={'Đến Đà Lạt cùng người thương để thấy cảm xúc vẫn vẹn nguyên như những lần đầu.'}
        city={DaLat} />
      <IntroAbout />
      <FooterHome />
      <Footer />

    </Container>


  )
}

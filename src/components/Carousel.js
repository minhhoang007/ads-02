import React from "react"
import ImageGallery from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/themes/200881/assets/slider_1.jpg?1613961621306",
    // thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/themes/200881/assets/slider_3.jpg?1613961621306",
    // thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/files/rem-vai-cao-cap-lao-cai-sapa-3-ef460021-72de-4a6b-af55-1b01f4d37b34.jpg?v=1587890975656",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/files/thi-cong-son-nha-biet-thu-lao-cai.jpg?v=1583462846359",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/files/tranh-dan-tuong-phong-canh-lao-cai-2.jpg?v=1583639426162",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/files/tu-van-thiet-ke-nha-dep-tai-lao-cai-4.jpg?v=1490917687014",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "//bizweb.dktcdn.net/100/150/444/files/tu-van-thiet-ke-nha-dep-tai-lao-cai3.jpg?v=1490917796428",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]


const Carousel = () => {
  return (
    
      <ImageGallery items={images} />
    
  )
}

export default Carousel

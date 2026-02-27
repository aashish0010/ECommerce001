// src/app/shared/data/owl-carousel.ts
var homeBannerSlider = {
  loop: true,
  nav: true,
  dots: false,
  autoHeight: false,
  navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
  responsive: {
    0: {
      items: 1
    }
  }
};
var productSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 6,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    247: {
      items: 2,
      margin: 16
    },
    650: {
      items: 3
    },
    1e3: {
      items: 4
    },
    1199: {
      items: 5
    },
    1400: {
      items: 6
    }
  }
};
var horizontalProductSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 4,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    890: {
      items: 2
    },
    999: {
      items: 3
    }
  }
};
var BlogSlider = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5e3,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    668: {
      items: 2
    },
    999: {
      items: 3
    }
  }
};
var SocialMediaSlider = {
  loop: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 3
    },
    480: {
      items: 4
    },
    600: {
      items: 5
    },
    1024: {
      items: 6
    },
    1367: {
      items: 7
    }
  }
};
var BrandSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 20,
  responsive: {
    0: {
      items: 2,
      margin: 12
      // autoHeight:true,
    },
    480: {
      items: 3,
      margin: 12
    },
    767: {
      items: 4,
      margin: 20
    },
    1024: {
      items: 5,
      margin: 20
    },
    1500: {
      items: 6,
      margin: 20
    }
  }
};
var categorySlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 2,
      margin: 12,
      autoHeight: true
    },
    480: {
      items: 3,
      margin: 12,
      autoHeight: true
    },
    576: {
      margin: 12
    },
    668: {
      items: 4
    },
    900: {
      items: 5
    }
  }
};
var FurnitureCategorySlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 2,
      mouseDrag: true
    },
    480: {
      items: 3,
      mouseDrag: true
    },
    768: {
      items: 4,
      mouseDrag: true
    },
    1024: {
      items: 5,
      mouseDrag: true
    },
    1368: {
      items: 6,
      mouseDrag: false
    }
  }
};
var productMainThumbSlider = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  dotsData: true,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
  autoplay: false,
  navSpeed: 300,
  autoHeight: true,
  responsive: {
    0: {
      items: 1
    }
  }
};
var productThumbSlider = {
  loop: false,
  dots: false,
  margin: 16,
  navSpeed: 300,
  autoHeight: true,
  items: 4,
  responsive: {
    0: {
      items: 2,
      autoHeight: true
    },
    400: {
      items: 3
    },
    485: {
      items: 4
    }
  }
};
var productSliderLayout = {
  items: 4,
  loop: true,
  dots: false,
  margin: 15,
  navSpeed: 300,
  responsive: {
    0: {
      items: 2,
      autoplay: true,
      autoplayTimeout: 4500
    },
    527: {
      items: 3,
      autoplay: true,
      autoplayTimeout: 4500
    },
    750: {
      items: 4
    }
  }
};
var JewelleryCategorySlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      autoHeight: true
    },
    562: {
      items: 2,
      mouseDrag: true
    },
    992: {
      items: 3,
      mouseDrag: true
    },
    1200: {
      items: 4,
      mouseDrag: false
    }
  }
};
var bagsProduct = {
  loop: true,
  dots: false,
  nav: true,
  navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
  responsive: {
    0: {
      items: 1
    }
  }
};
var collectionCategorySlider = {
  loop: true,
  nav: false,
  dots: false,
  items: 7,
  margin: 20,
  responsive: {
    0: {
      margin: 16,
      items: 2,
      autoHeight: true
    },
    400: {
      margin: 16,
      items: 3
    },
    490: {
      margin: 16,
      items: 4
    },
    680: {
      items: 5
    },
    880: {
      items: 6
    },
    1024: {
      items: 7
    }
  }
};
var toolsCategorySlider = {
  loop: false,
  nav: false,
  dots: false,
  margin: 20,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    586: {
      items: 2
    },
    991: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
var compareSlider = {
  loop: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    668: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
var testimonialSlider = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3e3,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    992: {
      items: 2
    }
  }
};
var teamSlider = {
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3e3,
  margin: 24,
  navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
  responsive: {
    0: {
      items: 2,
      autoHeight: true
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
var productSlider6 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 6,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    430: {
      items: 2,
      margin: 16
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    991: {
      items: 5
    },
    1296: {
      items: 6
    }
  }
};
var productSlider5 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 6,
  responsive: {
    0: {
      items: 2,
      margin: 16,
      autoHeight: true
    },
    600: {
      items: 3
    },
    1e3: {
      items: 4
    },
    1199: {
      items: 5
    },
    1400: {
      items: 6
    }
  }
};
var productSlider4 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 4,
  responsive: {
    0: {
      items: 2,
      margin: 16,
      autoHeight: true
    },
    576: {
      items: 3
    },
    915: {
      items: 4
    }
  }
};
var productSlider3 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 4,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    576: {
      items: 2
    },
    915: {
      items: 3
    }
  }
};
var productSlider2 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 2,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    576: {
      items: 2
    }
  }
};
var blogSlider4 = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5e3,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    516: {
      items: 2
    },
    700: {
      items: 3
    },
    1115: {
      items: 4
    }
  }
};
var attributeSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 1
    },
    430: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    991: {
      items: 5
    }
  }
};

export {
  homeBannerSlider,
  productSlider,
  horizontalProductSlider,
  BlogSlider,
  SocialMediaSlider,
  BrandSlider,
  categorySlider,
  FurnitureCategorySlider,
  productMainThumbSlider,
  productThumbSlider,
  productSliderLayout,
  JewelleryCategorySlider,
  bagsProduct,
  collectionCategorySlider,
  toolsCategorySlider,
  compareSlider,
  testimonialSlider,
  teamSlider,
  productSlider6,
  productSlider5,
  productSlider4,
  productSlider3,
  productSlider2,
  blogSlider4,
  attributeSlider
};
//# sourceMappingURL=chunk-HUS46LWS.js.map

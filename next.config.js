module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-person-icon-png-image_1788612.jpg',
    ],
  },
};

const withImages = require('next-images');
module.exports = withImages();

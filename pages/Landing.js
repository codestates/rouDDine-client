// import React from 'react';
// import Image from 'next/image';
// import { Parallax } from 'react-scroll-parallax';
// import { Wrapper } from '../public/asset/Parallax';

// export default function Landing() {
//   return (

//     <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
//         <Image width="800" height="500"  src="/../public/asset/picture.jpg"></Image>
//         <Image width="100" height="50" src="/../public/asset/picture2.jpg"></Image>
//     </Parallax>
//   );
// }
import Link from 'next/link'
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax'

export default () => (
  <>
    <Link href="/">
      <a>Homepage</a>
    </Link>

    <h1>Homepage</h1>

    <div className="content">
      <Parallax offsetYMin={200} offsetYMax={1500}>
      <Image width="800" height="500"  src="/../public/asset/picture.jpg"></Image>
        <div>Moving A</div>
      </Parallax>
      <Parallax offsetYMin={-500} offsetYMax={2000}>
      <Image width="800" height="500"  src="/../public/asset/picture2.jpg"></Image>
        <div>Moving C</div>
      </Parallax>
    </div>

    <style jsx>
      {`
        .content {
          margin-top: 300px;
          border: 2px solid grey;
          height: 1500px;
        }
      `}
    </style>
  </>
)
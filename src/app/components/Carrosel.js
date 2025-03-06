// AutoplayCarousel.js
import React from 'react';
import { Box, Carousel} from 'grommet';
import Image from 'next/image';
import imgJS from '../img/JavaScript.png';
import imgCSS from '../img/CSS.png';
import imgHTML from '../img/html5.png';
import imgPostgreSQL from '../img/PostgreSQL.png'

export const Autoplay = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={grommet}>
  <Box width="500px" height="500px" gap="medium" pad="large" >
    <Carousel controls={false} play={3000}>
      <Box pad="xlarge">
      <Image
          src={imgJS}
          alt="JavaScript Logo"
          width={300}
          height={300}
        />
      </Box>
      <Box pad="xlarge">
      <Image
          src={imgCSS}
          alt="CSS Logo"
          width={300}
          height={300}
        />
      </Box>
      <Box pad="xlarge">
      <Image
          src={imgHTML}
          alt="HTML Logo"
          width={300}
          height={300}
        />
      </Box>
      <Box pad="xlarge">
      <Image
          src={imgPostgreSQL}
          alt="PostgreSQL Logo"
          width={300}
          height={300}
        />
      </Box>
    </Carousel>
  </Box>
  // </Grommet>
);

export default Autoplay;
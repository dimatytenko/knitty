import { AboutComponent } from '../../components/About';
import image_1 from '../../components/About/assets/image_1.jpg';
import image_2 from '../../components/About/assets/image_2.jpg';
import image_3 from '../../components/About/assets/image_3.jpg';

const data = [
  {
    id: '1',
    title: 'Alena Stotska',
    subtitle: `Meet our visionary founder, a passionate advocate for preserving Ukrainian craftsmanship and traditions. With a deep love for knitting, brings a unique blend of creativity and cultural pride to our collection of Ukrainian knitwear, creating a bridge between heritage and contemporary fashion.`,
    img: image_1,
  },
  {
    id: '2',
    title: 'Alena Stotska',
    subtitle: `Meet our visionary founder, a passionate advocate for preserving Ukrainian craftsmanship and traditions. With a deep love for knitting, brings a unique blend of creativity and cultural pride to our collection of Ukrainian knitwear, creating a bridge between heritage and contemporary fashion.`,
    img: image_2,
  },
  {
    id: '3',
    title: 'Alena Stotska',
    subtitle: `Meet our visionary founder, a passionate advocate for preserving Ukrainian craftsmanship and traditions. With a deep love for knitting, brings a unique blend of creativity and cultural pride to our collection of Ukrainian knitwear, creating a bridge between heritage and contemporary fashion.`,
    img: image_3,
  },
];

export const About = () => {
  return <AboutComponent data={data} />;
};

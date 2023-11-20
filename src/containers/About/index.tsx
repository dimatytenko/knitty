import { AboutComponent } from '../../components/About';

const data = [
  {
    id: '1',
    title: 'Alena Stotska',
    subtitle: `Meet our visionary founder, a passionate advocate for preserving Ukrainian craftsmanship and traditions. With a deep love for knitting, brings a unique blend of creativity and cultural pride to our collection of Ukrainian knitwear, creating a bridge between heritage and contemporary fashion.`,
  },
  {
    id: '2',
    title: 'Alena Stotska',
    subtitle: `Meet our visionary founder, a passionate advocate for preserving Ukrainian craftsmanship and traditions. With a deep love for knitting, brings a unique blend of creativity and cultural pride to our collection of Ukrainian knitwear, creating a bridge between heritage and contemporary fashion.`,
  },
  {
    id: '3',
    title: 'Alena Stotska',
    subtitle: `Meet our visionary founder, a passionate advocate for preserving Ukrainian craftsmanship and traditions. With a deep love for knitting, brings a unique blend of creativity and cultural pride to our collection of Ukrainian knitwear, creating a bridge between heritage and contemporary fashion.`,
  },
];

export const About = () => {
  return <AboutComponent data={data} />;
};

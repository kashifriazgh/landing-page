import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeadWrapper from '../Components/HeadWrapper';
import Slides from '../Components/Slides';
import ValuesSection from '../Components/ValuesSection';
import GetStarted from '../Components/GetStarted';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Health Protector | Health Services</title>
      </Head>
      <HeadWrapper />
      <Slides />
      <br />
      <br />
      <br />
      <ValuesSection />
      <br />
      <br />
      <br />
      <GetStarted />
      <br />
      <br />
      <br />
      <AboutUs />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

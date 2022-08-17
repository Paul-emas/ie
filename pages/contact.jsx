import Head from 'next/head';
import Header from '../components/homepage/Header';
import ContactForm from '../components/forms/ContactForm';
import ContactCard from '../components/ContactCard';
import ContactBanner from '../components/homepage/ContactBanner';
import Footer from '../components/homepage/Footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Instant Energy - Buy Electricity Units in Nigeria</title>
        <meta name="description" content="Instant Energy - Buy Electrical Units in Nigeria" />
        <meta property="og:description" content="Instant Energy - Buy Electrical Units in Nigeria" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div className="justify-between lg:flex">
          <div className="pt-28 lg:w-1/2 lg:pt-60">
            <div className="max-w-md text-center text-2xl font-bold leading-tight text-gray-800 lg:text-left lg:text-5xl">
              Get in touch, {`we'll`} love to hear from you
            </div>
            <div className="mt-8">
              <ContactCard up />
            </div>
          </div>
          <div className="flex justify-end lg:w-1/2 lg:max-w-full lg:pb-16 lg:pt-36">
            <ContactForm />
          </div>
        </div>
      </Header>
      <ContactBanner />
      <Footer />
    </div>
  );
}

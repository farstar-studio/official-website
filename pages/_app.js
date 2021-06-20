import { useEffect } from 'react';
import { useRouter } from 'next/router'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import TagManager from 'react-gtm-module';
import NextNprogress from 'nextjs-progressbar';
import AOS from "aos";

import '../styles/globals.css'
import 'aos/dist/aos.css';


const languages = {
  en: require('../content/locales/en.json'),
  zh: require('../content/locales/zh.json')
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MRRTLKB' });

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50
    });
  }, []);
  
  const messages = languages[shortLocale];

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp

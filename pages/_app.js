import Router from 'next/router';
import NProgress from 'nprogress';
import smoothscroll from 'smoothscroll-polyfill';
import { ApolloProvider } from '@apollo/client';
import { ScrollProvider } from '../lib/useScroll';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/nprogress.css';
import '../styles/fonts.css';

import withData from '../lib/withData';

import LayoutWrapper from '../components/layouts/LayoutWrapper';
import { PaginationStateProvider } from '../context/paginationState';
import { CartStateProvider } from '../context/cartState';

// smoothscroll polyfill - safari
if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

Router.events.on('routeChangeStart', () =>
  NProgress.start()
);
Router.events.on('routeChangeComplete', () =>
  NProgress.done()
);
Router.events.on('routeChangeError', () =>
  NProgress.done()
);

function MyApp({ Component, pageProps, apollo }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <ApolloProvider client={apollo}>
      <ParallaxProvider>
        <ScrollProvider>
          <CartStateProvider>
            <PaginationStateProvider>
              <LayoutWrapper {...pageProps}>
                <Component {...pageProps} />
              </LayoutWrapper>
            </PaginationStateProvider>
          </CartStateProvider>
        </ScrollProvider>
      </ParallaxProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({
  Component,
  ctx,
}) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);

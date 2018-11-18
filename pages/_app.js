import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
const { Footer } = Layout;
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./sw.js")
        .then(result => console.log("ServiceWorker Registered : ", result))
        .catch(error => console.log("Can't Register ServiceWorker :", error));
    }
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withNProgress()(withApollo(MyApp));

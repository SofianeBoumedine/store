import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
const { Footer } = Layout;
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import convertDataURIToBinary from "../lib/base64";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("./sw.js")
        .then(swReg => {
          swReg.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                  swReg.pushManager
                    .subscribe({
                      userVisibleOnly: true,
                      applicationServerKey: convertDataURIToBinary(
                        "BAwL3KsjQMgUhhFiDukvs5rvrVu5F-CGuh4aTkfXXHa_lYV0C6mtWPY9KlxefVJyYO4eYbyJMKe1VYZcfGt07E4"
                      )
                    })
                    .then(pushSubscriptionObject => {
                      console.log(pushSubscriptionObject);
                    });
                }
              });
            } else {
              console.log(subscription);
            }
          });
        })
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

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

import HomepageHeader from '@site/src/components/HomePageHeader/index.jsx'
import Organizations from '@site/src/components/Organizations'
import Team from '@site/src/components/Team'
import QuickStart from '@site/src/components/QuickStart'
import Heading from '@theme/Heading'

import plugins from '@site/static/generated/plugins.json'
import styles from '@site/src/css/index.module.css'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <HomepageHeader />

      <main>
        <section className="section">
          <div className="container">
            <Heading as={'h1'}>Why</Heading>
            <p>
              An efficient server implies a lower cost of the infrastructure, better responsiveness under load, and
              happy users. How can you efficiently handle the resources of your server, knowing that you are serving the
              highest number of requests possible, without sacrificing security validations and handy development?
            </p>
            <p>
              Enter Fastify. Fastify is a web framework highly focused on providing the best developer experience with
              the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we
              know, it is one of the fastest web frameworks in town.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Heading as={'h1'}>Who is using Fastify?</Heading>
            <p>
              Fastify is proudly powering a large ecosystem of organizations and products out there with almost{' '}
              <Link to={'https://npm-stat.com/charts.html?package=fastify'}>10 million downloads per month</Link>.{' '}
              <Link to="/organizations">Checkout our affiliate companies.</Link>
            </p>
          </div>

          <div className="container">
            <div className="alternate-sponsors h-full">
              <Heading as={'h3'}>Sponsors</Heading>
              <p>
                Would you like to sponsor Fastify financially? Support us on{' '}
                <Link to="https://github.com/sponsors/fastify">GitHub</Link> or{' '}
                <Link to="https://opencollective.com/fastify">Open Collective</Link>.
              </p>
              <Organizations displayType={'sponsor'} />
            </div>
          </div>
        </section>

        <section className="section alternate">
          <div className="container">
            <Heading as={'h1'}>Core features</Heading>
            <p>These are the main features and principles on which Fastify has been built:</p>
            <ul>
              <li>
                <strong>Highly performant:</strong> as far as we know, Fastify is one of the fastest web frameworks in
                town, depending on the code complexity we can serve up to 30 thousand requests per second.
              </li>
              <li>
                <strong>Extensible:</strong> Fastify is fully extensible via its hooks, plugins, and decorators.
              </li>
              <li>
                <strong>Schema-based:</strong> even if it is not mandatory we recommend using{' '}
                <Link to="http://json-schema.org/">JSON Schema</Link> to validate your routes and serialize your
                outputs. Internally Fastify compiles the schema in a highly performant function.
              </li>
              <li>
                <strong>Logging:</strong> logs are extremely important but are costly; we chose the best logger to
                almost remove this cost, <Link to="https://github.com/pinojs/pino">Pino</Link>!
              </li>
              <li>
                <strong>Developer friendly:</strong> the framework is built to be very expressive and help developers in
                their daily use, without sacrificing performance and security.
              </li>
              <li>
                <strong>TypeScript ready:</strong> we work hard to maintain a{' '}
                <Link to="https://www.typescriptlang.org/">TypeScript</Link> type declaration file so we can support the
                growing TypeScript community.
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <QuickStart />
          </div>
        </section>

        <section className="section alternate">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Heading as={'h1'}>A fast web framework</Heading>
                <p>
                  Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be{' '}
                  <strong>as fast as possible</strong>. Have a look at our{' '}
                  <Link to="/benchmarks">benchmarks section</Link> to compare Fastify performance to other common web
                  frameworks.
                </p>
                <p>
                  <Link to="/benchmarks" className="button button--lg button--primary">
                    Check out our benchmarks
                  </Link>
                </p>
              </div>
              <div className="col col--6">
                <Heading as={'h1'}>Ecosystem</Heading>
                <p>
                  Fastify has an ever-growing ecosystem of plugins. There is probably already a plugin for your favorite
                  database or template language. Have a look at the <Link to="/ecosystem">Ecosystem page</Link> to
                  navigate through the currently available plugins. Can&#39;t you find the plugin you are looking for?
                  No problem, <Link to="/docs/latest/Reference/Plugins">it&#39;s very easy to write one</Link>!
                </p>
                <p>
                  <Link to="/ecosystem" className="button button--lg button--primary">
                    Explore {plugins.corePlugins.length + plugins.communityPlugins.length} plugins
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Heading as={'h1'}>Meet The Team</Heading>
            <p>
              <i>In alphabetical order</i>
            </p>
            <Team />
          </div>
        </section>

        <section className="section alternate">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Heading as={'h1'}>Acknowledgments</Heading>
                <p>
                  This project is kindly <strong>sponsored by</strong>:
                </p>
                <ul>
                  <li>
                    <Link to="https://nearform.com/">NearForm</Link>
                  </li>
                  <li>
                    <Link to="https://platformatic.dev/">Platformatic</Link>
                  </li>
                </ul>
                <p>Past Sponsors:</p>
                <ul>
                  <li>
                    <Link to="http://www.letzdoitapp.com/">LetzDoIt</Link>
                  </li>
                  <li>
                    <Link to="https://opensource.microsoft.com/">Microsoft</Link>
                  </li>
                </ul>
                <p>Also thanks to:</p>
                <ul>
                  <li>
                    <Link to="https://github.com/fastify/fastify/graphs/contributors">
                      The <strong>amazing</strong> Fastify community
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col--6">
                <Heading as={'Heading'}>Hosted by</Heading>
                <p>
                  We are an <strong>At Large project</strong> at the{' '}
                  <Link to="https://openjsf.org/">OpenJS Foundation</Link>
                </p>
                <p>
                  <Link to="https://openjsf.org/">
                    <img src={useBaseUrl(`/img/logos/openjsf.svg`)} alt="OpenJS Logo" className={styles.openJsLogo} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <br />
      </main>
    </Layout>
  )
}

import React from 'react';
import HomeStyles from '@/styles/home.module.css';
import { Helmet } from 'react-helmet';
import Footer from '@/layout/footer/footer';
import Navbar from '@/layout/navbar/navbar';
import Components from "@/components";
import Image from "next/image";
import Link from 'next/link';

const Home = () => {
  console.clear();

  const blogs = [
    {
      id: 1,
      img: "/home-news-blog-1.jpg",
      title: "Lush Gardens",
      text: "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem",
      date: "December 16, 2021",
    },
    {
      id: 2,
      img: "/home-news-blog-2.png",
      title: "Exotic Nature",
      text: "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem",
      date: "November 11, 2021",
    },
    {
      id: 3,
      img: "/home-news-blog-3.png",
      title: "It Starts with Soil",
      text: "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem",
      date: "November 3, 2021",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Botanical Garden</title>
        <link rel="icon" href="/logo-white.svg" />
      </Helmet>

      <main>
        <nav>
          <Navbar />
        </nav>

        <Components.Container>
          <header className={HomeStyles["home-header"]}>
            <div className={HomeStyles["home-header-context"]}>
              <h1>
                A beautiful <br /> adventure awaits
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Tincidunt facilisis nunc
              </p>

              <div className={HomeStyles["home-header-buttons"]}>
                <Components.Button>
                  Buy Tickets
                </Components.Button>
                <Components.Button buttonType="secondary">
                  Buy Tickets
                </Components.Button>
              </div>
            </div>

            <Image
              src="/home-header.png"
              width={458.21}
              height={640.19}
              alt="Home Header Image"
            />
          </header>
        </Components.Container>

        <section className={HomeStyles["home-ads"]}>
          <Components.Container>
            <div className={HomeStyles["home-ads-context"]}>
              <Image
                src="/home-ads-plant.png"
                width={534}
                height={354}
                alt="Home Ads Plant"
              />

              <div className={HomeStyles["home-ads-texts"]}>
                <h1>
                  Discover Yourself <br /> With Nature
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc.
                </p>

                <Components.Button
                  buttonType="white"
                  className={HomeStyles["home-ads-button"]}
                >
                  LEARN MORE
                </Components.Button>
              </div>
            </div>

            <Image
              src="/home-ads-seating-area.png"
              width={1040}
              height={409}
              alt="Home Ads Seating Area"
              className={HomeStyles["home-ads-img"]}
            />
          </Components.Container>
        </section>

        <Components.Container>
          <article className={HomeStyles["home-news"]}>
            <h1>
              News & Updates
            </h1>

            <Link href="/" className={HomeStyles["home-news-link"]}>
              View all posts <Components.Icons name="right" />
            </Link>

            <div className={HomeStyles["home-news-div"]}>
              <div className={HomeStyles["home-news-blog"]}>
                <Image
                  src="/home-news-header.png"
                  width={520}
                  height={333}
                  alt="Home News Header"
                />

                <div className={HomeStyles["home-news-blog-texts"]}>
                  <h2 className={HomeStyles["home-news-blog-title"]}>
                    Plants Around Us
                  </h2>

                  <p className={HomeStyles["home-news-blog-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>

                  <span className={HomeStyles["home-news-blog-span"]}>
                    December 23, 2021
                  </span>
                </div>
              </div>

              <div>
                {blogs.length ? (
                  blogs.map((blog) => (
                    <div key={blog.id}>
                      <div className={HomeStyles["home-news-blog-card"]}>
                        <Image
                          src={blog.img}
                          width={236}
                          height={151}
                          alt={blog.title}
                        />

                        <div className={HomeStyles["home-news-blog-texts"]}>
                          <h2 className={HomeStyles["home-news-blog-title"]}>
                            {blog.title}
                          </h2>

                          <p className={HomeStyles["home-news-blog-text"]}>
                            {blog.text}
                          </p>

                          <span className={HomeStyles["home-news-blog-span"]}>
                            {blog.date}
                          </span>
                        </div>
                      </div>
                      <hr className={HomeStyles["home-news-blog-card-line"]} />
                    </div>
                  ))
                ) : (
                  <span>Loading ...</span>
                )}
              </div>
            </div>
          </article>
        </Components.Container>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Home;

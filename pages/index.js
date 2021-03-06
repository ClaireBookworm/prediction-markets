import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { firestore } from '../.env/firebaseConfig'

import { getSimplifiedRoomData } from '../functions/fetchData'

export default function Home({ data }) {
  const [rooms, setRooms] = useState([]);

  useEffect(()=>{
    firestore.collection("Games")
    .get()
    .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            console.log("id", doc.id)
            console.log(doc.get("Question"))
            // doc.data() is never undefined for query doc snapshots
            data.push({
                roomID: doc.id,
                question: doc.get("Question")
            })
        });
        setRooms(data);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    console.log("yeeted")
  }, [rooms])

  //allRoomsData.forEach(i => console.log(i));
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Poppins:wght@500&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>

          {data.map((i) => (
            <Link
              href={{
                pathname: '/[roomID]',
                query: {
                  roomID: i.roomID,
                },
              }}
              passHref
              key={i.roomID}>
              <a
                className={styles.card}
              >
                <h2>{i.roomID} &rarr;</h2>
                <p>{i.question}</p>
              </a>
            </Link>
          ))}

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const collectionRef = firestore.collection("Games");
  const snapshot = await collectionRef.get();
  console.log("docs", await snapshot.docs);

  const data=[];
  snapshot.forEach((doc) => {
      console.log("id", doc.id)
      console.log(doc.get("Question"))
      // doc.data() is never undefined for query doc snapshots
      data.push({
          roomID: doc.id,
          question: doc.get("Question")
      })
  });

  //TODO: use snapshot listener + check cache to prevent 1k reads per reload xd

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
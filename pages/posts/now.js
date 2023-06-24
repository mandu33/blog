import Link from 'next/link'
import Head from 'next/head'
import styles from '/home/mandu/blog/nextjs-blog/styles/Home.module.css';
import Image from 'next/image'
export default function NowPost() {
    return (
        <div>
            <Head>
                <title>nowadays</title>
            </Head>
            <div>
                <p>we are living in this moment</p>
            </div>
            <Image src="/home/mandu/blog/nextjs-blog/public/favicon.ico" height={144}  width={144} alt="test">
            </Image>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}
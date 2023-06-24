import Link from 'next/link'
import Head from 'next/head'
import styles from '/home/mandu/blog/nextjs-blog/styles/Home.module.css';

//更换head
export default function FuturePost() {
    return (
        <div>
            <Head>
                <title>future</title>
            </Head>
            <div>
                <p>expecting for some unknown things</p>
            </div>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}
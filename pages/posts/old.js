// posts/old
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '/home/mandu/blog/nextjs-blog/styles/Home.module.css';
import Layout from '../../components/layout';
export default function OldPost() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>old time</title>
                </Head>
                <div>
                    <p>those good old days</p>
                </div>
                <img src="https://1.bp.blogspot.com/-66Z-Tx6Fxgc/V9aQSlCBrPI/AAAAAAACXXU/I_wRBItVNwkHLDYJviOxVF5Q8d59bBMXgCLcB/s1600/things-good-old-days-2.jpeg" width="300" height="200" />
                <img src="https://2.bp.blogspot.com/-8V7TSBBwNds/V9aQTjKxX3I/AAAAAAACXXs/2_VpDyMEwz4xP6TSw54F26GzBZR3Pa0AwCLcB/s1600/things-good-old-days-3.jpg" width="300" height="200" />
                <img src="https://1.bp.blogspot.com/-b1zefrcLkRQ/V9aQQivK7cI/AAAAAAACXW0/5W-gjcaavVE70GqY7-Fr7yg-yojZ5zRPwCLcB/s1600/things-good-old-days-10.jpg" width="300" height="200" />
                <img src="https://3.bp.blogspot.com/-4Y82943_bxg/V9aQRY-610I/AAAAAAACXXA/Lrzdcihmb7ovlowUypV4PkRUYwo053EegCLcB/s1600/things-good-old-days-13.jpg" width="300" height="200" />
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </div>
        </Layout>
    );
}
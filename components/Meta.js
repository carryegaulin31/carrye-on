import Head from "next/dist/next-server/lib/head";

const Meta = ({ title, keywords, decription }) => {
    return (
        <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
           <meta name='description' content={description} />
           <meta charSet='utf-8' />
           <link rel='icon' href='/favicon.ico' />
           <title>{title}</title>
        </Head>
    );
}

Meta.defaultProps = {
title: 'Carrye On',
keywords: 'web development, programming',
description: 'This is my blog Carrye On!'}

export default Meta;
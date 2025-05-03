
import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';

builder.init('789e97c21cdc440d8ab6b66b89908059');

export async function getStaticProps(params: any) {
    /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
    const page = await builder
        .get('page', {
            userAttributes: {
                urlPath: '/' + (params?.page?.join('/') || ''),
            },
        })
        .toPromise();
    return {
        props: {
            page: page || null,
        },
        revalidate: 5,
    };
}

export default function HomePage({ page }: any) {
    const isPreviewing = useIsPreviewing();

    if (!page && !isPreviewing) {
        return <DefaultErrorPage statusCode={404} />;
    }
    return (
        <>
            <h2>Builder io demo</h2>
            <BuilderComponent model='page' content={page} />
        </>
    );
}
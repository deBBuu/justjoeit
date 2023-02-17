import Head from 'next/head'
import {Box} from "@mui/material";
import styled from "@emotion/styled";


export default function Home() {
    return (
        <>
            <Head>
                <title>Just Joe IT: #1 Job Board for tech industry in Europe</title>
                <meta name="description" content="Just Joe IT"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Wrapper>
aa
            </Wrapper>
        </>
    )
}

export const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;

`
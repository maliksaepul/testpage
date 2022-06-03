import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [userAgent, setUserAgent] = useState(null)
const [userAgentData, setUserAgentData] = useState([])
const [vendor, setVendor] = useState(null)
const [appVersion, setAppVersion] = useState(null)
const [isMobile, setIsMobile] = useState(null)


  useEffect(() => {
   
    setUserAgent(navigator.userAgent)
    setUserAgentData(navigator?.userAgentData?.brands)
    setVendor(navigator.vendor)
    setAppVersion(navigator?.userAgentData?.platform)
    setIsMobile(navigator?.userAgentData?.mobile)
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Inspigo Test Browser App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>User Agent : {userAgent}</p>
        {userAgentData && userAgentData.map((val, key) => {
          return <p key={key}>{val.brand + " Version :"+ val.version}</p>
        })}
         <p>UserVendor : {vendor}</p>
         <p>Platform : {appVersion}</p>
         <p>Mobile: {isMobile ? 'true' : 'false'}</p>

      </main>
    </div>
  )
}

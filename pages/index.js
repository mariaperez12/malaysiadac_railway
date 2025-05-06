import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>MDAC</title>
        <meta
          name="description"
          content="Plan Your Trip to Malaysia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="img-container">
          <Image src={"/flag.png"} width={74} height={40} alt="MY flag" />
        </div>
        <div className="backdrop"></div>
        <div className="content">
          <h1>Malaysia Digital Arrival Card</h1>
          <p>The Malaysia Digital Arrival Card is a mandatory requirement for foreign visitors to travel to the country. You can easily get your Malaysia Digital Arrival Card 100% online. On arrival, you simply show your approved Malaysia Digital Arrival Card on your mobile device to gain entry.</p>
          <p>Start Online Application</p>
          <div className="btn-wrapper">
            <a href="https://www.arrival-malaysia.com/application">
              Apply Now
            </a>
          </div>
          <p className="disclaimer">
            Legal Disclaimer: this site is not affiliated with the Government or its sponsors.
          </p>
        </div>
      </main>
    </>
  );
}

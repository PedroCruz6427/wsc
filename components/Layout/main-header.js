import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Main-header.module.css";

function MainHeader() {
  return (
    <header>
      <div>
        <title>WallStreetChan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/wsBull.png" />
      </div>
      <Image
        className={styles.bull}
        src="/wsBull.png"
        alt="bull"
        width="200px"
        height="200px"
        // border-radius="10px"
      />
      <Link href="/">
        <a>
          <h1 className={styles.wscText}>WALLSTREET CHAN</h1>
        </a>
      </Link>
      {/* <QuoteDisplay /> */}
      <hr></hr>
    </header>
  );
}
export default MainHeader;

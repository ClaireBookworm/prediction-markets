import Head from 'next/head'
import Image from 'next/image'
import Row from './BookRow'

export default function Column(props) {
  //props would have:
  // type: Bids | Offers | Trades

  const handlePress = (e) => {
    e.stopPropagation();
    document.querySelectorAll(".table").forEach((i) => {
      i.classList.remove("editable");
      //i.toggleEditMode(false);
    })
    console.log(e)
    let targetRow = e.target
    while (!targetRow.classList.contains("table")) {
      targetRow = targetRow.parentElement;
    }
    targetRow.classList.add("editable");
    console.log(targetRow);
  }

  console.log(props.title.toLowerCase());

  return (
    <div id={props.title} className="table" onClick={(e) => handlePress(e)}>
      <div className="columnTitle">
        {props.title}
        {props.title != "Trades" ?
          (<div className="columnActions">
            <div className="addContracts">
              +
            </div>
            {/*<div className="tradeButton" onClick={handlePress}>
              Trade
  </div>*/}
          </div>) :
          null}
      </div>
      <div className="th">
        {props.title != "Offers" ? (<div className="nameColumn">Bidder</div>) : null}
        {props.title != "Bids" ? (<div className="nameColumn">Seller</div>) : null}
        <div className="numberColumn">Qty.</div>
        <div className="numberColumn">Value</div>
        {props.title != "Trades" ?
          <div className="rowActionEmpty"></div> :
          null}
      </div>
      <div className="rowContainer">
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="bill"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
        <Row
          type={props.title}
          bidder="john"
          seller="john"
          quantity={0}
          value={123}
        />
      </div>
    </div>
  )
}
/*
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        type,
      },
    }
  }*/


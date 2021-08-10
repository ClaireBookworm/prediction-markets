import React, { useEffect, useState } from 'react'; 
import Head from 'next/head'
import Image from 'next/image'

export default function Row(props) {
  //props would have:
  // type: Bids | Offers | Trades
  // bidder: string 
  // seller: string
  // quantity: number
  // value: number
  // probably need users username

  const [editMode, toggleEditMode] = useState(false);
  var editable = false;
/*
  useEffect(()=>{
    console.log("UE", editMode);
  }, [editMode])

  const handlePress = (e) => {
    e.stopPropagation();
    document.querySelectorAll(".tr").forEach((i)=>{
      i.classList.remove("editable");
      //i.toggleEditMode(false);
    })
    console.log(e)
    let targetRow = e.target
    if(!targetRow.classList.contains("tr")) {
      targetRow = targetRow.parentElement;
    }
    toggleEditMode(true);
    console.log(editMode);
    targetRow.classList.add("editable");
    console.log(targetRow);
  }
*/
  return (
    <div className="tr" onClick={/*props.type != "Trades" ? (e) => {handlePress(e)} :*/ null}>
      <div className="nameColumn">{props.bidder || props.seller}</div>
      {props.type == "Trades" ? (<div className="nameColumn">{props.seller}</div>) : null}
      {editMode ? 
      <input className="numberColumn" focused /> :
      <div className="numberColumn">{props.quantity}</div>}
      <div className="numberColumn">{props.value}</div>
      {props.type!= "Trades" ? 
      <div className={"rowAction"}>
        {props.bidder == "bill" || props.seller=="bill" ? 
        "OUT" :
        "Trade"}
      </div> :
      null}
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


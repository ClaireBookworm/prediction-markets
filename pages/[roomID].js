import Head from 'next/head'
import Image from 'next/image'
import Column from '../components/BookColumn'
import { getAllPostIds, getAllRoomIds, getRoomData } from './api/fetchData.js'

    
export default function Room({roomData}) {
  return (
    <div>
    <div className="roomTitle">
      <div>{roomData.question}</div>
      <div className="bigSeparator"></div>
    </div>
    <div className="book">
      <Column title="Bids"/>
      <Column title="Offers"/>
      <Column title="Trades"/>
    </div>
  </div>
  )
}


export async function getStaticPaths() {
  // TODO: Return a list of possible value for id
  const rooms = await getAllRoomIds();
  return {
    paths: rooms, 
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const roomData = await getRoomData(params.roomID);
  return {
    props: {
      roomData
    }
  }
}


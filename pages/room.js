import Head from 'next/head'
import Image from 'next/image'
import Column from '../components/BookColumn'

export default function Home() {
  return (
    <div>
    <div className="roomTitle">
      <div>Question goes Here</div>
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

    
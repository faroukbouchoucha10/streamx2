import Head from 'next/head'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

function movie() {
  return (
	<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
		<Head>
			<title>StreamX</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Header/>

		<Wrapper/>
	
	
	</div>
  )
}

export default movie
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
		<div className='navbar bg-base-100 shadow-sm'>
			<Link href="/" className='btn btn-ghost'>Back</Link>
		</div>
	);
}

export default Navbar
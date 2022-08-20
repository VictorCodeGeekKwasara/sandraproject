import React from 'react';
const Card = () => {
	return (
		<>
			<div className='first'>
				<img className='img1' src='./Sandra/Sandy2.png' alt='' />
				<img className='img2' src='./Sandra/Sandy6.png' alt='' />
				<img className='img3' src='./Sandra/Sandy1.png' alt='' />
			</div>
			<div className='cover'></div>
			<audio className="audio" controls autoplay>
				<source src='./Sandra/Kaskade.mp3' type='audio/mp3'></source>
			</audio>
		</>
	);
}
export default Card;

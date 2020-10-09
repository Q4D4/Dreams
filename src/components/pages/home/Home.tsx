import React from 'react';
import Image from '../../image/Image';
// STYLESHEETS
import styles from '../../../styles/pages/home/home.module.css'
// IMAGE
import WEDDING_IMAGE_HIGH from '../../../media/images/wedding_high.jpg';
import WEDDING_IMAGE_LOW from '../../../media/images/wedding_low.jpg';
import WEDDING_IMAGE_PLACEHOLDER from '../../../media/images/wedding_placeholder.jpg';

function Home(){
	return (
		<div className={styles.container}>
			<header>
				<div className={styles.img_wrapper}>
					<Image
						SRC_High={WEDDING_IMAGE_HIGH}
						SRC_Low={WEDDING_IMAGE_LOW}
						SRC_Placeholder={WEDDING_IMAGE_PLACEHOLDER}
						Alt='Wedding Image'
					/>
					<div className={styles.overlay}>
						<h1>Plan the perfect wedding</h1>
						<p>Varius duis at consectetur lorem donec.</p>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Home;
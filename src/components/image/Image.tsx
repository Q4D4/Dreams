import React, { useState } from 'react';
// STYLESHEETS
import styles from '../../styles/image/image.module.css';

type Props = {
	SRC_High : string,
	SRC_Low : string,
	SRC_Placeholder : string,
	Alt : string,
}

function Image(props : Props){
	const [loaded, setLoaded] = useState<boolean>(false);

	return (
		<div className={styles.wrapper}>
			<img
				className={styles.image}
				draggable='false'
				onLoad={() => setLoaded(true)}
				srcSet={`
					${props.SRC_Low} 768w,
					${props.SRC_High} 769w
				`}
				sizes="(max-width: 768px) 768px, 769px"
				src={props.SRC_High}
				alt={props.Alt}
			/>
			{!loaded &&
			<img
				className={styles.placeholder}
				draggable='false'
				src={props.SRC_Placeholder}
				alt={props.Alt + ' Placeholder'}
			/>
			}
		</div>
	);
}

export default Image;
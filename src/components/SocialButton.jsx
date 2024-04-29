import PropTypes from 'prop-types';
import './SocialButton.css';

export const SocialButton = ({ icons }) => {
	return (
		<div class="icons">
			{icons.map((icon, key) => (
				<div key={key}>
					<a href="https://github.com/jmenesesgalvez" target="_blank">
						<i className={icon}></i>
					</a>
				</div>
			))}
		</div>
	);
};

SocialButton.propTypes = {
	icons: PropTypes.array,
};
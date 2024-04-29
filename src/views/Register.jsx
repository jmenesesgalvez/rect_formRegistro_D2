import PropTypes from 'prop-types';
import { Formulario } from '../components/Form';
import { AlertRegister } from '../components/Alert';
import { SocialButton } from '../components/SocialButton';
import './Register.css';

export const Register = ({ onChange, handleErrors, formErrors }) => {
	const icons = [
		'fa-brands fa-4x fa-github',
		'fa-brands fa-4x fa-linkedin',
		'fa-brands fa-4x fa-facebook',
	];

	return (
		<>
		
		<h1>Crea una Cuenta</h1>
			<div class="icons">
			<SocialButton icons={icons} />
			</div>
			<h5>O usa tu E-mail para registrarte</h5>
			<Formulario
				onChange={onChange}
				handleErrors={handleErrors}
			/>
			<div class="alert">
			<AlertRegister
				formErrors={formErrors}
				color={formErrors === 'Registro exitoso' ? 'success' : 'danger'}
			/>
		
			</div>
			
			
		</>
	);
};

Register.propTypes = {
	onChange: PropTypes.func,
	handleErrors: PropTypes.func,
	formErrors: PropTypes.string,
};

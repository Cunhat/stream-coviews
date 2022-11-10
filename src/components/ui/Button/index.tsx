import { cva } from 'class-variance-authority';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ButtonStyles = cva(
	'inline-flex items-center border font-medium relative text-base px-4 py-2 rounded-md text-white shadow-sm',
	{
		variants: {
			type: {
				primary: 'border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-800',
				secondary: 'border-pink-700 bg-pink-600 hover:bg-pink-700 hover:border-pink-800',
			},
			size: {
				sm: 'text-sm px-2 py-1 font-small',
				md: 'text-base px-4 py-2 font-medium',
				lg: 'text-lg px-6 py-3 font-large',
				full: 'text-base px-4 py-2 font-medium w-full justify-center',
			},
			disabled: {
				true: 'opacity-50 cursor-not-allowed',
			},
		},
	},
);

export const Button: React.FC<{
	text: string;
	type?: 'primary' | 'secondary';
	onClick: () => void;
	icon?: IconProp;
	size?: 'sm' | 'md' | 'lg' | 'full';
	disabled?: boolean;
}> = ({ text, type = 'primary', onClick, icon, size = 'md', disabled = false }) => {
	return (
		<button onClick={onClick} className={ButtonStyles({ type, size, disabled })} disabled={disabled}>
			{icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
			{text}
		</button>
	);
};

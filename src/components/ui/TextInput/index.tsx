import { cva } from 'class-variance-authority';

const TextInputStyles = cva(
	'm-0 rounded-md border border-solid border-primary bg-background py-1 px-2 text-sm text-white transition ease-in-out invalid:border-red-500 hover:border-primary focus:border-primary focus:text-white focus:outline-none',
	{
		variants: {
			invalid: {
				true: 'border-red-500 text-red-500',
			},
		},
	},
);

type TextInputProps = {
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	isValid: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({ onBlur, isValid }) => {
	return <input type="text" onBlur={onBlur} maxLength={50} className={TextInputStyles({ invalid: isValid })}></input>;
};

import { faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import { useState } from 'react';
import { TextInput } from '@ui/TextInput';

const ToggleIconStyles = cva('text-[50px] hover:cursor-pointer', {
	variants: {
		type: {
			red: 'hover:text-red-500',
			violet: 'hover:text-violet-500',
		},
		isToggled: {
			red: 'text-red-500',
			violet: 'text-violet-500',
			null: '',
		},
	},
});

export type DataElement = 'mainStreamProvider' | 'mainStreamUrl' | 'secondaryStreamProvider' | 'secondaryStreamUrl';

export const BuildCoview: React.FC<{
	title: string;
	onClick: (provider: string, type: DataElement) => void;
	type: 'main' | 'secondary';
	invalidUrl: boolean;
}> = ({ title, onClick, type, invalidUrl }) => {
	const [isProviderSelected, setIsProviderSelected] = useState<boolean>(false);
	const [selectedProvider, setSelectedProvider] = useState<'youtube' | 'twitch' | ''>('');

	const onProviderClick = (provider: string | 'youtube' | 'twitch', type: DataElement, isInput = false) => {
		setIsProviderSelected(true);
		if (!isInput) {
			setSelectedProvider(provider as typeof selectedProvider);
		}
		onClick(provider, type);
	};

	return (
		<div className="flex flex-col gap-5">
			<h2 className="text-xl font-bold text-white text-center">{title}</h2>
			<div className="flex justify-center gap-5">
				<FontAwesomeIcon
					id={`${type}YoutubeStreamProvider`}
					icon={faYoutube}
					onClick={() => onProviderClick('youtube', `${type}StreamProvider`)}
					className={ToggleIconStyles({
						type: 'red',
						isToggled: selectedProvider === 'youtube' ? 'red' : null,
					})}
				/>
				<FontAwesomeIcon
					icon={faTwitch}
					id={`${type}TwitchStreamProvider`}
					onClick={() => onProviderClick('twitch', `${type}StreamProvider`)}
					className={ToggleIconStyles({
						type: 'violet',
						isToggled: selectedProvider === 'twitch' ? 'violet' : null,
					})}
				/>
			</div>
			{isProviderSelected && (
				<div className="flex flex-col gap-5">
					<h2 className="text-xl font-bold text-white">Insert stream url</h2>
					<TextInput
						id={`${type}StreamProviderInput`}
						onBlur={(e) => onProviderClick(e.target.value, `${type}StreamUrl`, true)}
						isValid={invalidUrl}
					/>
				</div>
			)}
		</div>
	);
};

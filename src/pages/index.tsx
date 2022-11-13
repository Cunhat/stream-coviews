import { useState, useEffect } from 'react';
import { type NextPage } from 'next';
import { Button } from '@ui/Button';

import Link from 'next/link';
import { DataElement, BuildCoview } from '@/components/BuildCoview';
import { checkIfIsValidUrl, replaceUrl } from '@/utils';

type Data = {
	mainStreamProvider: string;
	mainStreamUrl: string;
	secondaryStreamProvider: string;
	secondaryStreamUrl: string;
};

const Home: NextPage = () => {
	const [isCoView, setIsCoView] = useState<boolean>(true);
	const [data, setData] = useState<Data>({
		mainStreamProvider: '',
		mainStreamUrl: '',
		secondaryStreamProvider: '',
		secondaryStreamUrl: '',
	});
	const [isInvalidMainUrl, setIsInvalidMainUrl] = useState<boolean>(false);
	const [isInvalidSecondaryUrl, setIsInvalidSecondaryUrl] = useState<boolean>(false);

	const chooseStreamHandler = (provider: string, type: DataElement) => {
		const newData = { ...data };

		if (type === 'mainStreamUrl' && !checkIfIsValidUrl(provider)) {
			setIsInvalidMainUrl(true);
		} else if (type === 'mainStreamUrl') {
			setIsInvalidMainUrl(false);
		}

		if (type === 'secondaryStreamUrl' && !checkIfIsValidUrl(provider)) {
			setIsInvalidSecondaryUrl(true);
		} else if (type === 'secondaryStreamUrl') {
			setIsInvalidSecondaryUrl(false);
		}

		newData[type] = provider;
		setData(newData);
	};

	const checkIfCanGenerate = () => {
		console.log(
			data.mainStreamProvider !== '' &&
				data.mainStreamUrl !== '' &&
				data.secondaryStreamProvider !== '' &&
				data.secondaryStreamUrl !== '' &&
				!isInvalidMainUrl &&
				!isInvalidSecondaryUrl,
		);
		return (
			data.mainStreamProvider !== '' &&
			data.mainStreamUrl !== '' &&
			data.secondaryStreamProvider !== '' &&
			data.secondaryStreamUrl !== '' &&
			!isInvalidMainUrl &&
			!isInvalidSecondaryUrl
		);
	};

	const generateStream = () => {
		if (!checkIfCanGenerate()) return '/';

		let finalData = { ...data };

		finalData.mainStreamUrl = replaceUrl(finalData.mainStreamUrl, finalData.mainStreamProvider);
		finalData.secondaryStreamUrl = replaceUrl(finalData.secondaryStreamUrl, finalData.secondaryStreamProvider);

		return `/coView?mainStream=${finalData.mainStreamUrl}&mainProvider=${finalData.mainStreamProvider}&secondaryStream=${finalData.secondaryStreamUrl}&secondaryProvider=${finalData.secondaryStreamProvider}`;
	};

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-20 bg-background">
			<h1 className="text-4xl font-bold text-primary">Welcome to your multi-stream platform!</h1>
			{!isCoView ? (
				<div className="flex w-[200px] flex-col gap-5">
					<Button text="Co-view stream" type="primary" onClick={() => setIsCoView(true)} size="full" />
					<Button text="Multi-stream" type="secondary" onClick={() => {}} disabled size="full" />
				</div>
			) : (
				<div className="flex flex-col gap-10">
					<BuildCoview
						invalidUrl={isInvalidMainUrl}
						title="Choose your main stream provider"
						onClick={chooseStreamHandler}
						type="main"
					/>
					<BuildCoview
						invalidUrl={isInvalidSecondaryUrl}
						title="Choose your secondary stream provider"
						onClick={chooseStreamHandler}
						type="secondary"
					/>
				</div>
			)}
			{checkIfCanGenerate() && (
				<Link href={generateStream()}>
					<Button text="Go to stream" type="primary" onClick={() => {}} size="lg" />
				</Link>
			)}
		</div>
	);
};

export default Home;

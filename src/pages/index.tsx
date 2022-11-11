import { useState, useEffect } from 'react';
import { TwitchChat } from '@/components/Twitch/TwitchChat';
import { type NextPage } from 'next';
import { MemoizedDraggableStream } from '@/components/DraggableStream/DraggableStream';
import { Button } from '@ui/Button';
import { faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useRouter } from 'next/router';
import { Stream } from '@/components/StreamBuilder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { DataElement, BuildCoview } from '@/components/BuildCoview';

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

	const chooseStreamHandler = (provider: string, type: DataElement) => {
		const newData = { ...data };
		newData[type] = provider;
		setData(newData);
	};

	const checkIfCanGenerate = () => {
		return (
			data.mainStreamProvider !== '' &&
			data.mainStreamUrl !== '' &&
			data.secondaryStreamProvider !== '' &&
			data.secondaryStreamUrl !== ''
		);
	};

	const replaceUrl = (url: string, type: string) => {
		if (type === 'twitch') {
			return url.replace('https://www.twitch.tv/', '');
		} else {
			return url.replace('https://www.youtube.com/watch?v=', '');
		}
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
					<BuildCoview title="Choose your main stream provider" onClick={chooseStreamHandler} type="main" />
					<BuildCoview title="Choose your secondary stream provider" onClick={chooseStreamHandler} type="secondary" />
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

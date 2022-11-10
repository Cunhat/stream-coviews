import { useState } from 'react';
import { TwitchChat } from '@/components/Twitch/TwitchChat';
import { type NextPage } from 'next';
import { MemoizedDraggableStream } from '@/components/DraggableStream/DraggableStream';
import { Button } from '@ui/Button';
import { faArrowRightFromBracket, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useRouter } from 'next/router';
import { Stream } from '@/components/StreamBuilder';

const CoView: NextPage = () => {
	const router = useRouter();
	const [hideChat, setHideChat] = useState<boolean>(false);
	const fullscreen = useFullScreenHandle();

	if (router?.query?.mainStream === undefined && router?.query?.chatStream === undefined) {
		return (
			<div className="flex h-screen items-center justify-center bg-background">
				<h1 className="text-lg text-white">You have to choose streams</h1>
			</div>
		);
	}

	return (
		<div className="flex h-screen bg-background">
			<div className="flex h-full flex-1 flex-col p-5">
				<FullScreen className="flex-1" handle={fullscreen}>
					<MemoizedDraggableStream
						streamName={router.query.secondaryStream as string}
						providerName={router.query.secondaryProvider as string}
					/>
					<Stream
						id="mainStream"
						streamName={router.query.mainStream as string}
						providerName={router.query.mainProvider as string}
					/>
				</FullScreen>
				<div className="ml-auto flex h-20 items-center gap-4">
					<Button
						onClick={() => setHideChat(!hideChat)}
						type="primary"
						text={!hideChat ? 'Hide chat' : 'Show chat'}
						icon={faArrowRightFromBracket}
					/>
					<Button
						type="secondary"
						text="Fullscreen"
						onClick={fullscreen.active ? fullscreen.exit : fullscreen.enter}
						icon={faExpand}
					/>
				</div>
			</div>
			{!hideChat && (
				<div className="h-full w-[350px]">
					<TwitchChat channel={router.query.secondaryStream as string} />
				</div>
			)}
		</div>
	);
};

export default CoView;

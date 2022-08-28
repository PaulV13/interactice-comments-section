import { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import CommentList from './components/CommentList';
import FormComment from './components/FormComment';

function App() {
	const [user] = useState({
		username: 'juliusomo',
		profile: 'image-juliusomo.png',
	});
	const [comments, setComments] = useState([
		{
			id: 1,
			score: 12,
			text: "Impressive! Though it seems the drag feature could by improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			username: 'amyrobson',
			profile: 'image-amyrobson.png',
			date: new Date('07/19/2022'),
			replies: [],
		},
		{
			id: 2,
			score: 5,
			text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
			username: 'maxblagun',
			profile: 'image-maxblagun.png',
			date: new Date('08/05/2022'),
			replies: [
				{
					id: 3,
					text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
					date: new Date('08/12/2022'),
					score: 4,
					replyingTo: 'maxblagun',
					username: 'ramsesmiron',
					profile: 'image-ramsesmiron.png',
				},
				{
					id: 4,
					text: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
					date: new Date('08/17/2022'),
					score: 2,
					replyingTo: 'ramsesmiron',
					username: 'juliusomo',
					profile: 'image-juliusomo.png',
				},
			],
		},
	]);
	const [isReply, setIsReply] = useState(false);
	const [commentIdSelected, setCommentIdSelected] = useState(0);

	return (
		<Box bg='gray.100' minHeight='100vh'>
			<Container maxW='container.md' py={8}>
				<CommentList
					comments={comments}
					setComments={setComments}
					user={user}
					setIsReply={setIsReply}
					isReply={isReply}
					commentIdSelected={commentIdSelected}
					setCommentIdSelected={setCommentIdSelected}
				/>
				<FormComment
					user={user}
					setComments={setComments}
					comments={comments}
				/>
			</Container>
		</Box>
	);
}

export default App;

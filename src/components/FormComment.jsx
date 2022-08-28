import { useState } from 'react';
import { Avatar, Box, Button, Textarea } from '@chakra-ui/react';

const FormComment = ({ user, setComments, comments, isReply }) => {
	const [commentText, setCommentText] = useState('');
	const [ultimoId, setUltimoId] = useState(4);
	const handleChangeText = e => {
		setCommentText(e.target.value);
	};

	const handleSubmitText = () => {
		const newComment = {
			id: ultimoId + 1,
			score: 0,
			text: commentText,
			username: user.username,
			profile: user.profile,
			date: new Date(Date.now()),
			replies: [],
		};
		const c = comments.concat(newComment);
		setComments(c);
		setCommentText('');
		setUltimoId(ultimoId + 1);
	};

	const handleSubmitReplyText = () => {};

	return (
		<Box
			display='flex'
			minHeight='120px'
			bg='white'
			borderWidth='1px'
			borderRadius='lg'
			p='4'
		>
			<Box w='100%'>
				<Box
					display='flex'
					flexDirection='row'
					justifyContent='space-between'
					h='100%'
				>
					<Avatar
						size='sm'
						name={user.username}
						src={user.profile}
						resize='none'
					/>
					<Textarea
						placeholder='Add a comment...'
						mx={4}
						h='100%'
						value={commentText}
						onChange={e => handleChangeText(e)}
					/>
					{isReply ? (
						<Button
							background='blue.500'
							color='white'
							variatn='solid'
							_hover={{ opacity: 0.5 }}
							onClick={() => handleSubmitReplyText()}
						>
							REPLY
						</Button>
					) : (
						<Button
							background='blue.500'
							color='white'
							variatn='solid'
							_hover={{ opacity: 0.5 }}
							onClick={() => handleSubmitText()}
						>
							SEND
						</Button>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default FormComment;

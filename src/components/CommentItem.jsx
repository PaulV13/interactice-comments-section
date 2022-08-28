import { useState, useRef } from 'react';
import FormComment from '../components/FormComment';
import { ArrowBackIcon, DeleteIcon } from '@chakra-ui/icons';
import { Avatar, Badge, Box, Button, Flex, Textarea } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import CommentButton from './CommentButton';

const CommentItem = ({
	commentId,
	c,
	user,
	comments,
	setComments,
	isReply,
	setIsReply,
	commentIdSelected,
	setCommentIdSelected,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const focusDiv = useRef();

	const timeToComment = date => {
		const d = new Date(date);

		const result = formatDistance(d, new Date(Date.now())) + ' ago';
		return result;
	};

	const addScore = id => {
		const comment = comments.find(comment => comment.id === commentId);
		if (comment.id === id) {
			comment.score = comment.score + 1;
		} else {
			const replies = comment.replies;
			const reply = replies.find(reply => reply.id === id);
			reply.score = reply.score + 1;
		}
		const c = comments.map(comment => comment);
		setComments(c);
	};

	const minusScore = id => {
		const comment = comments.find(comment => comment.id === commentId);

		if (comment.id === id) {
			comment.score = comment.score - 1;
		} else {
			const replies = comment.replies;
			const reply = replies.find(reply => reply.id === id);
			reply.score = reply.score - 1;
		}
		const c = comments.map(comment => comment);
		setComments(c);
	};

	const handleDelete = (commentId, idReply) => {
		if (commentId === idReply) {
			const commentsFilltered = comments.filter(
				comment => comment.id !== commentId
			);
			setComments(commentsFilltered);
		} else {
			const comment = comments.find(comment => comment.id === commentId);
			const r = comment.replies.filter(reply => reply.id !== idReply);
			comment.replies = r;
			const c = comments.map(reply => reply);
			setComments(c);
		}
	};

	const handleEdit = () => {
		setIsEdit(true);
		if (focusDiv.current) focusDiv.current.focus();
	};

	const handleUpdate = () => {
		setIsEdit(false);
	};

	const handleReply = id => {
		setCommentIdSelected(id);
		setIsReply(true);
	};

	return (
		<>
			<Box
				display='flex'
				minHeight='140px'
				bg='white'
				borderWidth='1px'
				borderRadius='lg'
				p='4'
				justifyContent='space-between'
			>
				<CommentButton addScore={addScore} minusScore={minusScore} c={c} />
				<Flex direction='column' width='100%' paddingLeft={4}>
					<Box
						display='flex'
						flexDirection='row'
						justifyContent='space-between'
					>
						<Box display='flex' flexDirection='row' alignItems='center'>
							<Avatar size='sm' name={c.username} src={c.profile} />
							{c.username !== user.username ? (
								<Box
									color='blue.900'
									fontWeight='bold'
									letterSpacing='wide'
									fontSize='14px'
									ml='2'
								>
									{c.username}
								</Box>
							) : (
								<>
									<Box
										color='blue.900'
										fontWeight='bold'
										letterSpacing='wide'
										fontSize='14px'
										ml='2'
									>
										{c.username}
									</Box>
									<Badge
										borderRadius='2px'
										px='2'
										bg='blue.500'
										textTransform='lowercase'
										color='white'
										ml='2'
										fontSize='11px'
									>
										you
									</Badge>
								</>
							)}
							<Box
								color='gray.900'
								fontWeight='semibold'
								letterSpacing='wide'
								fontSize='xs'
								ml='2'
							>
								{timeToComment(c.date)}
							</Box>
						</Box>
						<Box align='right'>
							{c.username !== user.username ? (
								<Button
									leftIcon={<ArrowBackIcon />}
									color='blue.500'
									variant='ghost'
									_hover={{ opacity: 0.5 }}
									onClick={() => handleReply(c.id)}
								>
									Reply
								</Button>
							) : (
								<Box>
									<Button
										leftIcon={<DeleteIcon />}
										color='red.500'
										variant='ghost'
										_hover={{ opacity: 0.5 }}
										onClick={() => handleDelete(commentId, c.id)}
									>
										Delete
									</Button>
									<Button
										leftIcon={<DeleteIcon />}
										color='blue.500'
										variant='ghost'
										_hover={{ opacity: 0.5 }}
										onClick={() => handleEdit()}
									>
										Edit
									</Button>
								</Box>
							)}
						</Box>
					</Box>
					<Textarea
						defaultValue={c.text}
						isReadOnly={!isEdit}
						resize='none'
						border='none'
						minHeight='120px'
						padding={0}
						ref={focusDiv}
					/>
					{isEdit && (
						<Box display='flex' justifyContent='end'>
							<Button
								background='blue.500'
								color='white'
								onClick={() => handleUpdate()}
							>
								UPDATE
							</Button>
						</Box>
					)}
				</Flex>
			</Box>

			{isReply && commentIdSelected === c.id && (
				<>
					<Box h='12px'></Box>
					<FormComment
						user={user}
						setComments={setComments}
						comments={comments}
						isReply={isReply}
					/>
				</>
			)}
		</>
	);
};

export default CommentItem;

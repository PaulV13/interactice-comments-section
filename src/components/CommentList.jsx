import { Box, Divider } from '@chakra-ui/react';

import CommentItem from './CommentItem';

const CommentList = ({
	comments,
	setComments,
	user,
	isReply,
	setIsReply,
	commentIdSelected,
	setCommentIdSelected,
}) => {
	return (
		<Box display='flex' flexDirection='column' w='100%'>
			{comments.map(c => {
				return (
					<Box key={c.id}>
						<Box mt='24px'>
							<CommentItem
								commentId={c.id}
								c={c}
								user={user}
								setComments={setComments}
								comments={comments}
								setIsReply={setIsReply}
								isReply={isReply}
								commentIdSelected={commentIdSelected}
								setCommentIdSelected={setCommentIdSelected}
							/>
							{c.replies.length > 0 && (
								<Box my='24px' display='flex'>
									<Box px='30px'>
										<Divider orientation='vertical' borderColor='gray.500' />
									</Box>
									<Box width='100%'>
										{c.replies.map((reply, index) => {
											return (
												<Box key={reply.id} paddingBottom='12px'>
													<CommentItem
														commentId={c.id}
														c={reply}
														user={user}
														setComments={setComments}
														comments={comments}
														setIsReply={setIsReply}
														isReply={isReply}
														commentIdSelected={commentIdSelected}
														setCommentIdSelected={setCommentIdSelected}
													/>
												</Box>
											);
										})}
									</Box>
								</Box>
							)}
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default CommentList;

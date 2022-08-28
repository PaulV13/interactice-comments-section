import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

const CommentButton = ({ c, addScore, minusScore }) => {
	const handleAdd = id => {
		addScore(id);
	};

	const handleMinus = id => {
		minusScore(id);
	};

	return (
		<Flex
			flexDirection='column'
			width='38px'
			bg='gray.100'
			p={1}
			height='75px'
			borderRadius={8}
			alignItems='center'
		>
			<Box color='blue.100' as='button' _hover={{ color: 'blue.500' }}>
				<AddIcon w={2} h={2} onClick={() => handleAdd(c.id)} />
			</Box>
			<Text color='blue.500' fontWeight='bold' fontSize='14px'>
				{c.score}
			</Text>
			<Box color='blue.100' as='button' _hover={{ color: 'blue.500' }}>
				<MinusIcon w={2} h={2} onClick={() => handleMinus(c.id)} />
			</Box>
		</Flex>
	);
};

export default CommentButton;

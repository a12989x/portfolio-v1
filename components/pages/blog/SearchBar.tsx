import { Input, InputGroup, useColorModeValue } from '@chakra-ui/react';
import React, { ChangeEventHandler } from 'react';

const SearchBar = ({
	value,
	handleChange,
}: {
	value: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
}): JSX.Element => {
	const bgColor = useColorModeValue('neutral.100', 'neutral.800');

	return (
		<InputGroup>
			<Input
				value={value}
				onChange={handleChange}
				bgColor={bgColor}
				placeholder='Search articles'
			/>
			{/* <InputRightElement pointerEvents='none' children='search' /> */}
		</InputGroup>
	);
};

export default SearchBar;

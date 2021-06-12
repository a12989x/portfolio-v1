import {
	ChangeEvent,
	FormEvent,
	FunctionComponent,
	useRef,
	useState,
} from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Heading, Text } from '@chakra-ui/layout';
import VisuallyHidden from '@chakra-ui/visually-hidden';

import useColorModeValues from '@/utils/hooks/useColorModeValues';
import { ErrorMessage, SuccessMessage } from '@/components/Messages';

const Subscribe: FunctionComponent = (): JSX.Element => {
	const [form, setForm] = useState({ state: '', message: '' });
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef(null);
	const { errorColor, greyColor } = useColorModeValues();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const data = { email: inputValue, otherValue: 'hello world' };
		const options = {
			body: JSON.stringify(data),
			method: 'POST',
		};

		const res = await fetch('/api/subscribe/', options);
		const { success, message }: { success: boolean; message: string } =
			await res.json();

		if (!success) {
			setInputValue('');
			setForm({
				state: 'error',
				message,
			});
			setIsLoading(false);

			return;
		}

		setInputValue('');
		setForm({
			state: 'success',
			message,
		});
		setIsLoading(false);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setInputValue(e.target.value);

	return (
		<Box
			as='section'
			py={{ base: 4, sm: 8 }}
			px={{ base: 6, sm: 12 }}
			mt={{ base: 32, sm: 60 }}
			mx='auto'
			maxW='45rem'
			border='2px solid'
			borderColor={greyColor}
		>
			<Heading as='h3' size='md'>
				Subscribe to my newsletter
			</Heading>
			<Text mb={4}>
				Get emails from me about web development, design, accessibility
				and early access to content.
			</Text>

			<form onSubmit={handleSubmit}>
				<FormControl id='email'>
					<FormLabel>
						<VisuallyHidden>Enter your email</VisuallyHidden>
					</FormLabel>
					<InputGroup mb='1rem'>
						<Input
							value={inputValue}
							onChange={handleChange}
							ref={inputRef}
							errorBorderColor={errorColor}
							isRequired
							type='email'
							autoComplete='email'
							borderRadius='sm'
							placeholder='jimmy@choo.com'
						/>
						<InputRightElement minW='8rem'>
							{isLoading && true ? (
								<Button
									w='100%'
									isLoading
									variant='secondaryThemed'
									_hover={{ variant: 'secondaryThemed' }}
								/>
							) : (
								<Button
									w='100%'
									variant='secondaryThemed'
									type='submit'
								>
									Subscribe
								</Button>
							)}
						</InputRightElement>
					</InputGroup>
				</FormControl>
			</form>

			{form.state === 'success' && (
				<SuccessMessage>
					{form.message || `Congrats! You're on the mailing list.`}
				</SuccessMessage>
			)}
			{form.state === 'error' && (
				<ErrorMessage>
					{form.message || `You've already subscribed!`}
				</ErrorMessage>
			)}
		</Box>
	);
};

export default Subscribe;

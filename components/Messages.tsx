import React, { ReactNode } from 'react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { HStack, StackProps, Text } from '@chakra-ui/layout';

import useColorModeValues from '@/utils/hooks/useColorModeValues';

interface MessagesInterface extends StackProps {
	children: ReactNode;
	props?: StackProps;
}

const SuccessMessage = ({
	children,
	...props
}: MessagesInterface): JSX.Element => {
	const { successColor } = useColorModeValues();

	return (
		<HStack spacing={2} {...props}>
			<CheckCircleIcon color={successColor} />
			<Text color={successColor}>{children}</Text>
		</HStack>
	);
};

const ErrorMessage = ({
	children,
	...props
}: MessagesInterface): JSX.Element => {
	const { errorColor } = useColorModeValues();

	return (
		<HStack spacing={2} {...props}>
			<WarningIcon color={errorColor} />
			<Text color={errorColor}>{children}</Text>
		</HStack>
	);
};

export { SuccessMessage, ErrorMessage };

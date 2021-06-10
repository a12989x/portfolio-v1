import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

import useColorModeValues from '@/utils/hooks/useColorModeValues';

const SuccessMessage = ({ children }: { children: ReactNode }): JSX.Element => {
	const { successColor } = useColorModeValues();

	return (
		<HStack spacing={2}>
			<CheckCircleIcon color={successColor} />
			<Text color={successColor}>{children}</Text>
		</HStack>
	);
};

const ErrorMessage = ({ children }: { children: ReactNode }): JSX.Element => {
	const { errorColor } = useColorModeValues();

	return (
		<HStack spacing={2}>
			<WarningIcon color={errorColor} />
			<Text color={errorColor}>{children}</Text>
		</HStack>
	);
};

export { SuccessMessage, ErrorMessage };

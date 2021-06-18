import { ChangeEvent, useState } from 'react';

export const useForm = (
	initialValues: Record<string, string>
): [
	Record<string, string>,
	(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] => {
	const [values, setValues] = useState<Record<string, string>>(initialValues);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValues({ ...values, [e.target.id]: e.target.value });
	};

	return [values, handleChange];
};

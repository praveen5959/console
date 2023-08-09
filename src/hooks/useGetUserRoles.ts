import { StatusCodes } from 'http-status-codes';
import useMountedState from './useMountedState';
import { getUserRoles } from '@/api/users';

export const useGetUserRole = () => {
	const [data, setData] = useMountedState<any | null>(null);
	const [error, setError] = useMountedState<string | null>(null);
	const [loading, setLoading] = useMountedState<boolean>(false);

	const getRoles = async (userName:string) => {
		try {
			setLoading(true);
			setError(null);
			const res = await getUserRoles(userName);

			switch (res.status) {
				case StatusCodes.OK: {
					setData(res.data);
					break;
				}
				default: {
					setError('Failed to get Roles');
					console.error(res);
				}
			}
		} catch(error) {
			setError('Failed to get ALert');
			console.error(error);	
		} finally {
			setLoading(false);
		}
	};

	const resetData = () => {
		setData(null);
	};

	return { data, error, loading, getRoles, resetData };
};
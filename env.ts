export const getApiOrigin = () => {
	if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_ORIGIN === undefined) {
		return 'http://localhost:8000'
	}
	return process.env.NEXT_PUBLIC_ORIGIN
}

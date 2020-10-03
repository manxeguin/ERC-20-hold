export const Loading = () => ({ loading: true, data: null, error: null });
export const Success = (data) => ({ loading: false, data, error: null });
export const Error = (error) => ({ loading: false, data: null, error });
export const InitialState = () => ({ loading: false, data: null, error: null });

import { createWrapper } from 'next-redux-wrapper';
import store from './reducers/root';

// export an assembled wrapper
export const wrapper = createWrapper(store, {debug: process.env.NODE_ENV !== "production"});
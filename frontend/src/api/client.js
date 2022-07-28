import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'
import { DEFAULT_API_LOCALHOST } from '../urls';

const options = {
    ignoreHeaders: true,
}


export const client = applyCaseMiddleware(
    axios.create({
        baseURL: DEFAULT_API_LOCALHOST,
    }),
    options
);
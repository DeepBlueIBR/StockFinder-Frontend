import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const { data } = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;
    } catch (error: unknown) {
        // Use manual type guard if `axios.isAxiosError` doesn't exist
        if ((error as any).isAxiosError) {
            console.log("error message: ", (error as any).message);
            return (error as any).message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occurred.";
        }
    }
};

export const getCompanyProfile = async (query: string ) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error meesage from API", error.message);
    }
}

export const getKeyMetrics = async (query: string ) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
        `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    )
        console.log(data);
        return data;
    } catch (error: any) {
        console.log("error meesage from API", error.message);
    }
}

import axios from "axios";
import { CompanySearch } from "./company";

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

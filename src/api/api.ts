import axios from "axios";
import {useEffect, useState} from "react";
import {accountUrl, historyUrl, loginUrl, urlApiVn, urlInformation} from "@/constants";




interface MyObject {
    Username: string;
}

const containsString = (username: string, array: MyObject[]): boolean => {
    return array.some(element => element.Username === username);
};
export const useFetchData = (username: string) => {
    const [isUserFound, setIsUserFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(accountUrl);
                const data: MyObject[] = response.data;
                if (data && isMounted) {
                    const res = containsString(username, data);
                    setIsUserFound(res);
                }
            } catch (error) {
                console.error(error);
                if (isMounted) {
                    setError(error instanceof Error ? error.message : 'Đã xảy ra lỗi không xác định');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        if (username) {
            fetchData();
        }

        return () => {
            isMounted = false;
        };
    }, [username, accountUrl]);

    return {isUserFound, isLoading, error};
};

export const fetchDataHistory = async (id: string) => {
    try {
        const response = await axios.get(`${historyUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postData = async (username: string, password: string): Promise<{ data: any, success: boolean }> => {
    try {
        const response = await axios.post(
            loginUrl,
            {username, password},
            {
                withCredentials: true,
                timeout: 30000,
            }
        );
        if (response.status === 200) {
            return {data: response.data, success: true};
        } else {
            return {data: null, success: false};
        }
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        return {data: null, success: false};
    }
};

export interface Ward {
    Id: string;
    Name: string;
}

export interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}

export interface City {
    Id: string;
    Name: string;
    Districts: District[];
}

export const fetchDataInformation = async () => {
    try {
        const response = await axios.get<City[]>(urlInformation);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const fetchDataVn = async () => {
    try {
        return await axios.get(urlApiVn);
    } catch (error) {
        console.error(error);
    }
};
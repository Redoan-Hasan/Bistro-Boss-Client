import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenuAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {data : menuItems = [] , refetch , isLoading} = useQuery({
        queryKey: ['allMenuItems'],
        queryFn: async () => {
            const res = await axiosSecure.get("/menu");
            return res.data;
        }
    })
    return [menuItems , refetch , isLoading];
};

export default useMenuAdmin;
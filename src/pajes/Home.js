import {useEffect, useState} from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getAllCategories } from "../api";
import { Loader } from "../components/Loader";
import {CategoryList} from "../components/CategoryList"
import {Search} from "../components/Search"
function Home() {
const [catalog, setCatalog] = useState( [ ] );
const [filteredCatalog, setFilteredCatalog] =useState([]);

const {pathname, search} = useLocation();
const {push} = useHistory();

const handleSearch = (str) => {
    setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    push({
        pathname,
        search: `?search=${str}`
    })
}
useEffect (() => {
    getAllCategories().then(data => {
        setCatalog(data.categories)

        setFilteredCatalog(data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split("=")[1].toLocaleLowerCase())));

    })
}, [] )
    return(
        <>
        <Search />
         {!catalog.length ? (
             <Loader/>
            ) : (
                <CategoryList catalog={catalog} />
              )}   
        </>
    )
}
export { Home };

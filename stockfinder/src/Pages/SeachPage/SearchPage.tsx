import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import Navbar from '../../Components/Navbar/Navbar';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props {};

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const[serverError, setServerEroor] = useState<string>("");
  
      const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
      };
  
      const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exists = portfolioValues.find((value) => value === e.target[0].value);
        if (exists) return;
        const updatedPortfolio = [... portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
      }
  
      const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
          return value !== e.target[0].value;
        });
        setPortfolioValues(removed);
      }
  
      const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
  
          const result = await searchCompanies(search);
  
          if(typeof result === "string") {
            setServerEroor(result);
          } else  {
            setSearchResult(result);
          }
          console.log(searchResult);
      };
  return (
    <div className='App'>
        
        <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} handleSearchChange= {handleSearchChange} 
        />
        <ListPortfolio 
        portfolioValues={portfolioValues} 
        onPortfolioDelete={onPortfolioDelete} 
        />
        <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}
        />
        </div>
  )
}

export default SearchPage

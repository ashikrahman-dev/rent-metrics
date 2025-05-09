import { useState } from "react";
import PropertiesNotFoundCard from "../../components/PropertiesNotFoundCard/PropertiesNotFoundCard";
import PropertySearchFilter from "../../components/PropertySearchFilter/PropertySearchFilter";
import { propertyList } from "../../utils/data/data"; // Import propertyList
import { Link } from "react-router-dom";

export default function NoPropertiesFound() {
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false);
    
    const handleSearch = (query) => {
        // Filter properties based on name or address
        const results = propertyList.filter(
            property => 
                property.name.toLowerCase().includes(query.toLowerCase()) ||
                property.address.toLowerCase().includes(query.toLowerCase())
        );
        
        setSearchResults(results);
        setSearched(true);
    };
    
    return (
        <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
            <div className="container mx-auto pb-12">
               <div className="flex items-center justify-between">
                <div>
                <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">
                    Load Property
                </h2>
                <p className="text-dark-2 text-base leading-[1.3] mb-8">
                    Search for an existing property or add a new one to the
                    system
                </p>
                </div>
                <Link
          to="/add-new-properties"
          className="text-base px-[18px] py-[9px] bg-transparent text-[#54616B] border-1 hover:border-main-shade border-[#54616B] rounded-[8px] font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto">
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.32725 10.6732H4.16699V9.327H9.32725V4.16675H10.6734V9.327H15.8337V10.6732H10.6734V15.8334H9.32725V10.6732Z" fill="#54616B"  className="transition-all duration-200 group-hover:fill-main"/>
</svg>


         
          Add Property
        </Link>
               </div>

                <PropertySearchFilter onSearch={handleSearch} />
                <PropertiesNotFoundCard 
                    searchResults={searchResults} 
                    searched={searched} 
                />
            </div>
        </section>
    );
}
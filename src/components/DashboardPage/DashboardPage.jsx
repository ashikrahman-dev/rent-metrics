import React, { useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import PropertySummary from '../../pages/PropertySummary/PropertySummary';

const DashboardPage = () => {
 const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (term) => {
setSearchTerm(term);
 };

console.log("handleSearch in DashboardPage:", handleSearch); // Check this line

 return (
 <div>
<DashboardHeader onSearch={handleSearch} />
<PropertySummary searchTerm={searchTerm} />
 </div>
);
};

export default DashboardPage;